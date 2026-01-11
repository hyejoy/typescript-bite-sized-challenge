/**
 * 📖 첫번째 사례
 */

// any 남발 코드
function swap_(a: any, b: any) {
  return [b, a];
}
const [a, b] = swap_(1, 2);

// any → 제네릭 활용
// a와 b의 타입변수가 다를경우에는 제네릭을 두개쓰면됨
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const swapResult = swap("1", 2);
console.log(swapResult); // [2,"1"]

/**
 * 📖 두번째 사례
 */

function returnFirstValue<T>(data: T[]) {
  return data[0];
}

const num = returnFirstValue([0, 1, 2]); // num 추론
const str = returnFirstValue(["hi", "typesicrt", "!"]); //string 추론

let test = returnFirstValue([1, "string", "hi"]); // test의 타입은 number | string 유니온타입으로 추론
//  └──  첫번째 요소를 꺼내서 반환했을때, 타입스크립트는 첫번재 요소가 string인지 number인지 모르기때문에
//       numer | string 유니온 타입으로 반환하는것임

/**
 * 📝 첫번째 요소에 맞게 추론하게 하고싶다면?
 *    -> 튜플타입 사용!
 */

/**                                     ┌── 다음 요소들의 타입과 갯수는 알필요없기 때문에
 *                                      ┌──  restparam 쓰듯이 이런식으로 써줌  */
function returnFirstValue_<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let useTupleType = returnFirstValue_([1, "str1", "str2"]); // number로 자동추론

/**
 * 📖 세번째 사례
 */

function getLength_(data: any) {
  return data.length;
}

let var1 = getLength_([1, 2, 3]); //3
let var2 = getLength_("12345"); //5
let var3 = getLength_({ length: 10 }); //10

// length라는 프로퍼티만 있다면 문제없음
// 모든 변수는 any 타입으로 추론되고있음

let var4 = getLength_(10); // 하지만, number 타입을 넣는순간 런타임 에러가 생길수있음

/**
 * 📝 제네릭 함수를 만들어
 * length 프로퍼티를 사용하지 못하는 값들은 전달하지 못하게 만들면 됨
 * -> <T extends {length: number}>
 * -> length 프로퍼티를 가진 객체를 상속하도록 제한
 */

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}
