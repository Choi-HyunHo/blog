"use client";

import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";

export default async function Notion() {
    const res = await fetch(
        `https://notion-api.splitbee.io/v1/page/${process.env.NEXT_PUBLIC_NOTION_PAGE_ID}`
    );
    const data = await res.json();

    return <NotionRenderer blockMap={data} fullPage={true} hideHeader={true} />;
}
