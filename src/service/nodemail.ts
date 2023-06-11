import nodemailer from "nodemailer";
import { EmailData } from "@/app/api/contact/route";

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.NEXT_PUBLIC_NODEMAILER_USER,
        pass: process.env.NEXT_PUBLIC_NODEMAILER_PASS,
    },
});

export async function mailInfo({ email, subject, message }: EmailData) {
    const data = {
        to: process.env.NEXT_PUBLIC_NODEMAILER_USER,
        subject: `[Blog] ${subject}`,
        html: `
            <h1>${subject}</h1>
            <p>${message}</p>
            <br/>
            <p>From. ${email}</p>
        `,
    };

    return transporter.sendMail(data);
}
