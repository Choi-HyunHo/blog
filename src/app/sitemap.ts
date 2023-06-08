import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
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
	];
}
