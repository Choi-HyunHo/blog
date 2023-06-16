# 🎉 introduce

**Next.js + typescript** 의 블로그를 소개합니다.

<table>
  <tr>
    <td><img width="1000" src="https://github.com/jasonkang14/wanted_8th_preonboarding_frontend/assets/87301268/6d3089d3-d4bd-4f9b-9c08-1bf1a23226e0"></td>
    <td><img width="1000" src="https://github.com/jasonkang14/wanted_8th_preonboarding_frontend/assets/87301268/b6d3283f-4451-4841-8384-bde41f6509d3"></td>
  </tr>
</table>

-   URL : https://www.choi-hyunho.com/

-   blog Template : https://github.com/Choi-HyunHo/blog-template

<br>

## 📝 직접 만들게 된 이유는

이전까지 naver, tistory, velog, gatsby 등 여러 블로그를 사용해봤습니다.

그 중 최근까지 사용한 블로그는 gatsby 로 된 블로그였는데 해당 블로그는 직접 만들지 않고 <br>
이미 만들어져있는 템플릿을 가져다 글만 작성한 것에 불과했습니다.

그러던 중 결심을 하게 된 계기가

1. 종종 터지는 오류들 <br>
   (물론 어떻게든 해결을 했습니다만.. 잘 되다가 호환성 등 갑자기 발생하여 어디서 무슨 이유로 발생하는 건지 원인을 알기는 어려웠습니다)

2. 앞으로 블로그를 통해 정리를 할 건데, 내 맘대로 커스텀을 하고 싶은 욕구

3. 직접 만들어보는 것이 더 실력 향상에도 좋을 것 같다

4. 글 쓰는 것 이외에도 블로그 자체를 꾸준히 업그레이드 하자

<br>

위의 4가지 생각을 하면서 이번 블로그를 만들게 되었습니다.

<br>

## 👀 특징

1. 다크모드를 적용하자 → 밤에도 글을 쉽게 볼 수 있도록

2. 나를 나타내자 → 이력서를 블로그에 포함시켜서 기타 블로그와 차별점을 두자

3. 많은 기능보다는 블로그에 필요한 기능만 만들자 → 해당 블로그를 사용하는 누구나 커스텀이 쉽도록

4. 검색 엔진 최적화 → 각 페이지 마다 metedata 가 설정되어 있습니다.

5. 모바일 화면까지 반응형을 지원 합니다.

<br>

## 🛠️ 사용 기술

<div>
<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=black">
<img src="https://img.shields.io/badge/mdx-white?style=for-the-badge&logo=mdx&logoColor=black">
<img src="https://img.shields.io/badge/notion-white?style=for-the-badge&logo=notion&logoColor=black">
</div>

<br>

## ⚙️ 실행 방법

1. Clone the reop

```
https://github.com/Choi-HyunHo/blog.git
```

2. Install YARN packages

```
yarn install
```

3. Start

```
yarn dev
```

---

<br>

## 📒 디렉토리 구조

**Next.js 13 버전**의 `App Directory` 를 사용했습니다.

```
.
├── README.md
├── contentlayer.config.ts     # next-contentlayer
├── next-env.d.ts
├── next.config.js             # next 설정
├── package-lock.json
├── package.json
├── postcss.config.js
├── posts                      # 포스팅 하는 글 쓰는 폴더(.mdx)
├── public                     # 사용되는 이미지들
│   └── images
│      ├── logo.png
│      ├── overview.gif
│      └── profile.jpg
│
├── src
│   ├── app
│   │   ├── api
│   │   │   └── contact
│   │   │       └── route.ts   # email API
│   │   ├── robots.ts          # metadata
│   │   ├── sitemap.ts         # metadata
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx         # 전반적인 레이아웃
│   │   ├── page.tsx           # 메인 페이지
│   │   ├── posts
│   │   │   ├── [slug]
│   │   │   │   └── page.tsx   # /posts/[slug] 페이지
│   │   │   └── page.tsx       # /posts 페이지
│   │   ├── resume
│   │   │   └── page.tsx       # /resume 페이지
│   │   └── contact
│   │       └── page.tsx       # /contact 페이지
│   ├── components
│   │   ├── Provider.tsx       # next-themes Provider
│   │   ├── posts              # /posts, /posts/[slug] 관련 컴포넌트
│   │   │   ├── BlogPost.tsx
│   │   │   ├── FeaturePost.tsx
│   │   │   ├── MainView.tsx
│   │   │   ├── Recent.tsx
│   │   │   └── Tags.tsx
│   │   ├── resume             # /resume 컴포넌트
│   │   │   └── Notion.tsx
│   │   └── ui                 # UI 컴포넌트
│   │       ├── Button.tsx
│   │       ├── Footer.tsx
│   │       ├── Header.tsx
│   │       ├── Hero.tsx
│   │       └── Title.tsx
│   └── service                # 서비스 관련 API
│       ├── email.ts
│       ├── nodemail.ts
│       ├── notion.ts
│       └── posts.ts
├── tailwind.config.js         # tailwind 설정
├── tsconfig.json              # typescript 설정
└── yarn.lock
```

---

<br>

## 라이브러리 사용법

<br>

## next-theme

-   [공식 문서](https://github.com/pacocoursey/next-themes#readme)

-   Next.js에서 쉽게 테마를 전환할 수 있도록 도와주는 패키지입니다.(시스템 테마로도 업데이트 가능)

-   기본적으로 next 13 버전에서는 tailwind 를 초기 설치 때 지원을 합니다.

<br>

```
yarn add next-themes


// 사용 아이콘
yarn add react-icons
```

<br>

### src/components/Provider.tsx

```
"use client";

import { ThemeProvider } from "next-themes";

export default function Provider({ children }: { children: React.ReactNode }) {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
```

위를 통해서 해당 children은 일관된 테마를 유지가 가능합니다.

여기서 핵심은 `"use client"`를 넣어줘야합니다.

-   csr로 작동을 해야 ThemeProvider가 작동을 합니다.

-   이때 `attribute="class"` 를 추가해줌으로써 className에 dark와 light가 토글이 됩니다.

<br>

### src/app/layout.tsx

전체 레이아웃 입니다.

```
<html lang="ko">
  <body className={karla.className}>
      <Provider> // ✅
            <Header />
              {children}
            <Footer />
      </Provider>
  </body>
</html>
```

<br>

### src/components/ui/button.tsx

```
"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes"; // ✅
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Button = () => {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme();  // ✅
    const currentTheme = theme === "system" ? systemTheme : theme; // ✅

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const onClick = (mode: string) => () => {
        setTheme(mode);
    };

    return (
        <>
            {currentTheme === "dark" ? (
                <BsFillMoonFill
                    onClick={onClick("light")} // ✅
                    className="cursor-pointer"
                />
            ) : (
                <BsFillSunFill
                    onClick={onClick("dark")}  // ✅
                    className="cursor-pointer"
                />
            )}
        </>
    );
};

export default Button;

```

<br>

### tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class"
};
```

클래스 안에 `dark:`를 사용해서 색상 및 효과를 바꿀 수 있습니다.

<br>

### ✅ 추가

기본 html 컨텐츠에 스타일을 추가해주는 tailwind 플러그인

```
yarn add -D @tailwindcss/typography
```

<br>

---

<br>

## react-notion

노션의 이력서를 프로젝트로 불러오기 위해 사용 했습니다. [공식문서](https://github.com/splitbee/react-notion)

```
yarn add react-notion
```

지금은 react-notion-x 라는 더 많은 기능을 지원하는 상위 버전이 있습니다.

-   하지만 단순히 페이지만 불러오는 용도로는 이전 react-notion 이 사용하기 쉽고 간편하다고 생각 했습니다.

<br>

### 먼저 .env 파일에 자신이 보여주고 싶은 노션 페이지의 ID를 적어줍니다.

```
NEXT_PUBLIC_NOTION_PAGE_ID = '노션 페이지 ID'
```

<br>

위의 ID는 Copy web link 를 누르면

<image width='600' src='https://github.com/Choi-HyunHo/blog/assets/87301268/e7a9e00c-8b75-4c3f-806f-65eb8b6b6d76'/>

아래와 같이 나옵니다.

https://actually-nemophila-cf3.notion.site/Choi-Hyun-Ho-e2fe264b22184e0785ef4af50cf47c16?pvs=4

그 중 `e2fe264b22184e0785ef4af50cf47c16?pvs=4` 이 부분만 가져옵니다.

<br>

### src/service/notion.ts

해당 페이지의 데이터를 `fetch API` 를 통해서 불러옵니다.

```
export const getNotion = async () => {
    const res = await fetch(
        `https://notion-api.splitbee.io/v1/page/${process.env.NEXT_PUBLIC_NOTION_PAGE_ID}`
    );
    const data = await res.json();
    return data;
};
```

<br>

### src/app/resume/page.tsx

-   해당 페이지에서 API 를 호출

```
import Notion from "@/components/resume/Notion";
import { getNotion } from "@/service/notion";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resume",
    description: "현호 이력서",
};

export default async function resume() {
    const data = await getNotion(); // ✅

    return <Notion data={data} />;
}
```

<br>

### src/components/resume/Notion.tsx

```
import "react-notion/src/styles.css";
import { NotionRenderer } from "react-notion";

export default function Notion({ data }: any) {
    return <NotionRenderer blockMap={data} fullPage={true} hideHeader={true} />;
}
```

<br>

---

<br>

## next-contentlayer

[공식문서](https://github.com/contentlayerdev/contentlayer#who-is-using-contentlayer)

```
yarn add contentlayer next-contentlayer
```

<br>

### 1. contentlayer.config.ts 설정

```
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
    name: "Post",
    contentType: "mdx",
    filePathPattern: `**/*.mdx`,
    fields: {
        title: { type: "string", required: true },
        date: { type: "string", required: true },
        description: { type: "string", required: true },
        tag: { type: "string", required: true },
        // ✅ 필요한 속성들 만들어서 추가
    },
}));

export default makeSource({
    contentDirPath: "posts",
    documentTypes: [Post],
});
```

<br>

### 2. next.config.js 설정

```
const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  reactStrictMode: true,
});
```

<br>

### 3. posts/name.mdx

제 블로그 기준 입니다.

-   contentlayer.config.ts > Post 의 fields 와 동일한 형식으로 맞춰줍니다.

```
---
title: CSS-in-CSS 와 CSS-in-JS 에 대하여
date: "2023-04-11"
description: CSS를 어디서 사용하면 좋을까 ❓
tag: CSS
---

# 제목

- 마크다운 문법 사용하기

```

<br>

### 4. tsconfig.json 설정

```
"compilerOptions": {
    ...
    "paths": {
      "contentlayer/generated": ["./.contentlayer/generated"]
    }
},
"include": [
    ...
    ".contentlayer/generated"
],
```

설정이 올바르게 끝나고 재실행 하게 되면 아래와 같은 문구를 터미널에서 볼 수 있습니다.

```
Generated 86 documents in .contentlayer
```

-   작성된 글은 .contentlayer/generated/Post 에서 확인 할 수 있습니다.

<br>

### ✅ 추가

```
---
title: CSS-in-CSS 와 CSS-in-JS 에 대하여
date: "2023-04-11"
description: CSS를 어디서 사용하면 좋을까 ❓
tag: CSS
---
```

이 부분의 tag 를 사용하게 되면 아래 코드에 추가해줘야 정상적으로 태그 별로 나눠집니다.

**src/components/posts/Tags.tsx**

```\
const tagList = ["All", "Next.js", "React", "TS", "JS", "CSS"]; // 태그 목록 배열
```

<br>

---

<br>

## ~~next-sitemap~~

⚠️ **Next.js 13버전에서 제공하는 방법으로 사용하시는걸 권장 합니다.(트러블 슈팅란에 링크 있습니다.)**

sitemap은 구글, 네이버와 같은 검색 사이트들의 크롤링 봇들에게 우리 서비스에서 사용할 수 있는 사이트 주소를 알려주기 위해 활용 합니다.

> 이 부분은 직접 해보시는 것을 추천 드립니다(저도 아직 완벽하지는 않아서...)

```
yarn add next-sitemap -D
```

<br>

### next-sitemap.config.js

참고 : https://jforj.tistory.com/311

```
/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: "https://www.choi-hyunho.com/",
    generateRobotsTxt: true, // robots.txt generate 여부 (자동생성 여부)
    sitemapSize: 7000, // sitemap별 최대 크기 (최대 크기가 넘어갈 경우 복수개의 sitemap으로 분리됨)
    changefreq: "daily", // 페이지 주소 변경 빈도 (검색엔진에 제공됨) - always, daily, hourly, monthly, never, weekly, yearly 중 택 1
    priority: 1, // 페이지 주소 우선순위 (검색엔진에 제공됨, 우선순위가 높은 순서대로 크롤링함)
    robotsTxtOptions: {
        // 정책 설정
        policies: [
            {
                userAgent: "*", // 모든 agent 허용
                allow: "/", // 모든 페이지 주소 크롤링 허용
                disallow: [
                    "/exclude", // exclude로 시작하는 페이지 주소 크롤링 금지
                ],
            },
            // 추가 정책이 필요할 경우 배열 요소로 추가 작성
        ],
    }, // robots.txt 옵션 설정
};
```

<br>

### package.json

```
  "scripts": {
        "dev": "next dev",
        "build": "next build",
        "start": "next start",
        "lint": "next lint",
        "postbuild": "next-sitemap" // ✅ 추가
    },
```

<br>

---

<br>

## 🚀 트러블 슈팅 및 기능 관련

### Resume 페이지

노션 페이지를 불러올 때 해당 화면 컴포넌트에서 useEffect 를 통해 가져오면 렌더링 될 때 마다 데이터를 불러오게 되어 <br>
사용자에게 깜빡이는 화면이 보이는 등 사용자 경험 측면에서 좋지 않았습니다. <br>

이력서는 데이터가 자주 바뀌지 않는 화면이기 때문에 정적 페이지로 만들면 위의 이슈와 여러 이점들을 가져갈 수 있습니다. <br>
next.js 는 정적 페이지를 만들 수 있기 때문에 빌드 시점에서 미리 렌더링해서 사용자 경험을 개선했습니다.

-   [SSG 렌더링 정리 글](https://www.choi-hyunho.com/posts/next-2)

-   Next.js 13버전에서는 `fetch API` 를 사용하여 SSG, ISR, SSR 모두 구현이 가능 합니다.

-   그 중 이력서 페이지는 SSG 로 되어있습니다.

<br>

### sitemap, robots(v1.3.0)

sitemap은 구글, 네이버와 같은 검색 사이트들의 크롤링 봇들에게 우리 서비스에서 사용할 수 있는 사이트 주소를 알려주기 위해 활용 합니다.

블로그 만들 당시 `next-sitemap` 라이브러리를 사용해서 만들었습니다.

하지만 next 의 공식문서를 더 살펴보니까 **sitemap** 과 **robots** 을 자체적으로 사용할 수 있는 방법을 찾았습니다.

-   [sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)

-   [robots](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)

<br>

**동적 sitemap 만드는 예시(v1.3.1)**

```
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
```

<br>

### contact 페이지 및 이메일 전송 기능 추가(v1.4,2)

정리 : [v1.4.2](https://github.com/Choi-HyunHo/blog/releases/tag/v1.4.2)

-   유효성 검사 : yup
-   메일 전송 : nodemailer

---

<br>

## 💡 Vercel 배포 참고용

순서대로 따라하면 어렵지 않게 할 수 있습니다.

<table>
  <tr>
    <td><img width="1000" src="https://github.com/Choi-HyunHo/blog/assets/87301268/a53c244e-05b4-4a6e-9924-a6eaaf83b6fd"></td>
    <td><img width="1000" src="https://github.com/Choi-HyunHo/blog/assets/87301268/63cf1e93-17e7-4542-b307-fa78074ab4d8"></td>
  </tr>
  <tr>
    <td><img width="1000" src="https://github.com/Choi-HyunHo/blog/assets/87301268/0af1f1bf-2469-4b21-b824-a43025ed683c"></td>
    <td><img width="1000" src="https://github.com/Choi-HyunHo/blog/assets/87301268/2c6e6d83-d8e4-4086-9c0b-3ef000b35cd8"></td>
  </tr>
  <tr>
    <td><img width="1000" src="https://github.com/Choi-HyunHo/blog/assets/87301268/5cbb2691-0b03-4543-ac74-9b58ba4e0bbe"></td>
    <td><img width="1000" src="https://github.com/Choi-HyunHo/blog/assets/87301268/eb834d3b-3e11-46a8-a6cf-a2458eb4acba"></td>
  </tr>
    <tr>
    <td><img width="1000" src="https://github.com/Choi-HyunHo/blog/assets/87301268/5d5f3f11-3dad-47ce-8728-2f38d3dff9c6"></td>
    <td><img width="1000" src="https://github.com/Choi-HyunHo/blog/assets/87301268/27e7ed6d-6084-4b4d-a576-66a53b4e99ea"></td>
  </tr>
</table>
