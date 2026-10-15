import client from '../../config/mail';

export const sendOtpEmail=async(email:string)=>{
    const Otp=Math.floor(400000 + Math.random()*1000).toString();
    try {
        const result=await client.transactionalEmails.sendTransacEmail({
            subject: 'OTP for Authentication',
            textContent: `Dear User,
            Your One-Time Password (OTP) for authentication is: ${Otp}
            Regards,
            Team Mayank`,
            sender:{name:"Mayank",email:"myank07official@gmail.com"},
            to:[{email:email}]
        }) 
        return Otp;
    } catch (error) {
        throw new Error("error in sending email");
        console.log(error);
    }
}

