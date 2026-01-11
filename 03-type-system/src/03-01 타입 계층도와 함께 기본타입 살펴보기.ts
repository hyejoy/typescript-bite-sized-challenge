/**
 * unknown 타입
 * 모든 타입의 슈퍼타입
 */

// unknown 타입은 모든 타입의 슈퍼타입이므로 어떤 값이든 대입할 수 있음
function unknownExam() {
  // 모든 타입이 unknown으로 업캐스팅 가능
  let a: unknown = 1;
  let b: unknown = "string";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
  let f: unknown = {};
  let g: unknown = () => {};

  // 하지만 반대는 안됨 ≒ 다운캐스팅
  let unknownVar: unknown;
  // let num: number = unknownVar; (❌ 'unknown' 형식은 'string' 형식에 할당할 수 없습니다.)
  // let str: string = unknownVar; (❌ 'unknown' 형식은 'number' 형식에 할당할 수 없습니다.)
}

/**
 * never 타입
 * 모든 타입의 서브 타입 ≒ 모든집합의 부분집합 ≒ 공집합(아무것도 없는 집합)
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {} // 반환할 수 있는 값이 아무것도 없다.
  }

  // 네버타입은 모든 타입의 서브타입이기 때문에
  // never타입이 모든타입으로 업캐스팅 가능
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 하지만 반대는 안됨
  // never타입에 숫자를 넣는다는건, number타입이 never타입으로 다운캐스팅이므로 안됨
  // 따라서 그 어떤값도 naver타입에 넣을수 없음

  // let never1:never = 10;(❌ 10 형식은 'string' 형식에 할당할 수 없습니다.)
  // let never2:never = 'string'; (❌ 'string' 형식은 'string' 형식에 할당할 수 없습니다.)
}

/**
 * void 타입
 * undefined의 슈퍼타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log("hi");
  }

  // undefined -> void 업캐스팅이니까 가능
  let voidVar: void = undefined;
}

/**
 * any 타입
 * 치트키로 계층도 무시함
 * 모든 타입의 슈퍼타입으로 위치하기도하고,
 * 모든 타입의 서브타입으로 위치하기도함 (never 제외)
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // 다운캐스팅
  undefinedVar = anyVar; // 다운캐스팅 가능
  // any타입은 자신에게 오는 다운캐스팅, 자기가 다운 캐스팅하는것도 가능

  // 하지만 예외로 never로 다운캐스팅 안됨
  // neverVar = anyVar  (❌ any형식은 never 형식에 할당할 수 없습니다.)
}
