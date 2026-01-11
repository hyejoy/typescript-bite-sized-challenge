/**
 * 인터페이스 확장 ≒ 상속
 * : 인터페이스만이 가지고 있는 특징
 */

interface Animal_ {
  name: string;
  age: number;
}

interface Dog_ {
  name: string;
  age: number;
  isBark: boolean;
}

interface Cat_ {
  name: string;
  age: number;
  isScratch: boolean;
}

interface Chicken_ {
  name: string;
  age: number;
  isFly: boolean;
}

/**
 * 📝 name,age 처럼 중복된 프로퍼티 정의가 너무 많음 -> 비효율적
 * Animal 의 속성명이 하나라도 바뀌면
 * 그 서브타입인 Dog, Cat, Chickeh도 속성명을 다 바꿔줘야하는 문제 생김
 */

interface Animal {
  name: string;
  color: string;
}

// Animal 인터페이스를 확장
// ≒ 기존의 것들을 다 가지고 있는 상태에서 뭔가를 추가한다
interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chickeh extends Animal {
  isFly: boolean;
}

// Animal을 상속한 Dog 인터페이스 사용코드
const dog: Dog = {
  name: "animal.name 확장속성",
  color: "animal.name 확장속성",
  isBark: true,
};

/**
 * 📝 상속을 받는 인터페이스의 동일한 프로퍼티는 재정의 가능하다.
 *    ≒ 프로퍼티 재정의 할때는 원본타입의 서브타입이여만 한다.
 */
interface Dog2 extends Animal {
  name: "돌돌이"; // 스트링 리터럴 타입으로 재정의
  isBark: boolean;
}

/**
 * 다중 확장
 */

interface DogCat extends Dog, Cat {}

// Dog·Cat 인터페이스가 가지고있는 프로퍼티를 모두 가지고있는 타입
const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: false,
  isScratch: true,
};
