/**
 * 타입 좁히기
 * : 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

function func(value: number | string) {
  value; // number | string 타입으로 추론
  // value.toFixed(); ❌
  // value.toUpperCase(); ❌

  // 타입 좁히기 사용
  if (typeof value === "number") {
    console.log(value.toFixed()); // number 타입으로 추론
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // string 타입으로 추론
  }
}

/**
 * 📝 (typeof value === "type") 형식을 타입가드 라고 함
 */

/**
 * 대표적 타입가드 살펴보기
 */

// null값에 typeof를 써도 object를 반환하기때문에
// typeof value === "object" 를 쓰게되면 Date, null 둘다 해당되어서 권장 x
// ⭐ 이런경우엔 instanceof 연산자를 써주면 된다.
// A instanceof B
// A의 값이 B의 인스턴스인가요? 라는 뜻
function func1(value: string | number | Date | null) {
  if (typeof value === "number") {
    console.log(value.toFixed()); // number 타입으로 추론
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // string 타입으로 추론
  } else if (value instanceof Date) {
    console.log(value.getTime());
  }
}

type Person = {
  name: string;
  age: number;
};

function func2(value: string | number | Date | null | Person) {
  if (typeof value === "number") {
    console.log(value.toFixed()); // number 타입으로 추론
  } else if (typeof value === "string") {
    console.log(value.toUpperCase()); // string 타입으로 추론
  } else if (value instanceof Date) {
    console.log(value.getTime());
  }

  // ❌❌❌ else if (value instanceof Person)
  // Person은 class가 아니고 객체 타입이라서 instaceof 연산자를 쓸 수 없음

  /**
   * 프로퍼티의 값 "age" 를 포함하고 있는지 확인하는 in 연산자를 사용
   * in 뒤에는 null이나 undefined가 올수없으므로
   * value && 를 적어주어 value가 있을때만 실행되도록 작성함
   */
  else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}
