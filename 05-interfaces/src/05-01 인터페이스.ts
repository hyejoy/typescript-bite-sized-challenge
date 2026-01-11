/**
 * ⭐ 인터페이스
 * : 타입에 이름을 지어주는 다른 문법
 *   이 객체는 이런 형태를 가져야 해 같은 일종의 약속·규칙을 만들어주는 문법
 *   객체의 구조를 정의하는데 특화된 문법이기 때문에
 *   타입별칭에서 제공하지 않는 상속 합침 등의 특수한 기능을 제공함
 *   참고*) 인터페이스는 앞에 I를 붙이는 관습을 사용하는 경우가 있음 (팀바팀)
 */

// 인터페이스는 타입별칭과 타입을 정의하는 문법만 좀 다를뿐 기본적인 기능은 같다
// ≒ 타입별칭과 다르게 '=' 를 쓰지않는다.

interface IPerson {
  readonly name: string;
  age?: number;
  // 호출 시그니처만 앞에 이름을 붙혀주면 됨
  // ≒ 호출 시그니처를 sayHi: 뒤에 넣어주면 됨
  sayHi2(): void; // 호출 시그니처 (메서드앞에 소괄호 붙음)
  sayHi1?: () => void; // 함수 타입 표현식
}

const person: IPerson = {
  name: "이정환",
  age: 27,
  sayHi2: function () {
    console.log("hello");
  },
};

/**
 * 📝 헷갈리지 말것 (04-02 참고)
 * - 함수 타입 표현식 : 화살표 함수로 타입 별칭 생성
 *   type CASE1 = (a:number, b:number) => number;
 * - 호출 시그니처 : 객체 타입에 함수 호출 형태로 정의
 *   type CASE2 = {(a:number, b:number):number}
 */

// 함수 호출 시그니처 타입
type Func = {
  (): void;
};

const func: Func = () => {};

/* ⭐ 인터페이스에서 함수 오버로딩도 구현하고 싶을때는
      호출 시그니처만 사용해야한다.
*/

interface OverLoading {
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

/**
 * 타입별칭과 인터페이스의 차이점
 * : 타입별칭에서는 유니온(|)이나 인터섹션(&)을 생성할수있지만
 * 인터페이스에서는 생성할 수 없음
 * ⭐ 유니온, 인터섹션을 사용하고싶다면 타입별칭을 사용하거나
 *    type 주석에 활용해야한다.
 */

type Type1 = number | string;
type Type2 = number & string;

/**            ↓↓↓ type 주석 ↓↓ */
const person1: IPerson | number = {
  name: "이정환",
  sayHi2: function () {
    console.log("...");
  },
};
