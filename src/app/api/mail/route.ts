import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async  function POST(request : NextRequest){
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
        return NextResponse.json(
            {error : "Please fill all the fields"},
            {status : 400}
        )
    }
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    })
    const mail_data = {
        from : email,
        to : process.env.SMTP_USER,
        subject : `Message from ${name} | ${email}`,
        text : message,
        html : `<div>${message}</div><p>Sent from: ${email}</p>`
    }
    transporter.sendMail(mail_data, function(err){
        if(err){
            return NextResponse.json(
                {error : "Error from transporter"},
                {status : 500}
            )
        }
    })
    return NextResponse.json(
        {message : "Mail sent successfully"},
        {status : 200}
    )
}