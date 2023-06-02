import Notion from "@/components/resume/Notion";
import { getNotion } from "@/service/notion";

export default async function resume() {
    const data = await getNotion();

    return <Notion data={data} />;
}
