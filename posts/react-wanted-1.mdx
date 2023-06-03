---
title: 원티드 - 프리온보딩 프론트엔드 챌린지 Week 1-1
date: "2023-04-03"
description: 4월 프론트엔드 여행자를 위한 리액트 해부학
tag: React
---

해당 포스트는 원티드의 [프리온보딩 프론트엔드 챌린지](https://www.wanted.co.kr/events/pre_challenge_fe_8) 강의 내용 복습 겸 정리 입니다.

## Week 1-1. React가 VirtualDOM 을 활용하는 방법

## 1. Virtual DOM

![virtualdom](https://user-images.githubusercontent.com/87301268/230374609-26008411-0f26-40ef-a598-b7d20982d868.png)

자바스크립트 객체로 이루어진 컴포넌트들은 트리 형태로 이루어지게 되는데, 이런 형태의 데이터를 Virtual DOM(가상 돔)이라고 합니다.

DOM 노드를 생성하거나 기존 DOM 노드에 접근하는 것이 JavaScript 객체로 표현된 트리 노드를 생성하거나 접근하는 거에 비해 느리기 때문에 JavaScript 객체로 표현된 트리에 CRUD 작업을 수행하는 것이 DOM 노드에 CRUD 작업을 수행하는 것보다 일반적으로 더 빠릅니다.

## 2. Rendering ❓

리액트에서 렌더링이란, 컴포넌트가 현재 props와 state의 상태에 기초하여 UI를 어떻게 구성할지 컴포넌트에게 요청하는 작업을 의미 합니다.

렌더링 과정은 다음과 같이 3단계로 설명 할 수 있습니다.

![image](https://user-images.githubusercontent.com/87301268/230362798-20bf5546-217a-4029-96eb-c7a20889cabb.png)

## 3. Trigger - 렌더링이 발생하는 순간

1. **initial render** (컴포넌트의 초기 렌더링)
2. **Re-renders when state updates** (상태 변화로 인한 리렌더링)

### 3.1 초기 렌더링

![carbon](https://user-images.githubusercontent.com/87301268/230363733-8728723a-64b5-4cfa-aa70-582fd73f9945.png)

시작될 때 초기 렌더링을 트리거 하는데 creatRoot 와 Render 를 통해 이뤄지게 됩니다.

### 3.2 createRoot()

> 브라우저 DOM 노드 안에 React 컴포넌트를 표시하는 루트를 생성하는 메서드

즉, Virtual DOMTree 에서 `<div id=”root”/>` 를 나타내는 node를 생성 합니다.

![carbon (1)](https://user-images.githubusercontent.com/87301268/230366922-c43511cf-c7f1-445b-92b6-3d957a9b21a8.png)

리액트를 실행하고 index.html 확인해보면 id 가 root 인 것을 확인 할 수 있습니다.

### 3.3 render

> JSX 를 브라우저 DOM node 로 렌더 하는 메서드

render 는 2단계로 나누어집니다.

1.  Render phase : 업데이트를 수행해서 화면을 변경하는 것
    ➡️ 변경된 사항을 감지하여 virtual DOM 을 생성하는 과정

2.  Commit phase : 변경된 화면을 실제 브라우저에 나타내는 것

### 3.4 재조정 (Reconciliation)

![image (1)](https://user-images.githubusercontent.com/87301268/230375159-4b78cc4c-34cd-4c5d-bb13-bb398e865b14.png)

컴포넌트에서 prop이나 state가 변경 되었을 때, 직전 렌더링 된 요소와 새로 반환된 요소를 비교하여 실제 DOM을 업데이트 할지 말지 결정해야 합니다.

이 때, Element가 일치 하지 않으면 새로운 요소로 DOM을 업데이트 하는 프로세스를 의미합니다.

> 실제 DOM에 반영하기 전까지 VirtualDOM에서 변경된 요소를
> 확인 후 그 요소만 실제 DOM에 반영하는 것입니다.

### 3.5 Commit Phase

Render phase에서 재조정된 virtual DOM 을 DOM 에 적용하고 라이프 사이클을 실행하는 단계

잠깐, 화면에 DOM 을 **마운트** 하는거지 화면에 paint 는 그 후 입니다.

---

## 참고

[blog](https://velog.io/@dev-mish-mash/%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%9D%98-%EC%A1%B0%ED%99%94Reconciliation-%EA%B3%BC%EC%A0%95-%EC%A0%95%EB%A6%AC#render-phase)

https://programmingwithmosh.com/react/react-virtual-dom-explained/

https://goidle.github.io/react/in-depth-react-intro/
