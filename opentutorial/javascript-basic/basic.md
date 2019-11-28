## 13. 유효범위
* 함수: 자바스크립트에서 제일 중요한 내용

* 유효범위(SCOPE): 변수의 수명

* 전역변수와 지역변수
    * 지역변수는 우선적으로 범위내의 변수가 있는지 확인하고 없으면 전역변수를 확인
    ~~~
    var vscope= 'global';  //전역변수
    
    function fscope(){
        var vscope='local'; //지역변수
        console.log(vscope);  //먼저 가장 가까운곳에서 vscopde를 찾고 없으면 멀리본다
    }
    
    fscope();
    console.log(vscope);  //local, global 출력
    ~~~

* 유효범위의 효용성    
    * 함수 블럭 내에 var 이 써있지 않으면 전역변수로 인식됨
    * for(var i =0;i<5;i++) 여기서 var i 는 전역변수를 선언하는 것과 같다 
    ~~~
    function a(){
         var i=0; //여기서 i=0 으로 var 없으면 전역변수를 의마하게 된다 즉 var 이 있어야 지역변수
    }
    for(var i =0; i<5; i++) { //i 는 전역변수
        a();
        console.log(i);
    }
    console.log("last: "+ i); //5가 출력됨
    ~~~    

* 전역변수의 사용
    * 전역변수가 부담스러울 경우 익명함수를 사용하면 된다
    ~~~
  (function (){
      var MYAPP ={}  //함수의 지역변수가 됨
      MYAPP.calculator = { //.은 속성 의미
          'left': null,
          'right': null
      }
      MYAPP.coordinate = {
          'left': null,
          'right': null
      }
  
      MYAPP.calculator.left=10
      MYAPP.calculator.right=20
      function sum(){
          return MYAPP.calculator.left + MYAPP.calculator.right;
      }
  
      console.log(sum());
  }());
  ~~~
* 유효범위의 대상(함수)    
    ~~~
    자바의 경우 error
    for(int i=0;i<5;i++){
        String name="yw";
    }
    System.out.println(name); //error 발생 
     
    자바스크립트의 경우 
    for(var i=0;i<3;i++){
        var name='222'
    }
    console.log(name); //222 찍힘 이유는 for,if문 안에 변수는 지역변수가 아니다
    ~~~
    * 즉 자바스크립트는 함수 안에서의 지역변수만 진짜 지역변수가 되는 것이고  
     if, for문의 안의 변수는 지역변수가 아니다
     ~~~
      function t(){
          var aaa='111';
      }
      t();
      console.log(aaa); //error 발생 function안은 지역변수
  
      for(var i=0;i<3;i++){
          var name='222'
      }
      console.log(name); //222 for문 안은 지역변수 아님
     ~~~
     
* 정적 유효범위
    * 자바스크립트는 함수가 선언된 시점에서 유효범위를 갖는다.
    * 함수가 사용될때가 아니라 함수가  정의될 때의 변수를 찾는다
    ~~~
  var i=5;
  
  function a(){
      var i=10;
      b();
  }
  
  function b(){
      console.log(i)  //1. 먼저 b라는 함수에 i 라는 변수가 있는지 찾는다 2. 전역변수에서 i 를 찾는다
                      //즉 호출됬을때 변수를 찾는것이 아니라 함수가 선언된 시점의 변수룰 찾는다                      
  };
  
  a();  //5 출력
    ~~~     
  
## 14. 값으로서의 함수 콜백
* 값으로서의 함수
    * 객체는 중괄호로 시작해서 중괄호로 끝난다
    * 함수는 객체의 값으로도 들어 갈 수 있다. 이럴 경우 메소드라고 부름
  ~~~
  var a= function(){
  
  };
  var c={
      b:function(){} //값을 저장하는 그릇 , 키, 속성(property)의 역할
                     //이렇게 객체의 속성 값으로 담겨진 함수를 메소드라고 함
  }
  ~~~
    * 함수는 값이기 때문에 다른 함수의 인자로 전달 할 수 있다
    ~~~
  function cal(func, num){
      return func(num)
  }
  
  function increase(num){
      return num+1;
  }
  
  function decrease(num){
      return num-1;
  }
  
  console.log(cal(increase,1)) //2 함수를 인자로 전달
  console.log(cal(decrease,1)) //0 함수를 인자로 전달
  ~~~
    * 함수는 리턴 값으로도 사용
    ~~~
  function cal(mode){
      var funcs = {
          'plus' : function(left, right) { return left+right},
          'minus': function(left, right) { return left-right}
      }
      return funcs[mode]; //return 값으로도 사용
  }
  console.log(cal('plus')(2,1));  //() 괄호가 나온다는 것은 함수가 호출된다는 의미이다.
  ~~~
  * 함수는 배열의 값으로도 사용
  ~~~
  var process = [  //배열에 저장
      function(input){ return input+10;},
      function(input){ return input * input;},
      function(input){ return input/2;}
  ]
  
  var input=1;
  for(var i=0;i<process.length;i++){
      input=(process[i](input));
      console.log(input)  //11, 121, 60.5
  }
  ~~~
    *  값으로서의 함수
    
        * 변수, 매게변수,리턴값, 배열에 사용 가능 (first-class citizen(다양한용도사용))
 
* 콜백
  * 어떻한 함수가 . 앞에 있다면 . 앞은 객체이다  
     (ex numbers.sort(): numbers 객체, sort는 객체에 속해 있어 메소드라고 부름, 기본적으로 가지고 있는 것으로 내장객체라고함)
    ~~~
    var numbers=[20,10,9,8,7,6,5,4,3,2,1];
    
    var sortFunc = function(a,b){
        console.log(a,b)
        return a-b
    }
    console.log(numbers.sort(sortFunc));  
    //sort 매게변수로 compareFunction 콜백 함수가 옴
    //이렇게 사용할 수 있는건 함수도 값이기 때문이다

    ~~~     
* 비동기 처리
    * 요청한 작업이 끝날때 까지 기다리는 것이 아니라 여러개의 task를 동시에 진행함
    * 요청한 내용 처리 후 콜백함수를 인자로 받아 후처리를 함          
    
## 15. 클로저
* 보통 함수안에서만 사용하는 것을 함수내에 실행해서 밖에서 사용할 수 없게 할때 많이 쓴다
* 내부함수는 외부의 지역변수에 접근할 수 있다
* 내부함수에서 사용하려는 지역변수가 없으면 외부함수에서 찾는다     
* 즉 내부함수에서 외부함수의 변수가 접근 할 수 있다(클로저의 정의)
~~~
function outter(){
    var title='outer';
    function inner(){
        console.log(title) //outer 출력
    }
    inner();
}

outter();
~~~

* 외부함수가 더 이상 사용되지 않아도 내부함수는 외부함수에 접근할 수 있다
~~~
function outter(){
    var title='coding everyday';
    return function(){
        console.log(title)
    }
}
inner = outter();
inner(); //외부함수를 사용하지 않아도 외부함수 변수에 접근가능
~~~

* 클로저를 이용해서 private 변수를 만들 수 있다
~~~
function factory_movie(title){  //private: title은 내부함수를 통해서만 접근 할 수 있다.

    return{               //중괄호는 객체를 의미 객체를 리턴한다
        get_title: function(){  //객체안에 있는 함수는 메소드라고 부른다
            return title;       //factory_movie에 대한 내부함수라고 생각하면됨
                                //즉 외부함수의 지역변수에 접근할 수 있다
        },
        set_title: function(_title){
            console.log('type : ' + typeof _title)
            if(typeof _title === 'string') {
                title = _title;      //외부함수의 값도 변경 가능하다
            }else{
                console.log('제목은 문자열 이어야만 합니다')
            }
        }
    }
}

ghost = factory_movie('Ghost in the shell');  //메소드가 서로 다르다
matrix = factory_movie('Matrix');             //메소드가 서로 다르다
console.log(ghost.get_title());     //Ghost in the shell
console.log(matrix.get_title());    //Matrix

ghost.set_title('공각기동대');   //ghost에만 영향을 미친다

console.log(ghost.get_title());     //공각기동대
console.log(matrix.get_title());    //Matrix
~~~

* 자주 실수하는 클로저의 표현
~~~
* 잘못 사용 하는예
var arr = []
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i; //i가 전역변수이다
    }
}
for(var index in arr) {
    console.log(arr[index]());
}

* 수정
var arr = []
for(var i =0;i<5;i++){
    arr[i] = function(id) {
                return function () {
                    return id;  //여기서 i의 값은 외부변수의 값이 아니다 외부함수가 필요함
                                //id를 통해 외부함수의 지역변수에 접근
                }
            }(i); //매게변수의 인자값
}

for(var index in arr){
    //console.log(index)
    console.log(arr[index]());
}
~~~

## 16 함수지향-arguments
* arguments는 함수안에서 여러 정보를 담고 있는 배열 객체
* arguments: 자바스크립트와 우리와 약속되어있는 배열 , 사용자가 전달한 인자가 들어있다
* arguments.length: 함수로 전달된 인자의 수 
~~~
function sum(){
    var i , _sum =0;
    for(i=0;i<arguments.length;i++){ 
        _sum+=arguments[i]; ////sum으로 들어온 인자의 값을 사용할 수 있다
    }
    return _sum;
}
console.log(sum(1,2,3,4)); //* 자바스크립트는 매게변수에 유연해서 개수가 달라도됨

~~~
* 인자: 함수 호출 시 전달되는 값 ex(call fun(a,b,c))
* 매게변수: 함수 몸체부분에 전달되는 값 function(a,b)

## 17 함수의 호출

* sum.apply ( .이후에 나오는 것은 '메소드:객체의 속성이 함수임' 를 뜻함)
* 자바스크렙트에 내장된 함수가 있다.
* apply 함수
  * fun.apply([thisObj[,argArray]])  
     *  fun 가져다쓸 메소드
     *  thisObj (선택 사항입니다) : 현재 객체로 사용될 객체
     *  argArray : 함수에 전달될 인수 집합
  ~~~
  ex
    sum.apply(o1); //o1이라는 객체의 속성처럼 인식 o1.sum()
    sum.apply(o2); //o2이라는 객체의 속성처럼 인식 o2.sum()
    ~~~
    ~~~    
    o1 = {val1:1, val2:2, val3:3}
    o2 = {v1:10, v2:50, v3:100, v4:25}
    function sum(){
        var _sum = 0;
        for(name in this){
            _sum += this[name];
        }
        console.log(_sum);
    }
    (sum.apply(o1)) // 6  o1.sum()
    (sum.apply(o2)) // 185 o2.sum() 
    ~~~
* call 함수
    * fun.call([thisObj[, arg[, arg2[, ...]]]])
        * fun 가져다쓸 메소드
        * thisObj (선택 사항입니다) 현재 객체로 사용될 객체
        * arg1, arg2, argN (선택 사항입니다) 메소드에 전달될 인수 목록
    ~~~
    function sum(t1,t2,t3){
      console.log(t1+t2+t3);
    }
    sum.call(this,1,2,3);//sum(1,2,3) 동일
    
    ~~~
* call과 apply 의 차이
    * call 메소드는 인자 하나 하나를, apply는 인자 리스트를 전달합니다.
    
* call, apply 함수의 사용의 이유는 this를 제어하기 위해
    ~~~
    type ="zero";
    var type1 = { type:"one" };
    var type2 = { type:"two" };
     
    function getType() {
        console.log(this.type);
    }
     
    getType();
    getType.call(this);
    getType.call(type1);
    getType.call(type2);
    ~~~
.

* for in 과 for of 차이
    * for …in 반복문
        1. for in 반복문은 객체의 속성들을 반복하여 작업을 수행할 수 있음 모든 객체에서 사용이 가능   
        2. for in 구문은 객체의 key 값에 접근할 수 있지만, value 값에 접근하는 방법은 제공하지 않음
    ~~~       
     ex)
     var obj = {
         a: 1, 
         b: 2, 
         c: 3
     };
     
     for (var prop in obj) {
         console.log(prop, obj[prop]); // a 1, b 2, c 3
     }              
    ~~~      
    * for of 반복문
        1. for of 반복문은 ES6에 추가된 새로운 컬렉션 전용 반복 구문. 
           for of 구문을 사용하기 위해선 컬렉션 객체가 [Symbol.iterator] 속성을 가지고 있어야만 함
        2. key 값이 아니라 값에 접근  
    ~~~
    var iterable = [10, 20, 30];
    
    for (var value of iterable) {
      console.log(value); // 10, 20, 30
    }
    ~~~       
## 18.객체 지향 프로그래밍
* 객체
    * state(상태)와 behave(행위)로 이루어진 객체
    * 프로그래밍적으로 구체적으로 서로 연관되어있는 변수와 메소드들의 모임
* 프로그램 개발 시 처음에는 그냥 개발하지만 시간이 지날수록 로직이 추가되면서 복잡해진다
* 이럴 경우 각 기능들을 그룹핑(변수와 메소드)해서 관리하면 편리하기 때문에 나온 것 중 하나를 객체 지향이라고 한 
* 재활용성할 수 있게 만드는게 객체지향의 목정중 하나



* 설계
    1. 현실을 프로그래밍으로 표현하는것
    2. 사용자의 관심사를 알아야
    3. 추상화: 복잡한 현실을 잘 담아내는
    
* 부품화
    * 예전 컴퓨터는 화면 키보드 하나라고 고장 나면 다 바꿔야했다
    * 이것을 각 기능별로 쪼개서 그룹화 시키는것이다
    * 공통된 기능을 모으는 것도 일종의 부품
    * 모니터 키보드 데스크탑 메모리로 각각 부품화 함
    * 시대에 따라서 부품화는 계속 바뀐다 정답이 없다(ex: mac)    
    * 메소드도 부품화의 한 예     

* 폴더: 객체 , 폴더안의 파일: 변수, 메소드    
* 은닉화 캡슐화
    1. 제대로된 부품이라면 그것이 어떻게 만들었는지는 알 필요 없고 사용 방법만 알면 됨
    2. 내부의 동작방법은 단단한 케이스(객체)에 숨기고 사용자에게 그 사용방법만 노출
    3. 객체가 어떻게 생겼는진 알 필요 없고 어떻게 사용하는지를 알아야    
* 인터페이스
    1. 잘 만들어진 부품이라면 부품과 부품은 서로 교환할 수 있어야 함
    2. 모니터와 데스크탑은 분리해서 다른곳에 사용 할 수 있다
    3. 모니터의 hdmi 케이블을 인터페이스라고 할 수 있다
    
## 19. 객체지향- 생성자와 new
* 자바스크립트
    * prototype-based programming
    * 객체지향과 비슷하면서 함수형 프로그래밍의 특징을 가지고 있다
    * 처음엔 쉽지만 가면 갈수록 어려운 언어
    

* 객체
    1. 서로 연관된 변수와 함수를 그루핑한 그릇    
    2. 객체를 담을 수 있는 비어있는 상자 
    3. 객체내의 변수가 값이면 property(속성), 함수면(메소드)
    
    
* 객체지향 프로그래밍
    1. 좋은 부품의 로직을 만드는    

* 생성자
    1. 자바에서 생성자는 class 내에 속해있지만 자바스크립트는 어디에도 속해있지 않는다 그냥 함수임
    2. new를 붙이면 객체가 리턴된
    
    ~~~
    function person(){
      console.log("person 함수")
    };
    console.log(person); //function person 출력
    
    var p =new person(); 
    console.log(p) ; //person 객체 출력
    ~~~  

* 공통영역 묶는 예제
    ~~~
    function Person(_name){
      this.name=_name;
      this.introduce = function(){  //공통영역
        console.log('My name is ', this.name);
      }
    }
    
    var p1 = new Person('fireyw'); //생성자를 통해 초기화하면서 공통부분을 재사용함
    console.log(p1.introduce());
    
    var p2 =new Person('dlwb');
    console.log(p2.introduce());
    ~~~    
## 20. 전역객체
* 자바스크립의 모든 객체는 전역객체의 property 
* 편의를 위해 window 객체 생략 가능(node에서는 global이 전역객체)
~~~
function func(){
  console.log("func");
}

func();
window.func();  //func는 window의 객체의 메소드 이
~~~           
          
## 21. this    
* this를 어떻게 호출하느냐에 따라서 this가 가리키는 대상이 달라짐(가변적)
* 함수와 객체의 관계가 느슨한 자바스크립트에서 this 는 이 둘을 연결시켜주는 실질적인 연결점
    ~~~
    function func(){
        console.log(this); //브라우저에서 실행하면 window 출력
    }
    func();
    ~~~        
* 메소드와 this
    * 메소드의 this는 메소드가 소속되어있는 객체를 가르킨다
    ~~~
  var o = {
      func : function(){
          console.log(this)
          if(o === this){
              console.log("o=== this")
          }
      }
  }
  o.func(); //메소스가 소속되어있는 객체를 가르킨다
  ~~~
* 생성자와 this
    * THIS는 생성자가 만든 객체를 가리킨다
    ~~~
  var funcThis = null;
  
  function Func(){
      funcThis=this;
  }
  
  var o1 = Func();  //앞에 window. 생략
  console.log(funcThis);  //window 객체 출력
  if(funcThis=== window){
      console.log('window');
  }
  
  var o2= new Func();   //o2 객체 생성
                        //객체를 다 생성 한 후에 o2 변수에 할당이 됨
                        //그러므로 func생성자 안에서 if(o2===window) 는 undefined 나옴
  if(funcThis === o2){
      console.log('o2');
  }
    
  ~~~  
* 객체로서 함수**
    * new Object, new Array 명령어를 안쓰고 {1,2,3} [a,b,c] 이렇게 객체 선언하는 것을 리터럴
    * 리터럴
        1. 어떠한 값을 명칭하는 것이 아니라 변수 및 상수에서 저장되는 '값 자체'
        2. 변수나 상수가 메모리에 할당된 공간이라면 리터럴은 이 공간에 저장되는 값
        3. 리터럴은 메모리 어딘가에 값이 변하지 않도록 저장되지만 이름은 없다
        4. 즉 컴파일시 프로그램 내에 정의되어있는 그대로 정확히 해석되어야함
        5. 데이터를 표현하는 방식
    * 리터럴 표기법
        1. 변수를 선언함과 동시에 값을 지정해주는 표기법
        2. ex)var no=3; var obj={name:'kk'};
        3. 코드가 짧아 자바스크립트 인터프리터의 해석분량도 줄어듬     
    ~~~
    var sum=function (x+y){return x+y;}  //함수 리터럴
                                        //var o = {} 객체 리터럴
                                        //var a = [1,2,3] 배열리터럴
    sum(1,2);
    var sum2 = new Function('x', 'y', 'return x+y;'); //이렇게해도 되지만 불편하다 그래서 나온게 literal
      
* apply 와 this
    * apply를 통해 this 주입
    * 보통은 객체에 메소드가 포함된다 하지만 스크립트에선 메소드가 객체를 선택할 수 있다
    * __this는 변화무쌍하다__
    ~~~
  var o={}
  var p={}
  function func(){
      switch(this){
          case o:
              console.log("o");
              break;
          case p:
              console.log("p");
              break;
          case window:
              console.log("window");
              break;
  
      }
  }
  
  func();  //window
  func.apply(o); //o 메소드가 객체 선택
  func.apply(p); //p
  ~~~
## 22. 상속 
* 상속방법: .prototype에 상속하고자 하는 객체를 new 로 할당시키면 상속된다  
          ex)Programmer.protype = new Person();  
             Designer.protype = new Programmer();                                  
    ~~~
    function Person(name){
        this.name=name;
    }
    
    Person.prototype.name=null;
    
    Person.prototype.introduce=function(){
        return 'My name is '+ this.name;
    }
    
    function Programmer(name){
        this.name=name;
    }
    //프로그래머 객체
    Programmer.prototype=new Person(); //Person 객체 상속
    Programmer.prototype.coding = function(){
        return "hello programmer";
    }
    
    var p1 = new Programmer('egoing');//new를 통해 객체화
    console.log(p1.introduce());
    console.log(p1.coding());
    
    //디자이너객체
    function Designer(name){
        this.name=name;
    }
    
    Designer.prototype=new Programmer(); //프로그래머 상속
    Designer.prototype.design = function(){
        return "hello designer";
    }
    var p2=new Designer("아람");
    
    console.log(p2.introduce());
    console.log(p2.design());
    ~~~    

* prototype(원형) : 이것을 통해 상속
    * 생성자
        1. 기본적으로 함수
        2. new 붙여서 호출할 경우 생성자 함수가 되고 객체를 리턴한다
            * 이렇게 하는 이유는 우리가 원하는 함수나 변수가 객체를 만들었을때 세팅되기를 원해서다
            ~~~
           var o =new Sub();//생성자 함수 호출로 원하는 값 세팅
           var o = {}; //아무값도 세팅 X
    * prototype은 객체의 특수한 속성(property)이며 그 안에 어떤 객체가 들어가 있다.            
        ~~~
        Sub.prototype = new Super();
        var o = new Sub(); //생성자 함수의 prototype에 저장되어있는 객체를 꺼내서 변수에 전달함
    * 상속되는 속성과 메소드들은 각 객체가 아니라 객체의 생성자의 prototype이라는 속성에 정의      
    * prototype Chain: prototype 서로 연결
    ~~~
      
    function Ultra(){
    }
    Ultra.prototype.ultraProp= true;
    
    function Super(){
    }
    Super.prototype = new Ultra(); // ultra 를 상속하겠다
    
    function sub(){
    }
    sub.prototype = new Super();   // Super를 상속하겠다
    
    var o = new sub();             // sub를 상속하겠다
    
    console.log(o.ultraProp);     
    ~~~
  
* prototype chain
    * 생성자가 만든 객체에 직접 넣지말고 변수에 넣어도됨
    * prototype 주의사항
        1. 자식에게 일어나는 일이 의도치않게 부모에게 일어나게하면 안됨        
    ~~~
    function Ultra(){};  
    Ultra.prototype.ultraProp=true;
    
    function Super(){};    
    var t = new Super();    
    t.ultraProp=4;
    
    Super.prototype=t;
    
    function Sub(){};    
    Sub.prototype=new Super(); 
    //Sub.prototype=Super.prototype(이렇게 사용 X, 각 객체의 prototype이 다를 경우 서로 값을 침범)
    
    var s = new Super();    
    s.ultraProp=22; 
    
    Sub.prototype=s;    
    var o = new Sub();    
    console.log(o.ultraProp);   //o객체에 ultraProp 속성이 없으면 생성자의 프로토타입을 확인한다. 
                                //뒤져서 ultraProp속성이 있는지 확인함
## 23. 표준내장객체  (standard built in object)
* 표준내장객체: 자바스크립트가 기본적으로 가지고 있는 객체
    * Object, array, String, Fuction, String, Math, Boolean, Number, Date, RegExp
    * 호스트 환경에서도 내장객체 제공됨
* 사용자 정의객체: 개발자가 만드는 객체    

* 배열
    ~~~
  var arr = ["a", "b", "c", "d"];
  function indexFromArr(arr){
      var t= Math.random();      
      var index= Math.floor(arr.length*t); //Math.floor(크지 않은 정수 리턴)
      return arr[index];
  }  
  console.log('value : ', indexFromArr(arr));      
    ~~~    

    * 프로토타입 예
        * 어떤 종류의 객체에 공통적 기능을 추가할때 많이 사용
        * 모든 Array 객체에 random 값을 가져오는 함수를 만들고 싶다
    ~~~          
    Array.prototype.random=function(){
        var index= Math.floor(this.length*Math.random());  //this는 생성자가 만든 객체를 나타냄
        return this[index];
    }
    var arr2=new Array('1','2','3');
    console.log(arr2.random());
    ~~~

## 24 객체지향: Object (다시 공부 필요)
* Object API 참고 
    * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
* Object: 객체의 가장 기본적인 형태, 아무것도 상속받지 않은 순수한 객체
    * 모든 객체가 Object를 가지고 있어 모든객체의 공통기능을 추가할때 Object.prototype 를 사용하면됨
    ~~~
  //Object.keys
  var arr = ['a','b','cc'];
  console.log(Object.keys(arr))  //object는 생성자 함수고 keys는 메소드
                                 //Object.keys=function(){} 유사
  
  //Object.prototype.toString   -모든 객체들이 Object를 상속받아 사용하는 함수
  var o = new Object();
  console.log(o.toString());
  
  var a= new Array(1,2,3); //Array 객체도 Object 중 하나로 prototype.toString이라는 object의 
                           //메소드를 상속받아 사용한다
  console.log(a.toString())
  ~~~
* Object 확장
    * 공통 함수 생성 예제
    * JAVA의 CONTAIN 함수를 JAVASCRIPT에도 생성
    ~~~
  Object.prototype.contain = function(needle){
      for(var name in this){
          if(this[name] === needle) {            ////this 메소드가 소속된 객체
              return true;
          }
      }
      return false;
  }
  
  var o = {'korea':'seoul', 'japan':'tokyo', 'amer': 'washington'};
  console.log(o.contain('seoul')); //TRUE
  var a = [1,2,3,4,5]
  console.log(a.contain(1));
    ~~~
  
* Object 확장의 위험
    * Object에 객체 추가시 Object를 상속하는 모든 객체에 영향을 미친다
     
    ~~~
  var o = {'korea':'seoul', 'japan':'tokyo', 'ame': 'washington'};
  console.log(o.contain('seoul'));
  var a = [1,2,3,4,5]
  console.log(a.contain(1));
  
  for(var name in o){
      if(o.hasOwnProperty(name)){ //name이 a의 속성인지 확인하는 것
          console.log(name); //korea japan amer contain(Object를 상속해서 Ojbect 만든함수까지 출력)
      }
  } 
    ~~~
  

##25. 원시 데이터 타입과 객체
* 원시 데이터 타입
    1. null, undefined, String, number, boolean
    2. 레퍼객체로는 String, Number, Boolean. null과 undefined는 레퍼 객체가 존재하지 않는다.
    * wrapper 객체
        * 원시데이터 타입을 임시로 객체로 만들고 다시 제거하여 원시데이터로 만든다
        * 객체가 문자열 원시데이터 타입을 객체로 감싸고 있는다
        * __.__ 
            1. object access operator
            2. 앞은 객체 , 즉 str은 객체 문자열은 wrapper 객체이다
    ~~~
    var str='coding';  //new String('coding') 인것처럼 자동으로 객체를 만든다(wrapper 객체)
    
    console.log(str.length);  //wrapper 객체로 만들기 때문에 객체 처럼 사용 할 수 있다.
    console.log(str.charAt(0));
    
    var str2='coding2';
    str2.prop='test';
    console.log(str2.prop); //undefined 만든 객체를 제거하고 다시 원시데이터 타입으로 돌아간다
