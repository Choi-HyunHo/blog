import Link from "next/link";
import Image from "next/image";
import Human from "../../public/images/404.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function NotFound() {
    return (
        <section>
            <Image src={Human} alt="404" width={1000} height={100} />
            <div className="flex flex-col justify-center items-center">
                <h1 className="my-10">존재하지 않는 페이지 입니다.</h1>
                <Link href="/">
                    <AiOutlineArrowRight className="inline" /> Go Home
                </Link>
            </div>
        </section>
    );
}
