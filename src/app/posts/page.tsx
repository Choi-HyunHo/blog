"use client";

import React, { useState } from "react";
import BlogPost from "@/components/posts/BlogPost";
import Tags from "@/components/posts/Tags";
import Title from "@/components/ui/Title";
import { posts } from "@/service/posts";

export default function Blog() {
    const [filteredPosts, setFilteredPosts] = useState(posts); // 필터링된 포스트 목록을 저장하는 상태

    // 태그를 선택하면 해당 태그에 해당하는 포스트만 필터링하여 상태 업데이트
    const handleFilterByTag = (tag: string) => {
        const filtered = posts.filter((post) => post.tag === tag);
        setFilteredPosts(filtered);
    };

    // 필터링 해제 버튼을 클릭하면 모든 포스트를 보여줌
    const handleClearFilter = () => {
        setFilteredPosts(posts);
    };

    return (
        <div>
            <Title title="📝 Notes" />
            <Tags
                onFilter={handleFilterByTag}
                onClearFilter={handleClearFilter}
            />
            <div className={`mt-10 flex flex-col`}>
                {filteredPosts.map((post) => (
                    <BlogPost
                        date={post.date}
                        title={post.title}
                        des={post.description}
                        slug={post._raw.flattenedPath}
                        tag={post.tag}
                        key={post._id}
                    />
                ))}
            </div>
        </div>
    );
}
