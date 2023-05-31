import Header from "@/components/Header";
import "./globals.css";
import { Karla } from "next/font/google";
import Footer from "@/components/Footer";
import Provider from "@/components/Provider";

const karla = Karla({ subsets: ["latin"] });

export const metadata = {
    title: "Hyunho's blog",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko" className={karla.className}>
            <body className="max-w-screen-md flex flex-col px-4 m-auto">
                <Provider>
                    <Header />
                    {children}
                    <Footer />
                </Provider>
            </body>
        </html>
    );
}
