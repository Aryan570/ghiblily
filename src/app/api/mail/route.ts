import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"
import { z } from "zod";

const MailSchema = z.object({
    name: z.string().min(3, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(5, "Message is required").max(2000, "Message too long"),
});

export async  function POST(request : NextRequest){
    const { name, email, message } = await request.json();
    const parsedData = MailSchema.safeParse({ name, email, message });
    if (!parsedData.success) {
        return NextResponse.json(
            { error: parsedData.error.errors.map(e => e.message).join(", ") },
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