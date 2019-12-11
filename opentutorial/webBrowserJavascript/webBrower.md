## 웹 브라우저와 자바스크립트
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
        * 전역객체         
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
* location 객체: 문서(브라우저)의 주소정보 알아내기
    * location.href, location.toString()
    ~~~
    location.href: "https://www.youtube.com/watch?time_continue=1&v=EBhtT9TGtqY&feature=emb_logo#hash"    
    location.protocol: https:
    location.host: www.youtube.com
    location.port: 80
    location.pathname: /watch
    location.search: ?time_continue=1&v=EBhtT9TGtqY&feature=emb_logo
    ~~~  

    * url 변경하기
    * location.href = "https://www.naver.com"
    * 화면 새로고침
        * location.reload      

* Navagator 객체 : 브라우저 정보를 제공   
    * 웹표준
        1. netscape와 IE 전쟁 사이에서 개발자 불편함을 제거하고자 만들어짐
        2. 크로스 브라우징이라는 이슈가 생김
    * console.dir 
        1. 객체의 속성을 보여준다. 객체의 경우 log보다 보기 더 편함
        2. 아래 명령을 통해서 이 객체의 모든 프로퍼티를 열람
    
    * User-Agent: 웹 브라우저가 웹서버에 전달하는 정보
    * 구형 브라우저에 사용하고자 하는 API가 없는 경우 아래와 같이 사용할 수 있다
    ~~~
    if (!Object.keys) {  //es5에 새로 등장한 것으로 구형브라우저에 없을 수 있다.
      Object.keys = (function () {
        'use strict';
    ~~~

* 창 제어  
    * window.open : 새로운 창이 열림
    * window.open('', '_self') : 현재 창에 열림
    * window.open('', '_blank') : 새로운 창이 열림
* 창 상호작용
    ~~~
  <!DOCTYPE html>
  <html>
  <body>
  <input type="button" value="open" onclick="winopen();" />
  <input type="text" onkeypress="winmessage(this.value)" />
  <input type="button" value="close" onclick="winclose()" />
  <script>
      function winopen(){
          win = window.open('demo2.html', 'ot', 'width=300px, height=500px'); //새로운 창의 윈도우 객체가 리턴된다
      }
      function winmessage(msg){
          console.log('winmessage', msg)
          win.document.getElementById('message').innerText=msg; //크롬에서는 cross browser policy 정책으로 실행 X
      }
      function winclose(){
          win.close();
      }
  </script>
  </body>
  </html>
  ~~~    
* 보안 
    * 도메인이 같아야 상호작용 할 수 있다.  
    * 팝업
        * 버튼클릭과 같은 사용자 행위를 통한 경우에는 팝업차단이 안걸리지만 화면 로딩과 동시에 팝업을 띄우는경우 브라우져 차단에 걸린다