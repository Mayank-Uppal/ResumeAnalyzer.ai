import axios from 'axios';
const BASE_URL='http://localhost:4000';

export const auth={
    sendOtp:async(name:string,email:string)=>{
        const res=await axios.post(`${BASE_URL}/auth/send-otp`,{name,email});
        return res.data
    },
    verifyOtp:async(otp:string,email:string)=>{
        const res=await axios.post(`${BASE_URL}/auth/verify-otp`,{otp,email,name});
        return res.data
    },
    
}