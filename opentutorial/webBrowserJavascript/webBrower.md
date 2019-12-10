## 웹 브라우져와 자바스크립트
* 강의 URL : https://opentutorials.org/course/1375

* 오리엔테이션
    * 자바스크립트는 HTML과 CSS로 만든 페이지를 동적으로 변경하는데 사용
    * 최근은 DOM을 직접제어 하지 않고 jQuery나 다른것을 사용한다.
    * JS 여러 곳에서 사용
        1. web
        2. node.js
        3. gas
        4. 기타환경에서 
    * 웹 브라우져는 JS로 어떻게 제어하는지 알아볼 예정
    * 공부는 신속하게 개발은 느리게
* 자바스크립트 코드 작성 방식
    * inline 방식
        * 태그에 직접 자바스크립트를 기술 하는 방식
        * 정보와 제어가 섞여있어 정보로써 가치고 떨어진다. 
        ~~~
        정보 제어(onclick) 섞여있음
        <input type="button" onclick="alert('hello world')" value="hello world"/>
        ~~~
      
    * script 방식
        ~~~
        <script> //html 문법 자바스크립트가 이제 나온다
            var hw = document.getElementById('hw');  //자바스크립트 문법시작
            hw.addEventListener('click', function () {
                    alert('hello world1');
                }
            )
        </script>
        ~~~

* 외부 파일로의 분류
    * 특별한 사항이 없으면 body 태그 밑에 넣는걸 추천
    * ~~~
      <script src="./load.js"></script> //정상 처리 load.js가 태그 끝에 삽입되는 형태
      <script src="./load.js"/> //이렇게 하면안됨
      ~~~ 
    *
    * head 태그 밑에 script를 넣는 경우 window.onload=function(){} 를 해줘야한다
        * window.onload 
            * 브라우저는 소스, 이미지 등을 전부 불러온 이후에 window.onload 함수를 실행한다
        ~~~
        window.onload = function () { 
            var hw = document.getElementById('hw');
            hw.addEventListener('click', function () {
                    alert('hello world111');
                }
            )
        }
        ~~~
* 객체
    * 객체를 통해 브라우저를 제어 할 수 있다.
    * 객체는 웹브라우저가 제공하며 우리는 자바스크립트를 통해 제어함
    * getElementsByTagName : 태그를 찾아 배열을 리턴함        
    ~~~
    var test=document.getElementsByTagName('img');
    test[0].style.width='100px'; //객체가 가르키는 태그에 style을 변경시킴                                
    ~~~       
    * window 함수 실행
        ~~~
        window.alert('hello'); //window 객체를 통해 실행      
        ~~~
          
    * window 객체(0~3번 모두 window)
        * 모든 브라우저로부터 지원받으면 브라우저의 윈도우를 말함 즉 브라우저 전체를 담당         
        0. prooperty
        1. DOM(document)
        2. BOM(navigator, screen, location, frames)
        3. javascript core(Object, Array, Function, Date)
          
* BOM
    * 브라우저가 제공해주는 객체들          
    * 자바스크립트를 통해 제어          
    
* window
    * 전역 객체는 window 객체의 property를 만드는 것과 같다
    ~~~
    a=1;
    a;//1
    window.a//1
  
    b={id:1};
    b.id;//1 
    window.b.id//1
  
    alert('hello');
    window.alert('hello');              
    ~~~
* 사용자와 커뮤니케이션 하기
    * alert
    * confirm : 확인 취소 여부로 판단 confirm('ok')        
    * prompt : 사용자가 입력한 값을 알아냄  prompt('id')
    ~~~
    function funcConfirm(){
        if(prompt('id')==='fireyw'){
            console.log('fireyw')
        }else{
            console.log('differ')
        }
    }
    ~~~              
          
          