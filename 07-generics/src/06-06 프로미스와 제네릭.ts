/**
 * 프로미스와 제네릭
 *  → 제네릭을 활용해 비동기 처리를 돕는 프로미스 객체의 타입을 정의하는 방법
 *  → API 호출 비동기 처리 코드에도 타입을 안전하게 정의 가능
 *  → promise는 제네릭 클래스를 기반으로 타입이 선언되어 있기 때문에
 *    타입 변수로 비동기 처리의 결과값의 타입을 정의해 줄순 있지만
 *    반대로 실패(reject)했을때의 타입은 정해줄 수 없다.
 *  →
 */

/**
 * Promise 관련 참고 자료
 * - 비동기 처리
 * https://reactjs.winterlood.com/45ee7daf-0c32-4f40-9b20-b7bba338d39f
 *
 * - 프로미스와 제네릭
 * https://ts.winterlood.com/8ea82f04-a28a-4987-8a46-12fd40d277cd
 */

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

promise.then((res) => {
  console.log(res); // 20 출력인데 res는 unknonw타입으로 추론되고 있음 → 타입명시안하면 unknonw타입으로 추론
});

// 프로미스는 resolve, reject를 호추랳서 전달하는 비동기 작업결과값의 타입을 자동으로 추론하는 기능 없음
// → Promise는 타입스크렙트에서  제네릭 클래스가 별도 선언되어있음
// → 제네릭 활용
// → 비동기 결과값의 타입을 지정 할 수있음

const promise1 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(30); //  resolve: (value: number | PromiseLike<number>) => void 로 추론됨
    reject("Error Message"); //  reject: (reason?: any) => void 로 설정되어 있음 (고정)
  }, 3000);
});

promise1.then((res) => {
  console.log(res); // 제네릭을 활용하면 number로 잘 추론됨
});

promise1.catch((err) => {
  // 타입가드
  if (typeof err === "string") {
    console.log(err); // any타입으로 추론됨
  }
});

/**
 * 📝 Promise의 catch 메소드는 매개변수의 타입을 정확히 알 수가 없다
 * 무조건 다 Any 타입으로 들어옴
 * 따라서 타입좁히기가 필요하다.
 */

/**
 * 프로미스 반환하는 함수의 타입을 정의
 */
interface Post {
  id: number;
  title: string;
  content: string;
}

const post1: Post = {
  id: 1,
  title: "제목1",
  content: "컨텐츠1",
};

// Promise 제네릭 사용방법 1
function fecthPost() {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve(post1);
      reject("실패");
    }, 200);
  });
}
// Promise 제네릭 사용방법 2 ✅ 추천 : 현업시 가독성 좋음

function fecthPost2(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(post1);
      reject("실패");
    }, 200);
  });
}

fecthPost()
  .then((post) => {
    console.log(post.title);
  })
  .catch((err) => console.log(err));
