export const getNotion = async () => {
    const res = await fetch(
        `https://notion-api.splitbee.io/v1/page/${process.env.NEXT_PUBLIC_NOTION_PAGE_ID}`
    );
    const data = await res.json();
    return data;
};
