import Header from "@/components/ui/Header";
import "./globals.css";
import { Karla } from "next/font/google";
import Footer from "@/components/ui/Footer";
import Provider from "@/components/Provider";

const karla = Karla({ subsets: ["latin"] });

export const metadata = {
    title: {
        default: "현호의 블로그",
        template: "현호의 블로그 | %s",
    },
    description: "개발자 최현호 입니다.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body className={karla.className}>
                <Provider>
                    <Header />
                    {children}
                    <Footer />
                </Provider>
            </body>
        </html>
    );
}
