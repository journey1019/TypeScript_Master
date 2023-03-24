{
  // Javascript 💩
  // 함수가 긴 경우, 어떤 값을 전달하고 리턴하는지 한 눈에 알아보기 힘듦 + 엉뚱한 동작
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // Typescript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Javascript
  function jsFetchNum(id) {
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Typescript
  // id는 string으로 인자를 받고, return값은 Promise 중에서도 숫자 number타입임
  // fetchNum는 숫자를 fetch하는 함수, 인자로는 string의 id를 받아서 Promise를 리턴함
  // Promise는 fetch 완료 후 숫자 데이터를 return하겠구나!
  function fetchNum(id: string): Promise<number> {
    // Promise 완료 후 number의 data를 return할 것을 알 수 있음
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100); // 100 이 숫자이기 때문에 <number>
    });
  }
}