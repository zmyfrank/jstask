/**
 * Created by Administrator on 2016/12/29.
 */
var elxplan = document.getElementById("g-bd_explan");
var btn = document.getElementById("js-btn_6");
var foot = document.getElementById("js-foot");
var blackpagenum;/*此变量用来决定黑夜解密页面显示什么*/
/*取出存取杀手和水民数量的对象*/
var lengthpk = JSON.parse(localStorage.lengthpk);
function getblackpage() {
    if(sessionStorage.black_page) {
        blackpagenum = JSON.parse(sessionStorage.black_page);
    }else {
        blackpagenum=1;
    }
}

function loadText() {
    killdate = JSON.parse(localStorage.date);
    var text1 =''
    for (var i=0;i<killdate.length;i++) {
        text1 += '<p>'+(parseInt(killdate[i].killman)+1)+'号被'+killdate[i].bykill+'杀死了，真实身份是'+(killdate[i].id)+'</p><br>';
    }
    if (blackpagenum%2!=0) {
        if (lengthpk.killnum==0||lengthpk.popnum==lengthpk.killnum) {
            elxplan.innerHTML='<img class="g-bd-header_icon" src="../images/icon-cry2.png" alt="哭人">'+text1;
            foot.style.display="none";
            btn.innerHTML = "进入结果页";
        }else {
            elxplan.innerHTML='<img class="g-bd-header_icon" src="../images/icon-cry.png" alt="哭人">'+text1;
        }
    }
    else if( blackpagenum% 2 == 0) {
        elxplan.innerHTML='<img class="g-bd-header_icon" src="../images/icon-cry2.png" alt="哭人">'+text1;
        foot.style.display="none";
        if (lengthpk.killnum==0||lengthpk.popnum==lengthpk.killnum){
            btn.innerHTML="进入结果页";
        }else {
            btn.innerHTML="第"+(Math.ceil(blackpagenum/2)+1)+"天";
        }


    }
}

 btn.onclick=function () {
    if (btn.innerHTML=='进入结果页') {
        btn.onclick=location.href="../html/task2-7end.html";
    }else {
        blackpagenum++;
        window.sessionStorage.setItem("black_page",blackpagenum);
        location.href="../html/task2-5_kill.html";
    }
};
/*多个函数页面开始后启动*/
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
addLoadEvent(getblackpage());
addLoadEvent(loadText());
