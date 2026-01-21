/**
 * ✨ 인덱스드 엑세스 타입
 * → index를 이용해서 다른 타입내 특정 프로퍼티 타입을 추출하는 타입
 * → 객체, 배열, 튜플에 모두 사용 가능
 */

// 1. [객체 사용 ] 인덱스드 엑세스 타입
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

const post: Post = {
  title: "제목",
  content: "게시글",
  author: {
    id: 1,
    name: "이정환",
  },
};

// 게시글에서 작성자의 이름과 아이디를 붙여서 출력하는 함수가 있다고 가정

// 원래 쓰던방식
function printAuthorInfo_(author: { id: number; name: string }) {
  console.log(author.id);
  console.log(author.name);
}

//                               ↓인덱스드 엑세스 타입 활용
function printAuthorInfo(author: Post["author"]) {
  console.log(author.id); //           ↑ 이 스트링 리터럴 타입을 인덱스라고 부름
  console.log(author.name); //            꼭 타입이 들어와와야돼서 const key="author" 선언후 Post[key] 형태 못씀
}

interface Post_ {
  author: {
    id: number;
    name: string;
    age: number; // 추가됐다고 가정
    location: string; // 추가됐다고 가정
  };
}

// 새로운 프로퍼티가 추가되어도 즉시 반영됨
function printAuthor(author: Post_["author"]) {
  console.log(author.id);
  console.log(author.age);
  console.log(author.location);
  console.log(author.name);
}

// author의 id의 타입만 가져오고싶다면? → 중첩으로 대괄호 쓰기
function printAuthorId(id: Post_["author"]["id"]) {
  console.log(id);
}

// 2. [배열 사용 ] 인덱스드 엑세스 타입
//    → 배열 타입으로 부터 특정 요소의 타입을 뽑아냄

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

/**
 * 배열 타입으로부터 요소의 타입을 추출 하려면 대괄호 안에 number타입을 넣어주면 ≓ Type[number] ≓ Type[0]
 * 배열 타입으로부터 하나의 요소의 타입만 가져온다
 */

// 객체 타입 뽑기
const postList_post: PostList[number] = {
  title: "",
  content: "",
  author: {
    id: 1,
    name: "",
  },
};

// 중첩객체 프로퍼티 타입 뽑기 (author)
const author: PostList[number]["author"] = {
  id: 1,
  name: "",
};

// 3. 튜플 인덱스트 엑세스 타입

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean

/**
 * 튜플은 길이가 고정된 타입이기 때문에 아래처럼
 * 존재하지 않는 인덱스 타입을 추출하려고 하면 오류 발생함
 * type Tup3 = Tupe[3] ❌
 */

// 최적의 공통 타입 뽑아오기
type TupNum = Tup[number]; // string | number | boolean
