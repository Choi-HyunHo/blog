import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: any) {
    const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

    return {
        title: post?.title,
        description: post?.description,
    };
}

export default function Detail({ params }: any) {
    const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

    if (!post) notFound();

    const MDXComponent = useMDXComponent(post.body.code);

    return (
        <div className="max-screen-md">
            <div className="prose max-w-none dark:text-white mt-10 dark:bg-[#22272e]">
                <h1>{post.title}</h1>
                <MDXComponent />
            </div>
        </div>
    );
}
