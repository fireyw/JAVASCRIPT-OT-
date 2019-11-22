function t(){
    aaa='111';
}
t();
console.log(aaa); //error 발생 function안은 지역변수

for(var i=0;i<3;i++){
    var name='222'
}
console.log(name); //222 for문 안은 지역변수 아님