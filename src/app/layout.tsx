import Header from "@/components/ui/Header";
import "./globals.css";
import { Karla } from "next/font/google";
import Footer from "@/components/ui/Footer";
import Provider from "@/components/Provider";

const karla = Karla({ subsets: ["latin"] });

export const metadata = {
	title: {
		default: "개발자 현호의 블로그 입니다.",
		template: "현호의 블로그 | %s",
	},
	description: "Frontend Developer 최현호 입니다.",
	icons: {
		icon: "/favicon.ico",
	},
	metadataBase: new URL("https://www.choi-hyunho.com/"),
	alternates: {
		canonical: "/",
	},
	generator: "Next.js",
	referrer: "origin-when-cross-origin",
	keywords: ["Next.js", "React", , "TypeScript", "JavaScript", "개발자"],
	authors: [{ name: "choihyunho", url: "https://www.choi-hyunho.com" }],
	creator: "hyunho Choi",
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
