import Link from "next/link";
import Button from "./Button";

export default function Header() {
    return (
        <header className="flex justify-between sticky top-0 left-0 z-10 h-20 w-full bg-white dark:bg-[#111111]">
            <Link href="/" className="flex items-center text-2xl font-semibold">
                HyunHo
            </Link>
            <nav className="flex items-center gap-4 text-xl">
                <Button />
                <Link href="">Resume</Link>
                <Link href="/posts">Note</Link>
            </nav>
        </header>
    );
}
