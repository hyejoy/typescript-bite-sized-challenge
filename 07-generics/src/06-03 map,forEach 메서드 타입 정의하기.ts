/**
 * ⭐ map 메서드 제네릭 이용해서 만들어보기
 */

const arr = [1, 2, 3];
const newArr = arr.map((i) => i * 2); // [2,4,6]
/**
 * 📝 map 함수는 콜백함수의 반환값을 모아 새로운 배열로 반환하는 메서드
 *    newArr 변수는 자동으로 number[] 타입으로 추론됨
 *    map 메서드의 타입이 어딘가에 별도로 선언이 되어 있기 때문임
 */

// method 타입을 직접 구현해보기
// 📍 참고) any대신 unknown 넣어서 했는데 에디터 오류때문에 임시로 바꿈

function mapExample(arr: any, callback: (item: any) => unknown) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

mapExample(arr, (it) => it * 2);
/**              └── unknonwn으로 자동 추론됨 */

// 제네릭사용하여 method 타입을 직접 구현하기

function map__<T>(arr: T[], callback: (item: T) => T) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

let mapVal1 = map__(arr, (it) => it * 2);
/**       └── number로 자동 추론됨 */

let mapVal2 = map__(["hi, hello"], (it) => it.toUpperCase());
/**                 └── string로 자동 추론됨 */

// map(["hi, hello"], (it) => parseInt(it)); ❌
/**                           └── pareInt는 반환값은 number type
 *                                하지만 callback 매개변수의 반환값은 T
 *                                이코드로는 T는 string에 해당되므로 오류
 */

/**
 *  📝 map은 모든 타입의 배열 타입이 나올 수 있어야한다.
 *     → 제네릭을 2개 써야함
 */

function map<T, U>(arr: T[], callback: (item: T) => U) {
  let reuslt: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    reuslt.push(callback(arr[i]));
  }
  return reuslt;
}

const mapVal = map(["hi, hello"], (it) => parseInt(it));
/**                                       └── 이 시점에서 U는 컴파일 타임에 number로 추론됨
 *                                           실제 변환 결과의 유효성(NaN 여부)은 런타임에서만 알 수 있음 */

console.log(mapVal); // NaN

/**
 * ⭐ forEach 메서드 제네릭 이용해서 만들어보기
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

var forEachVal = forEach(arr2, (data) => {
  console.log(data);
});
