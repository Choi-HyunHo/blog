import ContactForm from "@/components/contact/ContactForm";
import Title from "@/components/ui/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Me",
    description: "궁금한 점이 있다면 메세지를 남겨주세요!",
};

export default function contact() {
    return (
        <main className="flex flex-col justify-center items-center">
            <Title title={"Contact Me"} />
            <ContactForm />
        </main>
    );
}
