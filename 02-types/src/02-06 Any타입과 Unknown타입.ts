// any : 특정 변수의 타입을 확실히 모를 때
// 어떤 타입이든지 변수에 넣을 수 있다.
let anyVar: any = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {};

let num: number = 10;
num = anyVar;

//메서드도 제약없이 사용가능
anyVar.toUpperCase();
anyVar.toFixed();
// 하지만 컴파일 하면, 런타임 오류 발생

// unknown : 타입을 알 수 없는 값이며, 사용하기 전에 반드시 타입 검증이 필요한 안전한 any 대체 타입
// 어떤 타입이든지 변수에 넣을 수 있지만 모든 타입에 unknown 타입 값을 넣을 수 없다.
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// num = unknownVar; (❌ unknown 형식은 number 형식에 할당할 수 없습니다.)
// unknownVar.toUpperCase(); (❌ unknownVar은 unknown 형식입니다.)

/**
 * 📝 변수에 저장할 값의 타입이 확실하지 않을때는 Any 타입보다는
 * 조금 더 안전한 unknown 타입을 활용하는게 좋다
 * unknown 타입은 어떤 연산・메서드・변수에 값을 넣을 수 없기때문에
 * 런타임 오류를 일으키는 any타입보다는 낫다
 */
