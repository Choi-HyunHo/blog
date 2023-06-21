import TagView from "@/components/posts/TagView";
import { getPosts } from "@/service/posts";

interface Props {
    params: {
        tag: string;
    };
}

export default async function postPage({ params }: Props) {
    const data = await getPosts();
    const filtered = data.filter((data: any) => data.tag === params.tag);
    return (
        <>
            <TagView filtered={filtered} pData={params.tag} />
        </>
    );
}
