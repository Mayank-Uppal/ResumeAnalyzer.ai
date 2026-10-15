import type { Request,Response,NextFunction } from "express";
import * as authService from './auth.service.js';
import type { assert } from "node:console";

export const sendOtp=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const name=req.body.name as string;
        const email=req.body.email as string;
        const data=await authService.otpSend(name,email);
        return res.json({message:"otp send successfully",data});
    } catch (error) {
        next(error)
    }
}

export const verifyOtp=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const {otp,email,name}=req.body as {otp:string,email:string,name:string};
        const data=await authService.otpVerify(otp,email,name);
        return res.json({message:"Otp verified successfully",data});
    } catch (error) {
        next(error)
    }
}