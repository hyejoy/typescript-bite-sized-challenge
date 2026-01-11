/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

type Admin = {
  name: string;
  kikCount: number;
};
type Member = {
  name: string;
  point: number;
};
type Guest = {
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// 유형별로 출력되는 콘솔이 다르다고 가정
function login(user: User) {
  if ("kikCount" in user) {
    // admin
    console.log(`${user.name}님 현재까지 ${user.kikCount}명 강퇴했습니다.`);
  } else if ("point" in user) {
    // memeber
    console.log(`${user.name}님 현재까지 ${user.point}모였습니다.`);
  } else {
    user;
    //guest
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  }
}

// 위의 코드는 내가 아닌 다른 사람이 봤다고 했을때..
// 주석이 없다면 User 타입이 무엇인지 직관적으로 알기 어려움
/**
 * 📝 서로소 유니온 타입일때, 직관적으로 알아보기위해서
 * tag와 같은 string 리터럴 타입 값을 추가해준다.
 * tag 속성으로 인해 서로소 집합으로 바뀜 ≒ Admin이면서 Member일수 없다
 */

type Admin1 = {
  tag: "ADMIN";
  name: string;
  kikCount: number;
};
type Member1 = {
  tag: "MEMBER";
  name: string;
  point: number;
};
type Guest1 = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type UserType = Admin1 | Member1 | Guest1;

// ⭐ tag 속성으로 인해 직관적인 코드를 작성할 수 있다!

// 1)
function login_(user: UserType) {
  if (user.tag === "ADMIN") {
    console.log(`${user.name}님 현재까지 ${user.kikCount}명 강퇴했습니다.`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님 현재까지 ${user.point}모였습니다.`);
  } else if (user.tag === "GUEST") {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  }
}

// 2)
function login__(user: UserType) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}님 현재까지 ${user.kikCount}명 강퇴했습니다.`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}님 현재까지 ${user.point}모였습니다.`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
    }
  }
}

/**
 * 복습 겸 한가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 객체

type AsyncTask = {
  state: "LOADING" | "FAILED" | "SUCCESS";
  error?: {
    message: string;
  };
  response?: {
    data: string;
  };
};

const loading: AsyncTask = {
  state: "LOADING",
};

const failed = {
  state: "FAILED",
  error: {
    message: "오류 발생원인은 ...",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "{data...}",
  },
};

/**
 * 📝 밑의 코드를보면
 * error과 response 는 옵셔널체이닝이라서 원하는 코드로 작성하기 애매함
 * FAILED일때는 error가 있음을 확신하고싶은데 Non Null 단언 사용하기에도 애매함
 */
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩중");
      break;
    }
    case "FAILED": {
      console.log(task.error?.message);
      break;
    }
    case "SUCCESS": {
      console.log(task.response?.data);
      break;
    }
  }
}

/**
 * 📝 각자 서로소 유니온 타입으로 만들면 해결 가능
 */

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

// 옵셔널 체이닝쓰지 않아도 타입좁히기가 잘 작동하여 문제없음
type AsyncTaskType = LoadingTask | FailedTask | SuccessTask;
function processResult_(task: AsyncTaskType) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩중");
      break;
    }
    case "FAILED": {
      console.log(task.error.message);
      break;
    }
    case "SUCCESS": {
      console.log(task.response.data);
      break;
    }
  }
}
