/**
 * 제네릭 인터페이스
 * 제네릭 함수만드듯 동일하게 만들어주면 됨
 * ⭐ 제네릭 인터페이스는 제네릭 함수와 달리 타입으로 어떤 변수에 정의할때
 * 반드시 <> 를 열고 타입을 직접 할당해 줘야함
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

// * 📝 여기서 keyPair은 타입 변수 ≒ 타입 파라미터 ≒ 제네릭 타입 변수 ≒ 제네릭 타임 파라미터
//                 ↓반드시 타입 할당↓
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 123,
};

// 제네릭 함수 → 타입 할당 안해도 됨
function returnFirstValType<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let KeyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 인덱스 시그니처 + 제네릭 타입 활용
 */

// 인덱스 시그니처
interface NumberMap {
  [key: string]: number;
}

let number1: NumberMap = {
  key: -1234,
  key2: 334,
};

// 제네릭 인덱스 시그니처
// value의 값을 마음대로 바꿔쓰는 인덱스 시그니처가 만들어짐!
interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "value",
  key1: "value1..",
};

let booleanMap: Map<boolean> = {
  key: true,
  key1: false,
  key2: true,
};

/**
 * 제네릭 타입 별칭
 * 제네릭 인터페이스와 크게 다를거 없이 똑같이 만들음
 */

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map<string> = {
  map2: "map2",
  map0: "map12343",
};

/**
 * 제네릭 인터페이스 활용 예시
 * → 유저 관리 프로그램
 * → 유저 구분 : 학생 유저/ 개발자 유저
 */

interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User1 {
  name: string;
  profile: Student | Developer;
}

/**
 * goToSchool : 학생만 할 수 있는 기능
 * 이렇게 특정 회원만 이용할 수 있는 함수가 많아지면
 * 매번 타입좁히기를 해야하는데 불편함
 *  → 이럴때 제네릭 인터페이스를 이용
 */
function goToSchool(user: User1) {
  if (user.profile.type !== "student") {
    console.log("잘 못 오셨습니다");
    return;
  }
  const school = user.profile.school;
  console.log(`${school}로 등교완료`);
}

const developerUser: User1 = {
  name: "이정환",
  profile: {
    type: "developer",
    skill: "typeSDcript",
  },
};

const studentUser: User1 = {
  name: "김학생",
  profile: {
    type: "student",
    school: "사당초등학교",
  },
};

// 활용법
/**
 * 📝 이런식으로 객체 타입들로 조합된 복잡한 객체 타입을 정의해서 사용할대는
 * 제네릭 인터페이스를 이용하면 비교적 깔끔하게 유형을 분리 할 수 있음
 */
interface User<T> {
  name: string;
  profile: T;
}

const devUser: User<Developer> = {
  name: "개발자",
  profile: {
    type: "developer",
    skill: "react",
  },
};

// 타입 좁히기를 하지않게 됨
function goToCompany(user: User<Developer>) {
  console.log(user.name);
  console.log(user.profile);
  console.log(user.profile.skill);
  console.log(user.profile.type);
}
