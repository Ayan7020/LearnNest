import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";
import db from "@repo/db/clients";

const deleteAccount = async (req: NextApiRequest): Promise<NextResponse> => {
    try {
        const session = await getServerSession(authOptions);
        const userEmail = session?.user?.email;

        if (!userEmail) {
            return NextResponse.json({
                success: false,
                message: "Session not found"
            });
        }

        await db.user.delete({
            where: {
                email: userEmail,
            },
            include: {
                additionalDetails: true,
            },
        });

        return NextResponse.json({
            success: true,
            message: "Account deleted successfully",
        });
    } catch (e: any) {
        console.error("Error in deleting account:", e);

        return NextResponse.json({
            success: false,
            message: "Error while deleting account",
            error: e.message,
        });
    }
};

export {deleteAccount as POST}
