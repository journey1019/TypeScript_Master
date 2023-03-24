{
    /**
     * Type Aliases : 새로운 타입을 정할 수 있음
     */

    // Text라는 새로운 타입정의 가능
    type Text = string;
    // name이라는 변수에 문자열 타입을 지정하면 문자열만 할당가능
    // const name: string = 'anna';
    const name: Text = 'anna'; //내가 새롭게 정의한 Text타입, Text type == string
    const address: Text = 'korea';
    // number형태의 새로운 Num 타입
    type Num = number;
    // 원시타입 뿐만아니라

    // Object타입도 새로운 타입으로 정의 가능
    type Student = {
        name: string; //string 형태의 name 데이터와
        age: number; //number 형태의 age데이터
    };
    const student: Student = {
        // animal: 'dog', 불가능
        name: 'Anna',
        age: 12,
    };

    /**
     * String Literal Types
     */

    // 문자열도 타입으로 지정 가능
    type Name = 'name';
    let annaName: Name;
    annaName = 'name'; // 'd' 불가능
    type JSON ='json';
    const json: JSON = 'json';


}