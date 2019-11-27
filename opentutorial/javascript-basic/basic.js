var str='coding';  //new String('coding') 인것처럼 자동으로 객체를 만든다(wrapper 객체)
// wrapper 객체가 문자열 원시데이터 타입을 객체로 감싸고 있는다
console.log(str.length); //. : object access operator, . 앞은 객체 , 즉 str은 객체 문자열은 객체이다
console.log(str.charAt(0));

var str2='coding2';
str2.prop='test';
console.log(str2.prop); //undefined 만든 객체를 제거하고 다시 원시데이터 타입으로 돌아간다
