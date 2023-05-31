import Link from "next/link";
import Button from "./Button";

export default function Header() {
    return (
        <header className="flex justify-between sticky top-0 left-0 z-10 h-20 w-full">
            <Link href="/" className="flex items-center text-2xl">
                HyunHo
            </Link>
            <nav className="flex items-center gap-4 font-semibold text-xl">
                <Button />
                <Link href="">About</Link>
                <Link href="">Resume</Link>
                <Link href="">Note</Link>
            </nav>
        </header>
    );
}
