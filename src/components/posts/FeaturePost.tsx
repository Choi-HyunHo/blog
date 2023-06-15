import React from "react";
import { posts } from "@/service/posts";
import BlogPost from "./BlogPost";

export default function FeaturePost() {
    const featurePosts = posts.filter((p) => p.feature === "true");

    return (
        <div className={`flex flex-col`}>
            {featurePosts.map((post) => (
                <BlogPost
                    date={post.date || ""}
                    title={post.title || ""}
                    des={post.description || ""}
                    slug={post._raw.flattenedPath || ""}
                    tag={post.tag || ""}
                    key={post._id}
                />
            ))}
        </div>
    );
}
