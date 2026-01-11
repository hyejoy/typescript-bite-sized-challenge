/**
 * 제네릭 함수
 * : 포괄적인 함수 ≒  함수계의 종합병원
 */

function fuc_(value: string) {
  return value; // 매개변수에 의해 자동추론
}

/**
 * 📝 func의 매개변수로 number타입도 넣고싶고, true타입도 넣고싶을때
 *    return 값도 매개변수의 타입에 따라 반환하고싶을때 제네릭 함수를 쓴다.
 */

function func<T>(value: T) {
  return value;
}

let num = func(10); // number 타입으로 추론됨
let bool = func(true); // boolean 타입으로 추론됨
let str = func("stringValue"); // string 타입으로 추론됨
let arr = func([1, 2, 3]); // number[] 타입으로 추론됨
/**
 * 배열의 타입을 튜플타입으로 추론되게 하고싶다면
 * 1. 타입단언 사용
 * 2. 꺽쇠 안에 변수T에 할당하고 싶은 튜플타입 작성
 */

let arr1 = func([1, 2, 3] as [number, number, number]);
let arr2 = func<[number, number, number]>([1, 2, 3]);
/**             └──T에 이값이 할당됨 ──┘ */
