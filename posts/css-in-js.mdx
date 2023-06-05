---
title: CSS-in-CSS 와 CSS-in-JS 에 대하여
date: "2023-04-11"
description: CSS를 어디서 사용하면 좋을까 ❓
tag: CSS
---

기존 CSS 는 프로젝트가 커질 수록 모든 html 요소에 클래스명을 만들어야하고 스타일을 변경할 때 마다 선택자를 하나씩 다 찾아서 변경해야하기 때문에 힘듭니다.

또한 JS 파일과 분리되어있어 컴포넌트의 상태값 변화를 공유하여 동적 스타일링 하기가 어렵습니다.

## CSS 문제점 정리

-   Global namespace: 모든 스타일이 global에 선언되어 중복되지 않는 class 이름을 적용해야 하는 문제
-   Dependencies: css 간의 의존관계를 관리하기 힘든 문제
-   Dead Code Elimination: 기능 추가, 변경, 삭제 과정에서 불필요한 CSS를 제거하기 어려운 문제
-   Minification: 클래스 이름의 최소화 문제
-   Sharing Constants: JS 코드와 상태 값을 공유할 수 없는 문제
-   Non-deterministic Resolution: CSS 로드 순서에 따라 스타일 우선 순위가 달라지는 문제
-   Isolation: CSS와 JS가 분리된 탓에 상속에 따른 격리가 어려운 문제

이러한 방식을 불편함을 해결하기 위해 CSS-in-CSS 방식의 CSS Modules 와 CSS-in-JS 방식을 사용 합니다.

## CSS-in-CSS ?

웹 애플리케이션의 스타일을 작성하는 전통적인 방법으로, CSS 스타일을 별도의 파일이나 HTML 마크업 내에 작성하는 기술입니다.

특징으로, pure CSS와 마찬가지로 **전체 페이지에 필요한 CSS를 처음부터 전부 로딩하여 style 태그를 생성**합니다.

### CSS Module

CSS 모듈은 **CSS를 모듈화 하여 사용**하는 방식 입니다.

1. CSS 클래스를 만들면 자동으로 고유한 클래스네임을 만들어서 scope를 지역적으로 제한 하고
2. 모듈화된 CSS를 번들러로 불러오면
3. 다음과 같이 사용자가 정의했던 클래스네임과 고유한 클래스네임으로 이뤄진 객체가 반환 됩니다.

<img
    src="https://user-images.githubusercontent.com/87301268/231225724-0eac52f8-7624-431e-be76-90541ca529c3.png"
    width="60%"
/>

CSS Module를 사용하면

➡️ CSS 파일에 선언한 클래스 이름들이 모두 고유해지기 때문에

➡️ Global namespace 문제를 해결할 수 있습니다.

➡️ 하지만, 지나친 모듈화는 유지 보수 및 재사용이 힘들어집니다.

### CSS 전처리기

처리기의 자신만의 특별한 syntax를 가지고 CSS를 생성하도록 하는 프로그램 입니다. CSS의 문제점을 프로그래밍 방식, 즉 변수/함수/상속 등 일반적인 **프로그래밍 개념**을 사용하여 보완 합니다.

CSS 전처리기는

1. 공통 요소 또는 반복적인 항목을 변수 또는 함수로 대체할 수 있는 **재사용성**
2. 임의 함수 및 내장 함수로 인해 **개발 시간과 비용 절약**
3. 중첩·상속과 같은 요소로 인해 **구조화된 코드 유지 및 관리 용이** 등의 장점이 있습니다.

반면 전처리기를 위한 도구가 필요하고 다시 컴파일하는데 시간이 소요된다는 단점도 존재 합니다.

> 전처리기 종류 : Sass, Less, Post CSS, Stylus

## CSS-in-JS

CSS-in-JS는 단어 그대로 자바스크립트 코드에서 CSS를 작성하는 방식

특징은 해당 컴포넌트가 렌더링 될 때만 스타일 태그를 생성 ➡️ **현재 사용 중인 스타일만 DOM에 포함**

CSS-in-JS로 해결할 수 있는 이슈는

-   Global namespace: 글로벌 공간에 선언된 이름의 명명 규칙 필요
-   Dependencies: CSS간의 의존 관계를 관리
-   Dead Code Elimination: 미사용 코드 검출
-   Minification: 클래스 이름의 최소화
-   Sharing Constants: JS와 CSS의 상태 공유
-   Non-deterministic Resolution: CSS 로드 우선 순위 이슈
-   Isolation: CSS와 JS의 상속에 따른 격리 필요 이슈

하지만 단점으로 **번들 크기의 증가**를 뽑을 수 있습니다.

대표적인 CSS-in-JS 인 styled-components 를 사용하면 별도의 라이브러리를 설치해야 합니다. 그 뜻은 즉, **번들의 크기가 증가**하는 것인데

**CSR** 방식을 사용하는 입장에서 **최초 로딩 시간을 지연 시킨다는 단점**으로 드러날 수 있습니다.

또한 **SSR** 을 사용하면 문제가 없지 않을까 생각 할 수 있지만
위에서 언급한 것 처럼 '해당 컴포넌트가 렌더링 될 때만 스타일 태그를 생성' 한다고 했습니다.

그렇다는 것은 **실제 페이지가 이동할 때마다 내려 받아야 하는 문제**가 발생하기 때문에
성능적인 불이익이 나타날 수 있습니다.

## 추가!! CSS-in-JS 동작방식

### 1. classname 동적 생성

1. CSS-in-JS 사용자가 스타일에 className을 사용하지 않더라도, 결국 브라우저는 webkit 엔진에서 스타일링을 수행할 때 className을 기반으로 하고 있기 때문에 **브라우저 런타임에서는 각 CSS 와 컴포넌트를 이어주는 className이 필요함**
2. CSS-in-JS 에서는 각 컴포넌트를 `hashing`하여 동적인 className을 만듬 `e.g. "sc-cMWNzn"`
3. 컴포넌트가 생성될 때 `head` tag에 `style tag`로 같이 생성되며, 사라질 때도 같이 사라짐 (라이프사이클이 같음)
4. styled-components의 경우, 같은 컴포넌트가 여러개 생성될 때는 하나의 css만 사용됨 => 최적화가 되어 있음

### 2. css parser

-   각 **CSS-in-JS** 엔진은 style html tag를 만드는 CSS parser를 내장하고 있음
-   styled-components는 stylis라는 CSS preprocessor를 이용함
-   material-ui의 경우도 비슷한 방식으로 동적 생성을 지원함

![1](https://user-images.githubusercontent.com/87301268/231224808-9bb51ca5-8377-457b-bc23-ef843987179b.png)

---

## 참고

https://www.javascriptstuff.com/what-are-css-modules/

https://velog.io/@dev-mish-mash/CSS-in-JS-%EA%B0%80-%EC%A2%8B%EC%9D%80-%EC%9D%B4%EC%9C%A0

https://seizemymoment.tistory.com/145

https://velog.io/@daymoon_/CSS-CSS-in-JS-vs-CSS-in-CSS
