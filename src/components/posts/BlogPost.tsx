"use client";

import Link from "next/link";

interface Props {
    date: string;
    title: string;
    des: string;
    tag: string;
    slug: string;
}

export default function BlogPost({ date, title, des, tag, slug }: Props) {
    return (
        <Link href={`/posts/${tag}/${slug}`} passHref>
            <div className="w-full my-7">
                <div className="flex gap-2">
                    <p className="font-medium text-xs text-gray-400">{date}</p>
                    <p className="font-medium text-xs text-gray-400">{tag}</p>
                </div>

                <p className={`font-bold text-lg md:text-xl mt-2`}>{title}</p>
                <p className="mt-1">{des}</p>
            </div>
        </Link>
    );
}
