/**
 * ✨ keyof 연산자
 * → 특정 객체 타입으로부터 프로퍼티 키들을 유니온 스트링 타입으로 추출하는 방식
 * → 객체타입에 적용하는 연산자
 * → ⭐ 무조건 타입에만 쓸 수 있는 연산자
 *       ∟ keyof Person (O) / keyof person (X)
 */

interface Person {
  name: string;
  age: number;
}

/* key 타입을 string으로하면 오류남
 * 모든 문자열의 값이 person 객체 key라고 볼수 없기 때문임
 *  이럴때 keyof 연산자 사용
                                             ↓ Person 객체 타입의 모든 프로퍼티 키를 union 타입으로  추출*/
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key]; // 프로퍼티 값 return   ∟ "name" | "age"
}

const person: Person = {
  name: "이정환",
  age: 27,
};

getPropertyKey(person, "name"); // 이정환
getPropertyKey(person, "age"); // 27

/**
 * 📝 keyof는 typeof와 같이 쓸 수 있다.
 */

type Person_ = typeof person; //Person_은 Person 타입으로 추론됨

type PersonValue = keyof typeof person; // "age" | "name"
//    → Person 타입의 프로퍼티 키들을 union으로 뽑아냄
