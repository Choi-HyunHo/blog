"use client";

import React, { useState } from "react";

interface Props {
    onFilter: (tag: string) => void;
    onClearFilter: () => void;
}

const Tags = ({ onFilter, onClearFilter }: Props) => {
    const [selectedTag, setSelectedTag] = useState(""); // 선택된 태그를 저장하는 상태

    // 태그를 선택하면 선택된 태그 상태를 업데이트하고 필터링 함수 호출
    const handleTagSelection = (tag: string) => {
        setSelectedTag(tag);
        onFilter(tag);
    };

    // 필터링 해제 버튼을 클릭하면 선택된 태그 상태를 초기화하고 필터링 해제 함수 호출
    const handleClearFilter = () => {
        setSelectedTag("");
        onClearFilter();
    };

    return (
        <div>
            <div className="flex gap-2">
                <button
                    className={`${
                        selectedTag === ""
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-gray-700"
                    } px-3 py-1 rounded-md`}
                    onClick={handleClearFilter}
                >
                    All
                </button>
                <button
                    className={`${
                        selectedTag === "React"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-gray-700"
                    } px-3 py-1 rounded-md`}
                    onClick={() => handleTagSelection("React")}
                >
                    React
                </button>
                <button
                    className={`${
                        selectedTag === "JS"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-gray-700"
                    } px-3 py-1 rounded-md`}
                    onClick={() => handleTagSelection("JS")}
                >
                    JS
                </button>
                {/* 추가적인 태그 버튼들 */}
            </div>
        </div>
    );
};

export default Tags;
