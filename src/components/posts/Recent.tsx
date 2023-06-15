import React from "react";
import { posts } from "@/service/posts";
import BlogPost from "./BlogPost";

export default function Recent() {
    return (
        <div className={`flex flex-col`}>
            {posts.slice(0, 3).map((post) => (
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
    );
}
