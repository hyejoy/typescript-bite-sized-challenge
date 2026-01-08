// object
let user0 = {
  id: 1,
  name: "이정환",
};

let user1: object = {
  id: 1,
  name: "이정환",
};
// user1.id (❌ object 객체에 id가 없습니다.)
// object 타입은 객체라는 정보외에는 다른 정보가 없음
// => 객체타입은 리터럴 타입(02-01 참고) 으로!

// 객체 리터럴 타입
let user2: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

user2.id;

// 객체 리터럴 타입 _ 선택적 프로퍼티 (Optional Property)
let user3: {
  id?: number;
  name: string;
} = {
  name: "id는 없어도 된답니다.",
};

// 객체 리터럴 타입 _ readonly (값 변경 불가)
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};
// config.apiKey = "값 못바꿔요" (❌읽기 전용 속성이므로 할당 할수 없습니다.)

/**
 * 📝 객체의 구조를 기준으로 Type을 정의해서
 * 타입스크립트의 이런 특징을 '구조적 Type 시스템' 이라고 부릅니다.
 * C, Java 같은 경우는 이름을 기준으로 타입을 정의하는데
 * 이런 시스템은 '명목적 타입 시스템' 이라고 부릅니다.
 */

type User = {
  name: string;
  age: number;
};

type Admin = {
  name: string;
  age: number;
};

const user: User = {
  name: "Alice",
  age: 20,
};

const admin: Admin = user; // ✅ 가능

/** java
  class User {
    String name;
    int age;
  }
  
  class Admin {
    String name;
    int age;
  }
  
  User user = new User();
  Admin admin = user; // ❌ 컴파일 에러
  
 */
