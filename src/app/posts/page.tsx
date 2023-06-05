import MainView from "@/components/posts/MainView";
import { getPosts } from "@/service/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Notes",
    description: "공부 기록 노트",
};

export default async function Blog() {
    const data = await getPosts();
    return <MainView data={data} />;
}
