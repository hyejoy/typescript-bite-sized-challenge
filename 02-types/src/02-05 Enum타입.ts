// ⭐ enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

const user1 = { name: "이정환", role: 0 }; // 0 <- 관리자
const user2 = { name: "홍길동", role: 1 }; // 1 <- 일반유저
const user3 = { name: "아무개", role: 2 }; // 2 <- 게스트

// role 2번이 관리자였나 게스트였나 기억하기 어려울수도 있음
// 이런경우 enum을 활용하면 좋음

// 만들고자하는 enum 관리자거나 일반유저거나 게스트거나
// 이 세가지의 경우를 만들고 싶은거임
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const user11 = { name: "이정환", role: Role.ADMIN }; // 0 <- 관리자
const user12 = { name: "홍길동", role: Role.USER }; // 1 <- 일반유저
const user13 = { name: "아무개", role: Role.GUEST }; // 2 <- 게스트

/**
 * 📝 숫자형 enum의 값을 할당하지 않은경우 첫번째 값은 0이 자동으로 들어가고
 * 그이후의 값은 +1 씩 증가하는 값이 자동으로 들어감
 * 값을 하나만 지정하는경우도 그 이후의 값은 +1 씩 증가하는 값이 자동으로 들어감
 */

enum Role1 {
  ADMIN, // 0
  USER, // 1
  GUEST, // 2
}

enum Role2 {
  ADMIN = 11,
  USER, // 12
  GUEST, // 13
}

enum Role3 {
  ADMIN, //0
  USER = 10,
  GUEST, // 11
}

// 문자열 enum
enum Language {
  korea = "ko",
  english = "en",
}

const user4 = {
  name: "이정환",
  role: Role3.USER,
  language: Language.korea,
};

/**
 * 📝 enum은 특이하게도 컴파일 결과가 사라지지 않고 자바스크립트 객체로 전환됨
 *    -> dist/02-05 Enum타입.js 참고
 */
