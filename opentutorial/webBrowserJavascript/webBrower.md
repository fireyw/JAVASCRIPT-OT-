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

    ![OBJECT](image/Object_window.png)
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
        

* Jquery 객체
    1. jQuery 함수의 리턴값으로 jQuery 함수를 이용해서 선택한 엘리먼트들에 대해서 처리할 작업을 프로퍼티
    2. let li =$('li); //$는 Jquery 함수를 나타낸다
        1. element 객체를 리턴한다
        2. li.css('color', 'red');//암시적으로 li를 반복문을 돌려서 실행한다 
        3. li.css('color'); //뒤에 값이 없으면 현재 색상을 가져온다 rgb(255, 0, 0) 
           단 li 태그가 많으면 첫번째 값을 가지고 옴

* 엘리먼트 정보
    * 유사배열이여서 배열과 같은 방법으로 값을 가져 올 수 있다
    * Jquery 함수를 사용하려면 Jquery 객체를 리턴해야한다 $() 감싸야 함
    ~~~
    let li=$('li');
    //li[0],li[1]
    for(let i =0; i<li.length; i++){
        console.log(li[i].constructor) 
       //ƒ HTMLLIElement() { [native code] }
       //Jquery 객체가 아니라 DOM 객체이다 
       //li[i].css('color', 'red'); //불가능       
       //$(li[i]).constructor.css('color','blue'); //Jquery 로 둘러 쌓여 가능
    }  

* Jquery Element Map    
  ~~~
  let li=$('li');
  li.map(function(index, elem){
      console.log(index, elem);  //li 수만큼 0 <li style=​"color:​ green;​">​html​</li>​
      $(elem).css('color', 'green'); //dom객체를 Jquery 객체로 감싸줌
  })
  ~~~

* Jquery 객체의 API
    * [Jquery API](https://api.jquery.com)
        
* Element 객체
    * let t = document.getElementById('active');  //HTMLELEMENT 리턴
    * ELEMENT
        1. HTMLELEMENT의 부모
        2. DOM은 HTML만을 위한 것이 아니라 마크업 언어를 위한 것으로 SVG, HTML, XML 기타 등등 마크업 언어에서 사용
    * HTMLELEMENT
        1. Style 속성이 있음 
    * ![element1](./image/element1.png)
    * li부터 OBJECT까지 상속관계를 나타냄
    * ![element2](./image/element2.png); 
    * 특징
        * 식별자: 문서내에서 특정한 엘리먼트를 식별하기 위한 용도로 사용되는 API
            1.Element.classList
            2.Element.className
            3.Element.id
            4.Element.tagName
        * 조회: 엘리먼트의 하위 엘리먼트를 조회하는 API
            1. Element.getElementsByClassName
            2. Element.getElementsByTagName
            3. Element.querySelector
            4. Element.querySelectorAll
        * 속성: 엘리먼트의 속성을 알아내고 변경하는 API
            1. Element.getAttribute(name)
            2. Element.setAttribute(name, value)
            3. Element.hasAttribute(name);
            4. Element.removeAttribute(name);

* 식별자 API
    * ELEMENT.TAGNAME(읽기전용)
        1. HTMLLIELEMENT<-HTMLELEMENT<-ELEMENT 상속 관계를 통해 ELEMENT.TAGNAME 을 사용할 수 있다
        2. TAGNAME은 변경 할 수 없다
    * ELEMENT.id
        1. ID는 단 한번만 등장할 수 있는 식별자        
        2. getElementById로 요소를 가져온 후 x.id='deactive' 아이디를 변경 할 수 있다
    * Element.className 
        1. 사용하기 까다롭다
        2. class는 자바스크립트의 예약어로 속성 className과 일치하지 않는 경우가 있다
        3. 클래스 변경 시 기존의 내역을 확인해야하고 삭제 시 삭제하지 않을 것들의 class를 변경해야한다.
    * Element.classList
        1. classList는 DOMTOKEN으로 유사배열을 리턴한다
        2. classList.add, classList.remove를 통해 class를 제어할 수 있다                       
    ~~~
  <body>
      <ul>
          <li>html</li>
          <li>css</li>
          <li id="active" class="important current">JavaScript</li>
      </ul>
  <script>
      <!-- ELEMENT.TAGNAME-->
      console.log(document.getElementById("active").tagName)// LI
      <!-- ELEMENT.id-->
      var active=document.getElementById('active');
      console.log(active.id);
      active.id='deactive';
      console.log(deactive.id);
      <!-- ELEMENT.className-->      
      // class 값을 변경할 때는 프로퍼티의 이름으로 className을 사용한다.
      active.className = "important current";
      console.log(active.className);
      // 클래스를 추가할 때는 아래와 같이 문자열의 더한다.
      active.className += " readed"
      <!-- ELEMENT.classList-->
      console.log(active.classList);
      //DOMTokenList(2) ["important", "current", value: "important current"]
      for(let i=0; i<active.classList.length;i++){ //DOMToken 유사배열
          console.log(active.classList[i])
      }    
  </script>
  ~~~                
* 조회 API
    ~~~
     var list = document.getElementsByClassName('marked');
      console.group('document');
      for(var i=0; i<list.length; i++){
          console.log(list[i].textContent);
      }
      console.groupEnd();
       
      console.group('active');
      var active = document.getElementById('active');     
      var list = active.getElementsByClassName('marked');
      for(var i=0; i<list.length; i++){
          console.log(list[i].textContent);
      }
      console.groupEnd();
   ~~~
            
            
* Node 객체         
    * Node 객체는 최상위 조상으로 모든 DOM은 Node를 상속받음
      
     ![node](./image/node.png)
    * 객체의 관계를 정의 하는 API 존재
        * 주의사항
            1. html에서 줄 바꿈도 text 객체이다 (#text)
            2. 줄바꿈을 무시하려면 start.firstElementChild 사용하면됨
    ~~~
    <body id="start">
    <ul>
        <li><a href="./532">html</a></li> 
        <li><a href="./533">css</a></li>
        <li><a href="./534">JavaScript</a>
            <ul>
                <li><a href="./535">JavaScript Core</a></li>
                <li><a href="./536">DOM</a></li>
                <li><a href="./537">BOM</a></li>
            </ul>
        </li>
    </ul>
    <script>
    var s = document.getElementById('start');
    console.log(1, s.firstChild); // #text
    var ul = s.firstChild.nextSibling
    console.log(2, ul); // ul
    console.log(3, ul.nextSibling); // #text
    console.log(4, ul.nextSibling.nextSibling); // script
    console.log(5, ul.childNodes); //text, li, text, li, text, li, text
    console.log(6, ul.childNodes[1]); // li(html)
    console.log(7, ul.parentNode); // body
    start.firstElementChild.style.color="red";
    </script>
  ~~~
  
* 노드 종류 API
    * 각 노드별 노드 타입 key값이나 value로 요소 확인을 할 수 있다
    ~~~
  for(let name in Node){
  	console.log(name);
  };
  key         value
  ELEMENT_NODE 1 
  ATTRIBUTE_NODE 2 
  TEXT_NODE 3 
  CDATA_SECTION_NODE 4 
  ENTITY_REFERENCE_NODE 5 
  ENTITY_NODE 6 
  PROCESSING_INSTRUCTION_NODE 7 
  COMMENT_NODE 8 
  DOCUMENT_NODE 9 
  DOCUMENT_TYPE_NODE 10 
  DOCUMENT_FRAGMENT_NODE 11 
  NOTATION_NODE 12 
  DOCUMENT_POSITION_DISCONNECTED 1 
  DOCUMENT_POSITION_PRECEDING 2 
  DOCUMENT_POSITION_FOLLOWING 4 
  DOCUMENT_POSITION_CONTAINS 8 
  DOCUMENT_POSITION_CONTAINED_BY 16 
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC 32
    ~~~  
  * 실행 예시
    ~~~
    let body=document.getElementById('start')
    
    body.nodeType
    1 //ELEMENT_NODE
    body.firstChild
    #text
    body.firstChild.nodeType
    3 //TEXT_NODE
    document.nodeType
    9 //DOCUMENT_NODE
    body.firstElementChild.nodeType===Node.ELEMENT_NODE //ul
    true
    body.nodeName
    "BODY"
    body.firstElementChild.nodeName
    "UL"    
    ~~~
    
* Node 의 종류 (재귀함수)
    * [repl.it](https://repl.it/@fireyw/jsTest)
    * 함수를 다른 함수의 인자로 전달
    * CALLBACK 함수: 어떤 이벤트가 발생한 후, 수행될 함수를 의미
    ~~~
  <body id="start">
  <ul>
      <li><a href="./532">html</a></li> 
      <li><a href="./533">css</a></li>
      <li><a href="./534">JavaScript</a>
          <ul>
              <li><a href="./535">JavaScript Core</a></li>
              <li><a href="./536">DOM</a></li>
              <li><a href="./537">BOM</a></li>
          </ul>
      </li>
  </ul>
  <script>  
  function traverse(target, callback){
    if(target.nodeType===Node.ELEMENT_NODE){ //element 노드만 출력
      callback(target);
      let c = target.childNodes;
      for(let i=0; i<c.length;i++){
        traverse(c[i], callback);
      }
    }
  }
  traverse(document.getElementById('start'), function(elem){
    console.log('traverse',elem.nodeName);
    if(elem.nodeName==='A') 
      elem.style.color="blue";
  })
  </script>
  </body>
  ~~~
* 코드 작성 유의 사항
    * 코드 어떻게 활용 될 것인가 고민(사용성, 인터페이스 중점(apple))
    
* 노드의 변경
    * 노드를 추가 및 삭제   
        추가할 element를 생성해야 하는데 이것은 document의 기능
        1. 노드 추가
            * appendChild(child)  
              노드의 마지막 자식으로 주어진 엘리먼트 추가
            * insertBefore(newElement, referenceElement)   
              appendChild와 동작방법은 같으나 두번째 인자로 엘리먼트를 전달 했을 때 이것 앞에 엘리먼트가 추가된다.         
        2. 노드 삭제 : removeChild(child)
        3. 노드 교체 : replaceChild(newChild, oldChild)

* Jquery 노드 변경 
    * DOM 제어가 Jquery 의 주 목적 [Jquery API](https://api.jquery.com/)   
     ![](./image/jQueryAPI1.png)
    * before, after : 타겟의 형제로 추가
    * prepend, append: 타겟의 자식으로 추가
    * remove : 선택된 element 제거
    * empty : 선택된 element의 노드를 제거

* 문자열로 노드 제어    
    * innerHtml: 자식의 요소를 가져옴, 수정시 자식만 변경
    * outerHtml: 자신을 포함하고 자식 요소를 가져옴 , 수정시 자기까지 변경
    * innerText: 태그를 제외한 문자열을 가져오고, 값을 변경할때 HTML 코드를 그대로 추가(자식만 변경됨)
    * outerText: 태그를 제외한 문자열을 가져오고, 값을 변경할때 HTML 코드를 그대로 추가(부모까지 변경)
    * insertAdjacentHTML: 좀 더 정교하게 노드 변경
        1. beforebegin(동일) : 해당 태그와 같은 레벨 위쪽
        2. afterbegin(자식)  : 해당 태그와 자식 레벨 중 가장 위쪽
        3. beforend(자식)    : 해당 태그와 자식 라벨 중 가장 아래쪽
        4. afterend(동일)    : 해당 태그와 같은 레벨 아래쪽
              