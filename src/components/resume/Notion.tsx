"use client";

import React, { useState, useEffect } from "react";
import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";

export default function Notion() {
    const [response, setResponse] = useState({});

    useEffect(() => {
        fetch(
            `https://notion-api.splitbee.io/v1/page/${process.env.NEXT_PUBLIC_NOTION_PAGE_ID}`,
            { cache: "force-cache" }
        )
            .then((res) => res.json())
            .then((resJson) => {
                setResponse(resJson);
            });
    }, []);

    return (
        <NotionRenderer blockMap={response} fullPage={true} hideHeader={true} />
    );
}
