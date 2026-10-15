let userExists: boolean;
import prisma from '../../config/prisma.js';
import { sendOtpEmail } from './auth.util.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

let Otp: string | undefined;

export const otpSend = async (name:string,email: string) => {
    const isUser = await prisma.user.findUnique({ where: { email } });
    if (isUser) userExists = true;
    Otp = await sendOtpEmail(email);
    return "Mail sent successfully"
}

export const otpVerify = async (otp: string, email: string,name:string) => {
    try {
        if (Otp !== otp) {
            throw new Error('Invalid OTP');
        }
        const user = await prisma.user.create({
            data: {
                name,
                email
            },
        });

        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) throw new Error('JWT_SECRET is not defined');

        const accessToken = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '15m' });
        const refreshToken = jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '7d' });

        return { message: 'Otp verified successfully', accessToken, refreshToken };
    } catch (error) {
        const msg = error instanceof Error ? error.message : String(error);
        throw new Error(`error in validating otp: ${msg}`);
    }
}