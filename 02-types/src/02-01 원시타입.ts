/**
 *  원시타입 : 하나의 값만 저장하는 타입
 */

// number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN; /** not a number */

// string
let str1: string = "hello";
let str2: string = `hello`;
let str3: string = `hello ${num1}`;

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// stricNullChecks: false
// 임시로 null을 넣을수 있게 할수 있음
// let numA: number = null;

// 리터럴(값) : 값 그 자체가 타입이 되는 타입
// 고정된 값 제외 어떤 값도 넣을수 없음
let numA: 10 = 10;
let strA: "hello" = "hello";
let boolA: true = true;
