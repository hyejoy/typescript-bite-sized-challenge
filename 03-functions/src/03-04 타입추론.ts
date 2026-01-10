/**
 * 타입추론
 */

// 타입 자동추론
// 변수의 타입을 추론할 정보가 있으면 자동추론됨
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  urls: ["https://winterlood.com"],
};

let { name, profile, urls } = c;
let [one, two, three] = [1, "hello", true];

let arr = [1, "string"];

// 매개변수에 기본값 설정된 경우에도 타입 자동추론됨
function func(message = "hi") {
  return "hellio";
}

/**
 * any 타입의 진화
 * 초기값 없이 변수를 선언하면 암묵적으로 any Type으로 추론되고
 * 암묵적으로 추론된 anyType은 진화를 하게 됨
 */
let d; // 암묵적 any로 추론
d = 10; // number로 추론
d.toFixed();
// d.toUpperCase();  ❌ 'number 형식에 toUpperCase 속성이 없습니다

d = "hello"; // string으로 추론
d.toUpperCase();
// d.toFixed(); ❌ 'toFixed' 속성이 'string' 형식에 없습니다.

// const로 변수의 값을 설정하게되면, 리터럴 타입으로 추론됨
const num = 10; // const num:10

/**
 *  📝 const로 선언하면 초기값의 리터럴 타입으로 추론되어, 한정적이지만
 *     let으로 선언하면 범용적으로 변수를 사용 가능하다. ≒ 타입 넓히기가 가능하다.
 */
