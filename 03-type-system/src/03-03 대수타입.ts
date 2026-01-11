/**
 * 대수 타입
 * : 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 *   합집합 타입과 교집합 타입이 존재함
 */

// 1. 합집합 타입 - Union 타입
let a: string | number | boolean;
a = 1;
a = "string";
a = true;

let arr: (number | string | boolean)[] = [1, "gekk", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "강아지",
  color: "yellow",
};

let union2: Union1 = {
  name: "사람",
  language: "ko",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// 2. 교집합 타입 - Intersection 타입
let variable: number & string; // never타입으로 추론됨 (공집합)

type Dog1 = {
  name: string;
  color: string;
};

type Person1 = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: "",
  color: "",
  language: "",
};
