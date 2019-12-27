* Media query
    * max-width: 600px
        * 600px 이하 일 때
    * min-width: 600px
        * 600px 이상 일 때        
    * 캐스케이딩으로 소스가 복잡적으로 같은 곳에 적용 될 때에는 나중에 나온것이 우선순위를 갖는다 그러므로 작은 범위를 아래쪽에 작성해야한다
    ~~~
      @media (max-width: 600px){
          body{
              background-color: green;
          }
      }
      @media (max-width: 500px){
          body{
              background-color: red;
          }
      }
  ~~~
    * 모바일에서도 적용하려면 <meta name="viewport" content="width=device-width, initial=scale=1.0"> 추가
    * 크롬 개발자 도구의 show media query 를 사용하면 쉽게 볼 수 있다
     