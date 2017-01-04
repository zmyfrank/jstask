/**
 * Created by Administrator on 2016/12/14.
 */
/*
var mood=true;/!*,age=24,MyName="Frank";*!/
alert(mood);
// alert(age);
// alert(MyName);*/
/*
var she = Array();
she[0]="Silina";
she[1]="Hebe";
she[2]="Ella";*/
/*
var she =["silina", "Hebe", "Ella"]
alert(she[0]);*/
/*var frank={name:"Frank", year:1992, living:true};
var she=Array();
she[0]=frank;
var message ="My name is ";
var year = 2016;
message+=year;
alert(message);*/

/*
// if 和 else句式
if (1>2) {
    alert("The world has gone mad!")
}
else {
    alert("All is well with the world")
}
*/

/*
// 等于比较操作符==，不等于！=
var myMood = "happy";
var yourMood = "sad";
if (myMood==yourMood) {
    alert("we both fell the same");
}*/

/*
// 逻辑门
var num=6;
if(num>=5&&num<=10) {
    alert("over range")
}
if(num>10||num<5) {
    alert("out of range")
}
if(!(1>2)) {
    alert("you are a sb")
}
*/

/*
// while
var count =1;
while (count<5) {
    alert(count);
    count++;
}*/

/*
// do while 循环
var count = 5;
do {
    alert (count);
    count++;
}while (count<5);
*/

/*
// for循环
for(var count=1; count<5; count++){
    alert(count);
}
*/


/*
// 利用for循环来遍历整个数组里的元素
var she=Array("Frank", "selina", "Hebe", "Ella");
for (count=0; count<she.length; count++){
    alert(she[count])
}
*/

/*// 使用函数来输出参数
function chengfa(num1,num2) {
    var total=num1*num2;
    alert(total);
}
chengfa(10,30)*/

/*
// 全局变量和局部变量
function square(num) {
    total = num * num;// 全局变量
    return total;
}
var total = 50 + square(20);/!*局部变量*!/
alert(total);*/
/*alert(typeof document.getElementById("purchases"));*/
// alert(document.getElementsByTagName("li").length)
/*
for (var i=0; i<document.getElementsByTagName("li").length;i++) {
    alert(typeof document.getElementsByTagName("li")[i]);
}*/

/*
var items = document.getElementsByTagName("li");
for (var i=0;i<items.length;i++) {
    alert(typeof items[i]);
}*/

/*
alert(document.getElementsByTagName("*").length)*/
/*
var shopping =document.getElementById("purchases");
var items = shopping.getElementsByTagName("*");
for (var i=0; i<items.length;i++) {
    alert(typeof items[i]);
}*/

/*
var shopping = document.getElementById("purchases");
var items = shopping.getElementsByClassName("sale");
alert(items.length);*/

/*
var paras = document.getElementsByTagName("p");
for(var i = 0; i<paras.length ; i++) {
    var text_tittle=paras[i].getAttribute("title");
    if(text_tittle) alert(text_tittle)
}*/

// var shopping = document.getElementById("purchases");
// alert(shopping.getAttribute("title"));
// shopping.setAttribute("title","a list of goods");
// alert(shopping.getAttribute("title"));

var a = new Map([['frank',80],['long',90],['chai',100]]);
alert(a.get('frank'))
