import MainView from "@/components/posts/MainView";
import { getPosts } from "@/service/posts";

export default async function Blog() {
    const data = await getPosts();
    return <MainView data={data} />;
}
