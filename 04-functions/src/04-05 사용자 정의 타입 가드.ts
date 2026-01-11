/**
 * 사용자 정의 타입가드
 * : 함수를 이용해 타입가드 커스텀 가드
 */

type Dog = {
  name: string;
  isBark: boolean;
};

type Cat = {
  name: string;
  isScratch: boolean;
};

type Animal = Dog | Cat;

// 서로소 유니온 타입을 사용하지 못한다고 가정했을때
// 프로퍼티 이름을 기준으로 타입을 좁히면 직관적으로 좋지않음
function warning_(animal: Animal) {
  if ("isBark" in animal) {
    // 강아지
  } else if ("isScratch" in animal) {
    // 고양이
  }
}

// ⭐ 타입 단언과 타입가드를 활용하여 커스텀 함수 생성
//                            ↱ true를 리턴한다면 이것은 Dog 타입이다.
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

function warning(animal: Animal) {
  if (isDog(animal)) {
    animal; // animal이 강아지로 자동추론
  } else if (isCat(animal)) {
    animal; // animal이 고양이로 자동추론
  }
}
