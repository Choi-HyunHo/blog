"use client";

import React, { useState } from "react";

interface Props {
    onFilter: (tag: string) => void;
    onClearFilter: () => void;
}

const tagList = ["All", "Next.js", "React", "TS", "JS", "CSS"]; // 태그 목록 배열

const Tags = ({ onFilter, onClearFilter }: Props) => {
    const [selectedTag, setSelectedTag] = useState("All"); // 선택된 태그를 저장하는 상태

    // 태그를 선택하면 선택된 태그 상태를 업데이트하고 필터링 함수 호출
    const handleTagSelection = (tag: string) => {
        if (tag !== selectedTag) {
            setSelectedTag(tag); // 다른 태그를 선택하는 경우
            onFilter(tag); // 필터링 함수 호출
        }
    };

    // "All" 버튼을 눌렀을 때 선택된 태그 상태를 확인하고 필터링 해제 함수 호출
    const handleAllButtonClick = () => {
        if (selectedTag !== "All") {
            setSelectedTag("All"); // 선택된 태그 상태를 "All"로 업데이트
            onClearFilter(); // 필터링 해제 함수 호출
        }
    };

    // 태그 버튼을 생성하는 함수
    const renderTagButtons = () =>
        tagList.map((tag) => (
            <button
                className={`${
                    selectedTag === tag
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-700"
                } px-3 py-1 rounded-md`}
                onClick={() => handleTagSelection(tag)}
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
                        selectedTag === "All"
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-gray-700"
                    } px-3 py-1 rounded-md`}
                    onClick={handleAllButtonClick}
                >
                    All
                </button>
                {renderTagButtons().slice(1)}
            </div>
        </div>
    );
};

export default Tags;
