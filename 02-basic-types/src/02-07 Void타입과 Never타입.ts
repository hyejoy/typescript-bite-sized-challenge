// void : 아무것도 없음을 의미하는 타입
function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("void Function");
}

// 변수의 타입으로 void를 정의할 수 있음
let a: void;
// void로 정의한 변수에는 어떤 값도 담을수 없고 오직 undefined만 담을 수 있음
a = undefined;
// a = 1; (❌ 'number'형식은 void 형식에 할당할 수 없습니다.)
// a = 'hello'; (❌ 'string'형식은 void 형식에 할당할 수 없습니다.)
// a = {}; (❌ '{}'형식은 void 형식에 할당할 수 없습니다.)

// stricNullChecks 속성을 끄면 null도 넣을수 있음
// a = null;

// never : 불가능한 타입

// 무한루프를 타는 함수의 반환값은 never
// 함수가 뭔가를 반환한다는 것 자체가 모순이고 절대 불가능
function func3(): never {
  while (true) {}
}

// 실행되면 바로 프로그램이 중지되기 때문에 never 정의가 가장 적합
function func4(): never {
  throw new Error();
}

// 변수의 타입으로 never를 정의 할 수 있음
let b: never;
// 변수에 어떤 값도 담을 수 없음 null, undefined 모두 포함

// b = 1; (❌ 'number'형식은 never 형식에 할당할 수 없습니다.)
// b = {}; (❌ '{}'형식은 never 형식에 할당할 수 없습니다.)
// b = undefined; (❌ 'undefined'형식은 never 형식에 할당할 수 없습니다.)
// b = null (❌ 'null'형식은 never 형식에 할당할 수 없습니다.)

let anyVar: any;
// b = anyVar (❌ 'any'형식은 never 형식에 할당할 수 없습니다.)
