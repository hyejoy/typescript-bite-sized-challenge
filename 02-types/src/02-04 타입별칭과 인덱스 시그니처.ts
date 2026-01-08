// 타입 별칭 : 타입 정의를 변수처럼 하도록 도와주는 문법
let user0: {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
} = {
  id: 1,
  name: "최수수",
  nickname: "susususu",
  birth: "2021.01.01",
  bio: "안녕하세요",
  location: "서울",
};

// 다른 user객체를 만들때마다 객체 리터럴 타입을 명시해줘야하는데
// 이런 귀찮음을 타입별칭으로 해결할 수 있다.

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 2,
  name: "최수수",
  nickname: "susususu",
  birth: "2021.01.01",
  bio: "멍멍",
  location: "서울",
};

/**
 * 📝 타입별칭은 동일한 스코프에 중복된 이름인 타입별칭을 선언할수 없다
 * 타입스크립트는 자바스크립트 코드에서는 다 제거되기때문에 타입별칭으로 만든 타입들도 다 제거됨
 * -> dist/02-04 타입별칭과 인덱스 시그니처.js  참고
 */

// 인덱스 시그니처 : 키와 벨류의 규칙을 기준으로 객체 타입을 유연하게 정의하도록 도와주는 문법

type CountryCodes0 = {
  Korea: string;
  UnitedState: string;
  UnitedKingdom: string;
};

// CountryCodes에 여러 나라가 더 추가되는 상황이라면..?
// 객체의 property 와  value 타입 관련된 규칙을 파악!
// => key가 string 타입, value도 string타입인 프로퍼티들임!
// string : string 타입이면 모두 허용하게 하자!

type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "이",
  UnitedState: "제",
  UnitedKingdom: "막",
  Japen: "추",
  China: "가",
  Canada: "해",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
  Japen: 999,
};

let countryNumberCodesEmpty: CountryNumberCodes = {}; // 오류안남!
/**
 * 📝인덱스 시그니처 타입은 규칙을 위반하지 않으면 모든 객체를 허용하는 타입
 *  위의 코드는 아무런 프로퍼티가 없으니까 규칙을 위반했다고 판단하지 않아서 오류가 안남
 *  이런점을 주의하고, 만약 오류가 나게 하고싶다면, 밑의 코드처럼 작성하면 됨
 */

type CountryNumber2 = {
  [key: string]: number; // 인덱스 시그니처 타입은 number
  Korea: number;
};

//  * Korea의 값은 인덱스 시그니처 타입과 일치시켜줘야함
//  * Korea: string 으로 지정시 에러남

// let countryNumberCodesEmpty2: CountryNumber2 = {};  (❌ Korea속성 없으므로 오류)
