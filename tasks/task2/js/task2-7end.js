/**
 * Created by Administrator on 2016/12/31.
 */
var lengthpkp = JSON.parse(localStorage.lengthpkp);/*取出杀手和水民的人数*/
var daydata = JSON.parse(localStorage.date);/*取出每天发生的事情*/
var lengthpk = JSON.parse(localStorage.lengthpk);/*取出最终杀手与水民数量*/
var result = document.getElementById("js-result");/*最终谁获得了胜利处id*/
var totalnum = document.getElementById("js-totalnum");/*杀手多少人，水民多少人处id*/
var totalday = document.getElementById("js-totalday");/*每天发生的事情处id*/
/*下面是判断谁胜利*/
function win() {
    if (lengthpk.popnum>lengthpk.killnum) {
        result.innerHTML='<p>水民胜利</p>';
    }else {
        result.innerHTML='<p>杀手胜利</p>';
    }
}

/*写出水民有多少杀手有多少*/
function pnum() {
    totalnum.innerHTML = '<li>杀手'+lengthpkp.killnum+'人<li>水民'+lengthpkp.popnum+'人</li>';
}

/*写出每天发生的事情*/
function tatolDay() {
    for (var i=0;i<daydata.length;i+=2) {
        var day,/*第几天*/
            p2,/*白天内容*/
            p1;/*夜晚内容*/
        daydata[i].id/*这是死的身份*/
        daydata[i].bykill/*这是被杀*/
        day='<h2>第'+(i/2+1)+'天</h2>';
        p1 = '<p>晚上：'+daydata[i].killman+'号被杀手杀死，身份是'+daydata[i].id+'</p>';
        if (!daydata[i+1]) {
            p2='';
        }else {
            p2= '<p>白天：'+daydata[i+1].killman+'号被投票杀死，身份是'+daydata[i+1].id+'</p>';
        }
        var li = document.createElement("li");
        li.innerHTML=day+p1+p2;
        totalday.append(li);
    }
}

function addLoadEvent(func) {
    var oldonload = window.onload;
    /*将window.onload放入变量oldonload中*/
    if (typeof window.onload != "function") {
        window.onload = func;
        /*检测window.onload里是否有函数，如果没有，就让这个变量成为window.onload里的函数*/
    } else {
        window.onload = function () {
            oldonload();
            func();
            /*如果有，就把这个函数加在oldonload数组的最后面*/
        }
    }
}
addLoadEvent(win());
addLoadEvent(pnum());
addLoadEvent(tatolDay());