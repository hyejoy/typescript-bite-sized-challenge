# TypeScript Bite-Sized Challenge

## Created on

2026년 01월 07일

이 리포지토리는  
TypeScript 핵심 개념을 빠르게 학습하고,  
실제 챌린지 및 Next.js 프로젝트에 적용하기 위한 학습·실습 공간입니다.

> 목표:
>
> - **TypeScript로 안전하게 개발할 수 있는 상태 만들기 ⭕**

---

## 📌 학습 목적

- JavaScript → TypeScript 전환에 필요한 핵심 개념 정리
- 타입 설계를 통한 버그 예방 경험
- Next.js 프로젝트에서 바로 사용할 수 있는 타입 감각 확보
- 챌린지 코드에 **타입 안정성**을 자연스럽게 적용

---

## 🗓️ 학습 방식

- 하루 **TypeScript 10강**
- 각 개념별로 **최소 예제 + 실전 활용 예제 작성**
- “이해 → 바로 써보기”를 기준으로 정리

---

## 📁 디렉토리 구조

```text
./
├── components/  # 공통 UI 컴포넌트
├── features/    # 도메인 기능 모듈
├── pages/       # 페이지 구성
├── public       # 정적 리소스
├── hooks/       # custom hooks
├── styles/      # 스타일 관련
├── lib/         # 유틸 함수 및 API 호출
└── types/       # 전역 타입 정의
```

## 🧠 학습 목차 (강의 흐름 기반)

### 1️⃣ TypeScript 시작하기

- TypeScript란?
- 컴파일 과정 이해
- tsconfig 기본 설정

📁 `basics/`

---

### 2️⃣ 기본 타입

- number, string, boolean
- array, tuple
- enum
- any / unknown / void / never

📁 `types/`

---

### 3️⃣ 함수와 타입

- 함수 타입 정의
- 선택적 매개변수
- 기본값 파라미터
- 반환 타입 명시

📁 `functions/`

---

### 4️⃣ 객체 타입

- object 타입
- interface
- type alias
- readonly / optional property

📁 `objects/`

---

### 5️⃣ 유니온 & 인터섹션

- union type
- intersection type
- 타입 좁히기 (type narrowing)

📁 `types/`

---

### 6️⃣ 제네릭 (Generic)

- 제네릭 기본 문법
- 제네릭 함수
- 제네릭 인터페이스
- 제네릭 제약 조건

📁 `generics/`

---

### 7️⃣ 고급 타입

- keyof
- typeof
- indexed access type
- mapped type

📁 `advanced/`

---

### 8️⃣ 유틸리티 타입

- Partial
- Required
- Pick / Omit
- Record
- Readonly

📁 `utility-types/`

---

### 9️⃣ 실전 연습 (챌린지 대비)

- API 응답 타입 정의
- props 타입 설계
- 상태(state) 타입 설계
- 공통 타입 분리 전략

📁 `practice/`

---

## 🚀 챌린지 적용 기준

- `any` 사용 금지
- 타입 추론이 가능한 곳은 명시적 타입 최소화
- 공통 타입은 `/types` 또는 별도 파일로 분리
- **“일단 돌아가는 코드”보다 “안전한 코드” 우선**

---

## ✍️ 메모

- 타입이 헷갈릴 경우, 허용/비허용 케이스를 직접 작성해 타입 경계를 확인
- Next.js 적용 시:
  - props
  - API response
  - 서버/클라이언트 경계 타입
    위주로 활용 예정

---

## ✅ 최종 목표

> TypeScript를 의식하지 않아도 자연스럽게 쓰는 상태 만들기
