import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";

export default function Notion({ data }: any) {
    return <NotionRenderer blockMap={data} fullPage={true} hideHeader={true} />;
}
