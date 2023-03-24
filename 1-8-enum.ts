{
    /**
     * Enum
     */
    // 여러가지의 관련된 상수값들을 한 곳에 모아서 (값이 변하기 않아서 타입이 보장됨) 정의할 수 있게 도와주는 타입
        // Javascript엔 없음 => Typescript에서 자체적으로 제공하는 타입 중 하나임
        // Object.freeze로 구현 가능 (Object 공꽁 얼려서 못 바꿈! _ freeze api)
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10; // CLASS 당 최대 학생수
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNSDAY: 2 });
    const dayOfToday = DAYS_ENUM.MONDAY; // dayOfToday == 0 할당

    // TypeScript
    enum Days {
        Monday = 1, // 0 // 'monday'_문자열 할당가능
        Tuesday, // 1
        Wednesday,
        Thursday,
        Friday,
        Saturday, // 5
        Sunday,
    }

    console.log(Days.Monday);
    const day = Days.Saturday;
    // const day: Days = Days.Saturday;     // day라는 타입은 Days라는 것을 할당받아 사용가능
    // day = Days.Tuesday;
    // Enum의 문제점 == enum으로 타입이 지정된 변수에 다른 어떤 숫자도 할당할 수 있다는 것.
    console.log(day);

    // Union type is better _ enum 대체 가능
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
    let dayOfWeek: DaysOfWeek = 'Tuesday';
    //dayOfWeek = 'Anna'; (x) -> 엉뚱한 문자열 할당 불가능, 내가 지정한 Union 항목 안에서만 가능

    //enum을 쓰는 거의 유일한 이유 -> 다른 moblie client(Android, IOS _ android, swift)에서 사용하는 native Language에서는 Union 타입을 표현할 수 있는 방법이 없음.
    //그 외 모든 경우, type >>>>> enum
}