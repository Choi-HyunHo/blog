import { allPosts } from "contentlayer/generated";

export async function AllPosts() {
    const posts = allPosts.sort(
        (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
    );
}
