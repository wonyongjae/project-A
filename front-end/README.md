# project-A
# front-end

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# folder-structure

├─public                # static resource root
│  ├─fonts
│  └─images
│
├─server                # custom server
│  └─index.ts
│           
├─src                   # source root
│   ├─@types                # type declaration
│   ├─components            # components
│   │   ├─Buttons                # Buttons
│   │   └─Layout                 # Layout
│   ├─constants             # constants
│   ├─hooks                 # custom hooks
│   ├─lib                   # deps library custom
│   ├─pages                 # next.js page routing
│   │   ├─api                     # next.js api routing
│   │   ├─dashboard
│   │   ├─analysis
│   │   ├─details 
│   │   ├─
│   │   ├─ 
│   │   └─auth              # 로그인 관련
│   ├─service               # service
│   ├─stores                # stores
│   ├─styles                # global styles
│   └─utils                 # 
│
├─test                  # test 관련
│
│ .babelrc              # babel config
│ .env.local            # environment variables
│ .eslintrc.js          # eslint config
│ .gitignore            # git ignore
│ .prettierrc.js        # prettier config
│ jest.config.js        # jest config
│ jest.setup.ts         # jest에서 testing-library 사용하기 위한 설정(그외 jest에 필요한 외부 라이브러리 설정)
│ next-env.d.ts         # next.js type declare
│ next.config.js        # next.js config
│ package.json
│ README.md
│ tsconfig.json          # typescirpt config
└ tsconfig.server.json   # custom server 사용 시 typescript config

# Dependencies

## dependencies
- @atlaskit/tree: ^8.4.0 - 트리(유연한 트리 렌더링 & 지연 로딩을 통한 동적 트리 확장)
- @ckeditor/ckeditor5-build-classic: ^29.1.0 - CKEditor 5 클래식 편집기 빌드
- @ckeditor/ckeditor5-react: ^3.0.2 - React용 CKEditor 5 서식 텍스트 편집기
- @date-io/date-fns: ^2.11.0 - 일반적인 자바스크립트 날짜 관리 라이브러리에 대한 추상화
- @emotion/react: ^11.10.0 - React 스타일링
- @emotion/styled: ^11.10.0 - emotion/react용 스타일링 API
- @hookform/resolvers: ^2.6.1 - React Hook Form 검증 해석기
- @material-ui/core: ^4.12.2 - MUI 코어
- @material-ui/data-grid: 4.0.0-alpha.37 - MUI 데이터 그리드
- @material-ui/icons: ^4.11.2 - MUI 아이콘
- @material-ui/lab: 4.0.0-alpha.60 - MUI 이전준비 안된 인큐베이터 구성요소 호스팅
- @material-ui/pickers: ^3.3.10 - MUI 날짜 및 시간 선택기
- @material-ui/styles: ^4.11.4 - MUI 스타일링 솔루션
- @mui/icons-material: ^5.8.2 - 구글 MUI 아이콘 SvgIcon 제공
- @mui/lab: ^5.0.0-alpha.95 - 새로운 MUI lab
- @mui/material: ^5.8.2 - 구글 머터리얼 디자인을 구현하는 React 구성요소
- @mui/styles: 5.8.0 - MUI 스타일링, MUI 레거시 JSS 기반 스타일링 솔루션
- @mui/x-data-grid: ^5.17.0 - 데이터 그리드 구성요소의 커뮤니티 버전
- @next/bundle-analyzer: ^11.1.0 - Next.js 프로젝트에서 `webpack-bundle-analyzer` 사용
- @nextui-org/react : - NextUi
- @types/form-data: ^2.5.0 - 자체 유형 정의를 제공하므로 설치할 필요 없음 /-- 이제 사용되지않음 --/
- axios: ^0.21.1 - 브라우저 및 node.js를 위한 Promise 기반 HTTP 클라이언트
- classnames: ^2.3.1 - 조건부로 className을 함께 결합하기 위한 간단한 유틸리티
- cookies: ^0.8.0 - HTTP(S) 쿠키를 가져오고 설정하기 위한 node.js 모듈. Keygrip을 사용하여 선택적으로 서명된 쿠키
- date-fns: ^2.23.0 - 최신 JavaScript 날짜 유틸리티 라이브러리
- date-fns-tz: ^1.1.6 - Intl API를 사용하여 date-fns v2에 대한 시간대 지원
- express: ^4.17.1 - 미니멀리스트 웹 프레임워크
- i18next: ^20.4.0 - 국제화 프레임워크
- immer: ^9.0.5 - 현재 상태를 변경하여 다음 불변 상태를 만듦
- msw: ^0.24.2 - 브라우저 및 Node.js를 위한 원활한 REST/GraphQL API 모의 라이브러리
- mui: ^0.0.1 - MUI 라이브러리
- multer: ^1.4.3 - `multipart/form-data`를 처리하기 위한 미들웨어
- next: ^11.1.0 - 리액트 프레임워크
- next-compose-plugins: ^2.2.1 - Next.js용 플러그인 활성화 및 구성을 위한 보다 깔끔한 API 제공
- next-connect: ^0.10.2 - Next.js 용 smol 메서드 라우팅 및 미들웨어
- next-i18next: ^8.6.0 - NextJs 국제화된 라우팅 보완하여 React 구성요소 번역
- notistack: ^1.0.10 - 웹 앱 알림 라이브러리
- querystring: ^0.2.1 - 모든 엔진에 대한 노드의 쿼리 문자열 모듈 /-- 이제 사용되지않음 --/
- react: 17.0.2 - UI 구축을 위한 JavaScript 라이브러리
- react-beautiful-dnd: ^13.1.0 - React 드래그 앤 드롭
- react-cookie: ^4.1.1 - React용 범용 쿠키
- react-datepicker: ^4.2.1 - React용 datepicker 컴포넌트
- react-dom: 17.0.2 - DOM 작업을 위한 React 패키지
- react-grid-layout: ^1.3.4 - React용 드래그 및 크기 조정 가능한 그리드 레이아웃
- react-hook-form: ^7.13.0 - React Hooks를 위한 성능이 뛰어나고 유연하며 확장 가능한 양식 라이브러리
- react-i18next: ^11.11.4 - React wrapper over i18next 라이브러리
- react-pivottable: ^0.11.0 - React 기반 피벗 테이블
- react-sizeme: ^3.0.2 - React 구성 요소가 너비 및/또는 높이를 인식하도록 하는 라이브러리
- recharts: ^2.1.2 - 차트 라이브러리
- recoil: ^0.4.1 - React용 상태 관리 라이브러리
- styled-components: ^5.3.5 - ES6 및 CSS의 장점을 사용한 스타일링
- swr: ^0.5.6 - 원격 데이터 가져오기를 위한 React Hooks 라이브러리
- uuid: ^8.3.2 - RFC4122(v1, v4 및 v5) UUID
- yup: ^0.32.9 - 죽은 단순 개체 스키마 유효성 검사 라이브러리

## devDependencies
- @testing-library/dom: ^8.2.0 - DOM 테스트 유틸리티
- @testing-library/jest-dom: ^5.14.1 - DOM의 상태를 테스트하기 위한 커스텀 jest 매처
- @testing-library/react: ^12.0.0 - React DOM 테스트 유틸리티
- @types/classnames: ^2.3.1 - 스텁 유형 정의 /-- 이제 사용되지않음 --/
- @types/cookies: ^0.7.7 - 쿠키에 대한 TypeScript 정의
- @types/express: ^4.17.13 - Express용 TypeScript 정의
- @types/multer: ^1.4.7 - Multer에 대한 TypeScript 정의
- @types/node: ^16.7.2 - Node.js용 TypeScript 정의
- @types/react: ^17.0.19 - React용 TypeScript 정의
- @types/react-beautiful-dnd: ^13.1.1 - React-beautiful-dnd에 대한 TypeScript 정의
- @types/react-cookies: ^0.1.0 - React 쿠키에 대한 TypeScript 정의
- @types/react-datepicker: ^4.1.7 - React-datepicker에 대한 TypeScript 정의
- @typescript-eslint/eslint-plugin: ^4.29.3 - ESLint용 TypeScript 플러그인
- @typescript-eslint/parser: ^4.29.3 - X (Service Unavailable)
- babel-jest: ^27.0.6 - X (Service Unavailable)
- babel-plugin-module-resolver: ^4.1.0 - Babel용 모듈 리졸버 플러그인
- env-cmd: ^10.1.0 - Env 파일의 환경 변수를 사용하여 명령을 실행
- eslint: ^7.32.0 - JavaScript용 AST 기반 패턴 검사기
- eslint-config-airbnb: ^18.2.1 - 스타일 가이드에 따른 Airbnb의 ESLint 구성
- eslint-config-next: ^11.1.0 - NextJS에서 사용하는 ESLint 구성 (README 없음)
- eslint-config-prettier: ^8.3.0 - 필요하지 않거나 Prettier와 충돌할 수 있는 모든 규칙 off
- eslint-import-resolver-babel-module: ^5.3.1 - Eslint-plugin-import용 babel-plugin-module-resolver
- eslint-plugin-import: ^2.24.2 - Eslint plugin import
- eslint-plugin-jsx-a11y: ^6.4.1 - JSX 요소에 대한 접근성 규칙에 대한 정적 AST 검사기
- eslint-plugin-prettier: ^3.4.1 - Prettier 를 ESLint 규칙으로 실행
- eslint-plugin-react: ^7.24.0 - 특정 린트 규칙에 반응하는 eslint
- eslint-plugin-react-hooks: ^4.2.0 - React Hooks에 대한 ESLint 규칙
- jest: ^27.0.6 - JavaScript 테스트
- prettier: ^2.3.2 - 코드 포맷터
- rimraf: ^3.0.2 - 노드용 심층 삭제 모듈(예: `rm -rf`)
- ts-node: latest - 소스 맵 및 기본 ESM 지원과 함께 node.js용 TypeScript 실행 및 REPL
- typescript: ^4.4.2 - JavaScript를 타입 정의해주는 JavaScript용 언어