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
        