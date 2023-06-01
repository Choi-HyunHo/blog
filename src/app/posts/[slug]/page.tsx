import React from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import { allPosts } from "contentlayer/generated";
import Container from "@/components/Container";

export default function Detail({ params }: any) {
    const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);

    if (!post) {
        return <div>페이지를 찾을 수 없습니다.</div>;
    }

    const MDXComponent = useMDXComponent(post.body.code);

    return (
        <Container>
            <div className="prose max-w-screen-md">
                <h1 className="">{post.title}</h1>
                <MDXComponent />
            </div>
        </Container>
    );
}
