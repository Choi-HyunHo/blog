# 🎉 introduce

**Next.js + typescript** 의 블로그를 소개합니다.

<table>
  <tr>
    <td><img width="1000" src="https://github.com/jasonkang14/wanted_8th_preonboarding_frontend/assets/87301268/6d3089d3-d4bd-4f9b-9c08-1bf1a23226e0"></td>
    <td><img width="1000" src="https://github.com/jasonkang14/wanted_8th_preonboarding_frontend/assets/87301268/b6d3283f-4451-4841-8384-bde41f6509d3"></td>
  </tr>
</table>

-   URL : https://www.choi-hyunho.com/

<br>

## 📝 직접 만들게 된 이유는

이전까지 naver, tistory, velog, gatsby 등 여러 블로그를 사용해봤습니다.

그 중 최근까지 사용한 블로그는 gatsby 로 된 블로그였는데 해당 블로그는 직접 만들지 않고 <br>
이미 만들어져있는 템플릿을 가져다 글만 작성한 것에 불과했습니다.

그러던 중 결심을 하게 된 계기가

1. 종종 터지는 오류들 <br>
   (물론 어떻게든 해결을 했습니다만.. 그 상황만 해결하다보니까 어디서 무슨 이유로 발생하는 건지 원인을 알기는 어려웠습니다)

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

4. 검색 엔진 최적화

<br>

## 🛠️ 사용 기술

<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=black">
<img src="https://img.shields.io/badge/mdx-white?style=for-the-badge&logo=mdx&logoColor=black">
<img src="https://img.shields.io/badge/notion-white?style=for-the-badge&logo=notion&logoColor=black">

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

<br>

## 📒 디렉토리 구조

**Next.js 13 버전**의 `App Directory` 를 사용했습니다.

```
.
├── README.md
├── contentlayer.config.ts     # next-contentlayer
├── next-env.d.ts
├── next-sitemap.config.js     # next-sitemap
├── next.config.js             # next 설정
├── package-lock.json
├── package.json
├── postcss.config.js
├── posts                      # 포스팅 하는 글 쓰는 폴더(.mdx)
├── public                     # 사용되는 이미지들
│   ├── images
│   │   ├── logo.png
│   │   ├── overview.gif
│   │   └── profile.jpg
│   ├── sitemap-0.xml
│   └── sitemap.xml
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx         # 전반적인 레이아웃
│   │   ├── page.tsx           # 메인 페이지
│   │   ├── posts
│   │   │   ├── [slug]
│   │   │   │   └── page.tsx   # /posts/[slug] 페이지
│   │   │   └── page.tsx       # /posts 페이지
│   │   └── resume
│   │       └── page.tsx       # /resume 페이지
│   ├── components
│   │   ├── Provider.tsx       # next-themes Provider
│   │   ├── posts              # /posts, /posts/[slug] 관련 컴포넌트
│   │   │   ├── BlogPost.tsx
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
│       ├── notion.ts
│       └── posts.ts
├── tailwind.config.js         # tailwind 설정
├── tsconfig.json              # typescript 설정
└── yarn.lock
```

<br>

## 라이브러리 사용법(정리 예정)

-   next-theme
-   next-contentlayer
-   next-sitemap
-   react-notion
-   react-icons
