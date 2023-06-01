import { allPosts } from "contentlayer/generated";

export const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
);
