/**
 * ⭐ 함수 타입 표현식 (함수 시그니처)
 *    (type function (param:type, ... ) => return type)
 *    타입 별칭을 이용하여 JS의 화살표 함수를 만들듯이 함수의 타입을 별도로 정의할 수 있음
 */

type Operation = (a: number, b: number) => number;

// 함수 타입 표현식을 이용하여
// param타입과 반환타입에 일일이 정의해주지 않아도 됨
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

// 함수 타입별칭을 사용하지 함수 타입을 정의 할 수 있다.
const example: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

/**
 * ⭐ 호출 시그니처 ≡ 콜 시그니처
 */

type Operation2 = {
  (a: number, b: number): number;
};

/*           ↓↓↓ 이 부분이 호출 시그니처 ↓↓↓*/
function func(a: number, b: number): number {
  return 0;
}
const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

/**
 * 하이브리드 타입 (호출 시그니처 + 추가 프로퍼티 설정)
 * 웬만하면 사용 안함
 * 호출시그니처를 이용할때는 객체에 프로퍼티를 추가로 정의 해 줄수있다.
 * ≒ 함수도 객체이기 때문에 프로퍼티를 추가로 정의 가능
 */

type Operation3 = {
  (a: number, b: number): number;
  name: string;
};

const oper3: Operation = (a, b) => a + b;
oper3.name;
