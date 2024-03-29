"use client";

import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import { usePathname } from "next/navigation";
import { SiMinutemailer } from "react-icons/si";

export default function Header() {
    const pathname = usePathname();

    return (
        <header
            className={`${
                pathname === "/resume" ? "mb-0" : "mb-10"
            }0 flex justify-between sticky top-0 left-0 z-10 h-20 w-full bg-white dark:bg-[#22272e]`}
        >
            <Link href="/" className="flex items-center text-2xl font-semibold">
                <Image src={Logo} alt="logo" width={50} />
            </Link>
            <nav className="flex items-center gap-4 text-xl">
                <Button />
                <Link href="/resume">Resume</Link>
                <Link href="/posts">Note</Link>
                <Link href="/contact">
                    <SiMinutemailer />
                </Link>
            </nav>
        </header>
    );
}
