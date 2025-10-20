# 사회적협동조합 가치로운 웹사이트

React + TypeScript + Vite로 구축된 사회적협동조합 가치로운의 공식 웹사이트입니다.

## 🌟 프로젝트 소개

더불어 함께 살아가는 사회적 가치 실현을 목표로 하는 사회적협동조합 가치로운의 웹사이트입니다. 지역사회 내 장애인과 저소득 가정을 위한 다양한 사회적 가치를 실현하는 조합의 활동을 소개합니다.

## 🚀 기술 스택

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: CSS3 (Grid, Flexbox)
- **Deployment**: Cloudflare Pages 최적화

## 🏗️ 개발 환경 설정

### 사전 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 📱 주요 기능

- **반응형 디자인**: 모바일 우선 설계로 모든 기기에서 최적화
- **접근성**: WAI-ARIA 가이드라인 준수
- **성능 최적화**: Vite를 통한 빠른 빌드 및 HMR
- **SEO 친화적**: 시맨틱 HTML 구조

## 🌐 Cloudflare Pages 배포

### 자동 배포 설정

1. Cloudflare Pages 대시보드에서 새 프로젝트 생성
2. GitHub 리포지토리 연결
3. 빌드 설정:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
   - **Node.js version**: `18`

### 빌드 명령어

```bash
# 프로덕션 빌드
npm run build

# 빌드된 파일은 dist/ 폴더에 생성됩니다
# 정적 파일들이 최적화되어 Cloudflare Pages에서 바로 서빙 가능합니다
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Header/         # 헤더 (네비게이션)
│   ├── Hero/           # 메인 히어로 섹션
│   ├── About/          # 가치로운 소개
│   ├── Services/       # 사업 안내
│   ├── Volunteer/      # 봉사 신청
│   ├── Contact/        # 연락처 & 오시는길
│   └── Footer/         # 푸터
├── App.tsx             # 메인 앱 컴포넌트
├── App.css             # 전역 스타일
└── main.tsx            # 앱 진입점
```

## 🎨 디자인 시스템

- **컬러 팔레트**: 
  - Primary: `#2c5282` (네이비 블루)
  - Secondary: `#667eea` (라이트 블루)
  - Accent: `#ffd700` (골드)
  - Gradient: `#ff6b35` to `#ffa500` (로고)

- **타이포그래피**: 
  - 시스템 폰트 스택 (한글 최적화)
  - 반응형 폰트 크기

## 🔧 개발 가이드라인

- **컴포넌트**: 함수형 컴포넌트 + React Hooks 사용
- **스타일링**: 컴포넌트별 CSS 파일 분리
- **반응형**: Mobile First 접근법
- **접근성**: ARIA 레이블 및 시맨틱 HTML 사용

## 📞 연락처

- **대표**: 전승호
- **전화**: 010-6549-8765
- **이메일**: nzin4x@gmail.com
- **주소**: 서울 강남구 테헤란로 406 샹제리제타워 A동 C111호

## 🎯 사업 분야

- 활동지원 서비스
- 물품 나눔 사업
- 장애인 자조모임 운영
- 힐링 여행 프로그램
- 서울시 디딤돌 사업
- 지역사회 연계 활동

## 📄 라이선스

Copyright ⓒ 2025 사회적협동조합 가치로운 All rights reserved.