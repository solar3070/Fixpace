<div align="center">
<h1>Fixpace</h1>

**AI가 제공하는 문장에 올바른 띄어쓰기를 하며 띄어쓰기를 연습해요!**

<img width="1200" alt="Group 98" src="https://github.com/solar3070/Fixpace/assets/63948884/6d9bdd44-5e60-4667-aecf-7b3039fc25bc">
</div>

## ⛓️ 프로젝트 정보
> **Fixpace 바로가기 : https://fixpace.site**
> 
> **피그마 디자인 보기 : [🔗 Link](https://www.figma.com/file/WUZVvkGvyYDJZz4qinVfAy/Fixpace-Design?type=design&node-id=0%3A1&mode=design&t=l50vBk1aKgrVJVZ5-1)**


## 📄 화면 구성

### 1. 키워드 입력

<img width="1200" src="https://github.com/solar3070/Fixpace/assets/63948884/e0e25ca5-d896-4762-95bd-cb81f13df73d.png" >

- 키워드는 한 글자 이상 다섯 글자 이하로 입력 가능합니다.
- 입력한 키워드를 바탕으로 AI가 소설을 생성합니다. (AI가 제공한 문장이 맞춤법이 맞다는 보장이 없으므로 맞춤법 검사 수행)

### 2. 올바른 띄어쓰기 입력

<img width="1200" src="https://github.com/solar3070/Fixpace/assets/63948884/b046d7fa-e52b-45a3-b1a5-f5fc17619871.png" >

- 문장을 로드하는 동안 스켈레톤 UI가 보여집니다.
- 띄어쓰기 없이 제시된 문장에 사용자가 띄어쓰기를 입력합니다.
- 제시된 문장에 없는 음절은 입력할 수는 없으며 공백을 제외한 문장의 길이도 일치해야 합니다.
- 현재 입력 중인 문장이 강조됩니다.
- 스페이스 바를 누를 때마다 효과를 주어 시각적인 재미 요소를 주었습니다.
  - 입력창 하단 스페이스 바 눌림
  - 배경에 반짝이 나타났다 사라짐
 
 <img width="1200" src="https://github.com/solar3070/Fixpace/assets/63948884/af005e89-a77c-4bcb-a408-6fec7c423238">

- 에러 발생시 간단한 에러 원인과 함께 다시 하기 버튼이 나타납니다.
- 다시하기 버튼이 제공되지 않는 경우는 해당 [[PR]](https://github.com/solar3070/Fixpace/pull/40) 참고

### 3. 띄어쓰기 교정 및 정확도

<img width="1200" src="https://github.com/solar3070/Fixpace/assets/63948884/64b7174a-a77e-4f54-aee9-d9c62f2a9fd6.png" >

- 화면 진입시 폭죽이 터집니다.
- 올바르지 않은 띄어쓰기를 교정한 결과를 보여줍니다.
- 띄어쓰기 정확도를 검사하여 백분율로 나타냅니다.
- 다시하기 버튼을 누르면 키워드 입력 화면으로 이동합니다.

### 4. 404 페이지 

<img width="1200" alt="image" src="https://github.com/solar3070/Fixpace/assets/63948884/73a27c34-e7b7-4408-8811-47c06f497023">


## 📍 실행 가이드

```
$ git clone https://github.com/solar3070/Fixpace.git
$ cd Fixpace
$ cat > .env
NEXT_PUBLIC_OPENAI_API_KEY=[Open AI API key 입력]
$ yarn
$ yarn dev
```

## 🛠️ 기술 스택

- Next.js, React, TypeScript
- TanStack Query, Recoil
- Emotion
- Open AI, hanspell
