{
    /**
     * Type Inference
     */
    // Type을 정확히 명시하는 것보다 자동으로 명시하기

        // let text: string = 'hello';      string이라는 type 지정하지 않아도 자동으로 타입 지정 및 유추
    let text = 'hello';

    /*
    // message를 적지 않거나, 타입지정을 하지 않을 경우 어떤 값이든 받을 수 있는 any가 자동으로 지정됨
    function print(message) {
        console.log(message);
    }
    // string이던 number 등 모두 전달 가능
    print('hello');
    print(1);
     */

    // 인자는 정확히 어떤 데이터를 갖는지 명시하는 것이 중요함
    function print(message = 'hello') {
        console.log(message);
    }

    print('hello');

    function add(x: number, y: number): number {
        return x + y;
    }

    const result = add(1, 2);
}