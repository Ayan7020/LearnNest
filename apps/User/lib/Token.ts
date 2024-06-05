import jwt from 'jsonwebtoken';
import { getServerSession } from "next-auth";
import { authOptions } from "./auth";

const secret = process.env.JWT_SECRET || '';



export default async function GetJWTToken() { 
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Authentication required");
  }

  const encodedToken = jwt.sign(session, secret, { expiresIn: '1h' });
  return  `Bearer ${encodedToken}` 
}
