"use client";

import React, { FormEvent, useState } from "react";
import Banner from "../ui/Banner";
import { BannerData } from "../ui/Banner";
import { sendContactEmail } from "@/service/email";

export default function ContactForm() {
    const [banner, setBanner] = useState<BannerData | null>();

    const [form, setForm] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const onChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setBanner({ message: "Sending email...", state: "pending" });
        sendContactEmail(form)
            .then(() => {
                setBanner({
                    message: "Email sent successfully, thank you 😃",
                    state: "sucess",
                });
                setTimeout(() => {
                    setBanner(null);
                }, 3000);
                setForm({
                    email: "",
                    subject: "",
                    message: "",
                });
            })
            .catch(() => {
                setBanner({
                    message: "Email delivery failed, please try again 🥹",
                    state: "error",
                });
            });
    };

    return (
        <>
            {banner && <Banner banner={banner} />}
            <form
                onSubmit={onSubmit}
                className="mt-8 flex flex-col justify-center items-center"
            >
                <label className="block">
                    <p className="contact-text">Email</p>
                    <input
                        required
                        type="email"
                        name="email"
                        className="contact-input"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={onChange}
                    />
                    <p className="contact-text">Subject</p>
                    <input
                        required
                        type="text"
                        name="subject"
                        className="contact-input"
                        placeholder="제목을 입력해주세요"
                        onChange={onChange}
                        value={form.subject}
                    />
                    <p className="contact-text">Message</p>
                    <textarea
                        required
                        name="message"
                        className="contact-input"
                        rows={8}
                        onChange={onChange}
                        value={form.message}
                    />
                </label>
                <div className="relative inline-block px-4 py-2 font-medium group">
                    <span className="contact-btn-container"></span>
                    <span className="contact-btn-inner"></span>
                    <button className="contact-btn">Submit</button>
                </div>
            </form>
        </>
    );
}
