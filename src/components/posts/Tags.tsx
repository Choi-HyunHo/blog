"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Props {
    onFilter: (tag: string) => void;
    onClearFilter: () => void;
    tagData?: string;
}

const tagList = [
    "All",
    "Next.js",
    "React",
    "TS",
    "JS",
    "CSS",
    "Python",
    "Review",
    "Dev",
]; // 태그 목록 배열

const Tags = ({ onFilter, onClearFilter, tagData }: Props) => {
    const [selectedTag, setSelectedTag] = useState(tagData); // 선택된 태그를 저장하는 상태
    const router = useRouter();

    // 태그 버튼을 생성하는 함수
    const renderTagButtons = () =>
        tagList.map((tag) => (
            <button
                className={`${
                    selectedTag === tag
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-700"
                } px-3 py-1 rounded-md`}
                onClick={() => {
                    onFilter(tag);
                    router.push(`/posts/${tag}`);
                }}
                key={tag}
            >
                {tag}
            </button>
        ));

    return (
        <div>
            <div className="flex flex-wrap gap-2">
                <button
                    className={`${
                        tagData === undefined
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-gray-700"
                    } px-3 py-1 rounded-md`}
                    onClick={() => router.push(`/posts`)}
                >
                    All
                </button>
                {renderTagButtons().slice(1)}
            </div>
        </div>
    );
};

export default Tags;
