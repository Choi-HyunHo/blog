import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";

const options = {
    theme: "github-dark",
};

export const Post = defineDocumentType(() => ({
    name: "Post",
    contentType: "mdx",
    filePathPattern: `**/*.mdx`,
    fields: {
        title: { type: "string", required: true },
        date: { type: "string", required: true },
        description: { type: "string", required: true },
        tag: { type: "string", required: true },
        feature: { type: "string" },
    },
}));

export default makeSource({
    contentDirPath: "posts",
    documentTypes: [Post],
    mdx: {
        rehypePlugins: [[rehypePrettyCode, options]],
    },
});
