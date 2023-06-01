"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Props {
    date: string;
    title: string;
    des: string;
    tag: string;
    slug: string;
}

export default function BlogPost({ date, title, des, tag, slug }: Props) {
    const [filteredData, setFilteredData] = useState(tag);
    const [filterValue, setFilterValue] = useState("");

    return (
        <Link href={`/posts/${slug}`} passHref>
            <div className="w-full my-7">
                <div className="flex gap-2">
                    <div className="font-medium text-xs text-gray-400">
                        {date}
                    </div>
                    <div className="font-medium text-xs text-gray-400">
                        {tag}
                    </div>
                </div>

                <div className={`font-extrabold text-lg md:text-xl mt-2`}>
                    {title}
                </div>
                <div className={`font-medium text-gray-600 text-lg mt-1`}>
                    {des}
                </div>
            </div>
        </Link>
    );
}
