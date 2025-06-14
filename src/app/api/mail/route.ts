import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

const MailSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(5, "Message is required").max(2000, "Message too long"),
})

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()
    const parsedData = MailSchema.safeParse({ name, email, message })
    if (!parsedData.success) {
      return NextResponse.json({ error: parsedData.error.errors.map((e) => e.message).join(", ") }, { status: 400 })
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
    await transporter.verify();
    const mail_data = {
      from: email,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `Message from ${name} | ${email}`,
      text: message,
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Message:</strong></p>
                    <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
                        ${message.replace(/\n/g, "<br>")}
                    </div>
                    <hr>
                    <p style="color: #666; font-size: 12px;">This message was sent from your portfolio contact form.</p>
                </div>
            `,
    }
    await transporter.sendMail(mail_data);
    return NextResponse.json({ message: "Mail sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email sending error:", error);
    if (error instanceof Error) {
      if (error.message.includes("authentication")) {
        return NextResponse.json(
          { error: "Email authentication failed. Please check your credentials." },
          { status: 500 },
        )
      }
      if (error.message.includes("connection")) {
        return NextResponse.json({ error: "Failed to connect to email server." }, { status: 500 });
      }
    }
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 });
  }
}
