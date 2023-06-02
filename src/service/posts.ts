import { allPosts } from "contentlayer/generated";

export const getPosts = async () => {
    const posts = allPosts.sort(
        (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
    );

    return posts;
};

export const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
);
