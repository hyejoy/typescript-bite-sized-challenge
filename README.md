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
├── 01-introduction/        # 강의 소개 및 TypeScript 개론 (환경 설정, 컴파일, tsconfig)
├── 02-basic-types/         # 기본 타입 (원시 타입, 리터럴, 배열, 튜플, enum 등)
│   └── dist/               # 컴파일 결과 (학습용, 선택적 커밋)
├── 03-type-system/         # 타입 시스템 이해 (타입 계층, 호환성, 타입 좁히기 등)
├── 04-functions/           # 함수와 타입 (함수 타입, 호출 시그니처, 오버로딩)
├── 05-interfaces/          # 인터페이스 (확장, 합치기)
├── 06-classes/             # 클래스 (접근 제어자, 인터페이스 구현)
├── 07-generics/            # 제네릭 (함수, 인터페이스, 클래스, Promise)
├── 08-type-manipulation/   # 타입 조작 (keyof, indexed access, mapped, template literal)
├── 09-conditional-types/   # 조건부 타입 (conditional, distributive, infer)
├── 10-utility-types/       # 유틸리티 타입 (Partial, Pick, Omit, Record 등)
├── 11-practice/            # 실전 연습 및 챌린지 대비
├── types/                  # 공통 전역 타입 정의
└── README.md

```

---

```md
## 🧠 학습 목차 (강의 섹션 기준)

### 1️⃣ 강의 소개 및 타입스크립트 개론

- 강의 소개
- 개발 환경 준비
- 타입스크립트 소개
- 타입스크립트 동작 원리
- 컴파일 및 tsconfig 설정

📁 `01-introduction/`

---

### 2️⃣ 타입스크립트 기본

- 기본 타입
- 원시 타입과 리터럴 타입
- 배열과 튜플
- 객체
- 타입 별칭과 인덱스 시그니처
- enum
- any / unknown
- void / never

📁 `02-basic-types/`

---

### 3️⃣ 타입스크립트 이해하기

- 타입은 집합이다
- 타입 계층도
- 객체 타입의 호환성
- 대수 타입
- 타입 추론
- 타입 단언
- 타입 좁히기
- 서로소 유니온 타입

📁 `03-type-system/`

---

### 4️⃣ 함수와 타입

- 함수 타입
- 함수 타입 표현식과 호출 시그니처
- 함수 타입의 호환성
- 함수 오버로딩
- 사용자 정의 타입 가드

📁 `04-functions/`

---

### 5️⃣ 인터페이스

- 인터페이스
- 인터페이스 확장
- 인터페이스 합치기

📁 `05-interfaces/`

---

### 6️⃣ 클래스

- 자바스크립트 클래스
- 타입스크립트 클래스
- 접근 제어자
- 인터페이스와 클래스

📁 `06-classes/`

---

### 7️⃣ 제네릭

- 제네릭 소개
- 타입 변수 응용
- 제네릭 인터페이스 / 타입 별칭
- 제네릭 클래스
- Promise와 제네릭

📁 `07-generics/`

---

### 8️⃣ 타입 조작

- indexed access type
- keyof 연산자
- mapped type
- template literal type

📁 `08-type-manipulation/`

---

### 9️⃣ 조건부 타입

- 조건부 타입
- 분산적인 조건부 타입
- infer

📁 `09-conditional-types/`

---

### 🔟 유틸리티 타입

- Partial / Required / Readonly
- Pick / Omit / Record
- Exclude / Extract / ReturnType

📁 `10-utility-types/`

---

### 1️⃣1️⃣ 실전 연습 (챌린지 대비)

- API 응답 타입 정의
- props 타입 설계
- 상태(state) 타입 설계
- 공통 타입 분리 전략

📁 `11-practice/`

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
```
