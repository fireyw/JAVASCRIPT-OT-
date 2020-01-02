* redux
    * javascript 를 위한 예측가능한 상태 컨테이너
    * 한곳에 app에서 필요한 모든 객체정보를 밀어 넣어 관리한다
    * data 직접 제어 및 조회 불가
        * dispatcher , reducer 통해서만 수정 가능
        * get* 를 통해 조회 가능
    * state가 변경될때마다 각곳에 연락해서 변경하게 해준다. 즉 부품에만 집중하면 된다.
    * 특징 
        1. undo, redo가 쉽다.
        2. 데이터를 수정시 원본을 복제한 것을 수정해서 각자에 독립적이다       
        3. 이전의 상태도 상세히 볼 수 있다.
        4. 핫 모듈 리로딩도 가능(app가 변경해도 데이터는 그대로 남아 있을 수 있다)
        5. 단 하나의 store를 가지고 있다.

* store
    * ![store map](./images/store.jpg)      
    
* 장점
    1. 중앙 집중적인 데이터 store 를 통해 app를 쉽게 개발 할 수 있다.
    
* reducer
    1. dispatcher 를 통해 action 값이 들어오면 기존 state와 비교해서 새로운 state를 만드는 것이 역할  
     (ex)dispatcher: 은행 창구, reducer: 장부에 기록하는사람, state: 장부   
    2. return 시 기존 state를 리턴하는게 아니라 state를 복제한 newState에 변경된 값을 덮어 써 리턴한다
    3. return 값은 불변해야한다, 원본을 건드리면 안됨(시간여행을 할 수 없다)
* dispatch
    1. type은 필수며  reducer로  변경하고자 하는 action을 전달 
* subscribe
    1. state 가 변경 될때마다 호출 되는 부분  
    ex) store.subscribe(red); //state 변경 시 red 함수 호출                    
* 객체 복사(Object.assign)
    * Object.assign({}, {name:'egoing'}, {city:'seoul'})
        1. 반드시 첫번째 인자는 비여있는 값이 들어가야 한다
        2. name을 복사한 객체를 만든 후 그 객체에 city를 다시 복제한다.             

* debuging              
    * redux dev tools 을 사용하여 시간여행을 함
        1. 각 단계별로 state의 변화값을 알 수 있고 이전 단계로 돌아갈 수 있다.
        