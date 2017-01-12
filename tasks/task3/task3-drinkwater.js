/**
 * Created by Administrator on 2017/1/2.
 */

$(document).ready(function () {
    $('#loginButton').click(
        function () {
            var user = $('#username').val(),
                pwd = $('#password').val();
            console.log(user);
            /*下面是服务器端口信息，和需要穿进去的信息*/
            $.post("/jns/a/login", {"mobile": user, "pwd": pwd}, function (response) {
                if (response.message === "success") {

                    alert(response.message)
                    /*// location.href = "list.html?full?uids=2315332" + response.uid+"712rE2a";*/
                    console.log(response);
                }
                else {
                    alert(response.message)
                }
            }, "json");
        }
    );
});
//首先定义了一个compar函数
function conpar(value1,value2) {
    if(value1<value2) {
        return -1;
    }
    else if (value1>value2) {
        return 1;
    }else {
        return 0;
    }
}
//在全局作用域中调用它
var result = conpar(5,10)


/*声明一个函数*/
function fun() {
    var n = 1;
    /*这是的内嵌函数*/
    add = function() {
        n += 1
    }
    function fun2(){
        console.log(n);
    }
    return fun2;
}
/*在全局变量中调用*/
var result = fun();
result(); // 1
add();
result(); // 2
// <section>
// <section>
// <p>我们在使用函数的时候发生了什么？</p>
// </section>
// <section>
// <img src="../img/js-04-What'sclosureandhowtouse/compar-1.png" alt="第一张">
//     <p style="text-align: left;font-size: 40px">
//     当调用此函数时，会创建一个包含arguments，value和value2的活动对象。
// 全局执行环境的变量对象（包含result和compar）在compar（）的执行环境
// 中则处于第二位。
// </p>
// </section>
// <section>
// <img src="../img/js-04-What'sclosureandhowtouse/compar-des.png" alt="描述">
//     </section>
//     <section>
//     <p>从上图中我们可以看到</p>
//     </section>
//     </section>


function creat() {
    var resul = new Array;
    for (var i=0; i<10;i++) {
        result[i]=(function (num) {
            return i;
        })(i)
    }
    return result;
}

alert(creat());