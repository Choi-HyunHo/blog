import Image from "next/image";
import Profile from "../../../public/images/human.jpg";
import View from "../../../public/images/overview.gif";

export default function Hero() {
    return (
        <section className="mt-10 mb-10 flex flex-col sm:flex-row justify-center items-center gap-8 flex-wrap">
            <Image
                src={Profile}
                alt="choi hyunho"
                width={350}
                height={100}
                priority
                className="rounded-2xl"
            />
        </section>
    );
}
