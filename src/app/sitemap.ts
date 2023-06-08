import { MetadataRoute } from "next";
import { getPosts } from "@/service/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const data = await getPosts();

	const postUrls = data.map((post) => ({
		url: `https://www.choi-hyunho.com/posts/${post._id}`,
		lastModified: new Date(),
	}));

	return [
		{
			url: "https://www.choi-hyunho.com",
			lastModified: new Date(),
		},
		{
			url: "https://www.choi-hyunho.com/resume",
			lastModified: new Date(),
		},
		{
			url: "https://www.choi-hyunho.com/posts",
			lastModified: new Date(),
		},
		...postUrls,
	];
}
