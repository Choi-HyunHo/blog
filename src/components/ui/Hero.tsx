import Image from "next/image";
import Profile from "../../../public/images/profile.jpg";

export default function Hero() {
    return (
        <section className="mt-10 mb-10 flex flex-col sm:flex-row justify-center items-center gap-8 flex-wrap">
            <Image
                src={Profile}
                alt="choi hyunho"
                width={300}
                height={300}
                priority
                className="rounded-2xl"
            />
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-lg sm:text-xl font-bold">
                    프론트엔드 개발자 최현호 입니다.
                </h2>
                <br></br>
                <p>개인의 성장을 확산시켜 팀 전체의</p>
                <p>성장에 기여할 때 큰 보람을 느낍니다.</p>
                <div className="flex justify-center gap-4 items-center pt-4">
                    <a
                        href="hyunhoc815@gmail.com"
                        className="hover:scale-110 transition-transform duration-300 dark:fill-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z" />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/Choi-HyunHo"
                        className="hover:scale-110 transition-transform duration-300 dark:fill-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
