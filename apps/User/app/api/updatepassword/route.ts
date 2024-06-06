import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import db from "@repo/db/clients";
import { authOptions } from "../../../lib/auth";
import bcrypt from "bcrypt";

const updatepassword = async (req: any): Promise<NextResponse> => {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user?.email) {
            return NextResponse.json({
                success: false,
                error: {
                    path: 'global',
                    message: 'No user session found'
                }
            });
        } 

        const body = await req.json()  
        const { oldpassword, newpassword } = body.data || body 

        const user = await db.user.findFirst({
            where: { email: session.user.email },
            select: { password: true }
        });

        if (!user?.password) {
            return NextResponse.json({
                success: false,
                error: {
                    path: 'global',
                    message: 'Error in password'
                }
            });
        }

        const isPasswordMatch = await bcrypt.compare(oldpassword, user.password);
        if (!isPasswordMatch) {
            return NextResponse.json({
                success: false,
                message: "The password is incorrect"
            });
        }

        const encryptedPassword = await bcrypt.hash(newpassword, 10);
        await db.user.update({
            where: { email: session.user.email },
            data: { password: encryptedPassword }
        });

        return NextResponse.json({
            success: true,
            message: "Password updated successfully"
        });

    } catch (error) {
        console.error("Error in updating password:", error);
        return NextResponse.json({
            success: false,
            error: {
                path: 'global',
                message: 'Error in updating password'
            }
        });
    }
};

export { updatepassword as GET, updatepassword as POST };
