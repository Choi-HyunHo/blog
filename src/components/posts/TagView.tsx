"use client";

import React, { useState } from "react";
import Tags from "./Tags";
import Title from "../ui/Title";
import BlogPost from "./BlogPost";
import { notFound } from "next/navigation";

interface Props {
    filtered: any;
    pData: string;
}

export default function TagView({ filtered, pData }: Props) {
    const [filteredPosts, setFilteredPosts] = useState(filtered); // 필터링된 포스트 목록을 저장하는 상태

    // 태그를 선택하면 해당 태그에 해당하는 포스트만 필터링하여 상태 업데이트
    const handleFilterByTag = () => {
        setFilteredPosts(filtered);
    };

    // 필터링 해제 버튼을 클릭하면 모든 포스트를 보여줌
    const handleClearFilter = () => {
        setFilteredPosts("All");
    };

    if (!filteredPosts) notFound();

    return (
        <main>
            <Title title="📝 Notes" />
            <Tags
                onFilter={handleFilterByTag}
                onClearFilter={handleClearFilter}
                tagData={pData}
            />
            <div className={`mt-10 flex flex-col`}>
                {filteredPosts.map((data: any) => (
                    <BlogPost
                        date={data.date}
                        title={data.title}
                        des={data.description}
                        slug={data._raw.flattenedPath}
                        tag={data.tag}
                        key={data._id}
                    />
                ))}
            </div>
        </main>
    );
}
