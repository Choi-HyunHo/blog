import Notion from "@/components/resume/Notion";
import { getNotion } from "@/service/notion";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume",
    description: "현호 이력서",
};

export default async function resume() {
    const data = await getNotion();

    return <Notion data={data} />;
}
