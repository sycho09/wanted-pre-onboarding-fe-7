# 원티드 프리온보딩 프론트엔드 - 선발 과제

원티드 프리온보딩 프론트엔드 과정 선발 과제 제출용 레파지토리

## 프로젝트의 실행 방법

### 노드 버전 설정

> node version
> v16.13.2

nvm 사용자는 아래 명령어 입력

```shell
$ nvm install

또는

$ nvm use
```

nvm 사용하지 않는 경우 해당 노드 버전 설치

### 패키지 설치

```
$ npm install
```

### 프로젝트 실행

```
$ npm start
```

### API 서버를 로컬 경로로 사용할 경우

프로젝트 API 서버를 로컬 서버로 실행할 경우[src/utils/constants](./src/utils/constants.js) url 경로를 변경해서 사용이 가능

```js
export const BASE_URL = your_url;
```

## 사용 라이브러리

- **React Route**
- **axios**
- **styled compoenents**

## 배포 링크(데모 영상 대체)

[링크] https://melodious-dolphin-9cfb33.netlify.app/todos

## 과제

1. 로그인 / 회원가입

   Assignment1

   - [x] 이메일과 비밀번호의 유효성 검사기능 구현
   - [x] 입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화

   Assignment2

   - [x] 로그인 API를 호출 후 올바른 응답을 받았을 때 /todo 경로로 이동
   - [x] 응답받은 JWT는 로컬 스토리지에 저장

   Assignment3

   - [x] 로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트
   - [x] 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트

2. 투두 리스트

   Assignment4

   - [x] /todo경로에 접속하면 투두 리스트의 목록 확인
   - [x] 투두 리스트의 내용과 완료 여부가 표시
   - [x] 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가

   Assignment5

   - [x] 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드 활성화 및 내용 수정
   - [x] 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시 및 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소
   - [x] 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트 삭제

## 폴더 구조

```shell
src
├─components
│ ├─Layout
│ └─Button
├─pages
│ ├─SignIn
│ │ └─hooks
│ └─Todo
│   └─hooks
├─styles
└─utils
  └─hooks
```

### hooks 폴더

공통으로 사용하는 hooks 은 utils 폴더에, 각 페이지 별로 필요한 hooks 는 각 페이지 폴더에 작성

### components 분리

공통으로 사용하는 layout, button 과 같은 UI 컴포넌트는 따로 분리하여 작성
