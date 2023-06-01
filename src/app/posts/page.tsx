import BlogPost from "@/components/BlogPost";
import { posts } from "@/service/posts";

const Blog = () => {
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
