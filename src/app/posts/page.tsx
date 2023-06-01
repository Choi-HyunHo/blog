import BlogPost from "@/components/BlogPost";
import { allPosts } from "contentlayer/generated";

const Blog = () => {
    const posts = allPosts.sort(
        (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
    );

    return (
        <div>
            <div className={`mt-10 flex flex-col`}>
                {posts.map((post) => (
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
};

export default Blog;
