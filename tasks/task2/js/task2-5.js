/**
 * Created by Administrator on 2016/12/26.
 */
/**
 * Created by Administrator on 2016/12/25.
 */
/*获取前面存入身份的数组*/
var Id_arrN=JSON.parse(localStorage.idm);
var ID_length = Id_arrN.length;
/*获取杀手人数和水民人数，用于判断游戏结果*/
var lengthpk = JSON.parse(localStorage.lengthpk)
/*获取上一天的各种信息*/
var box=document.getElementById("boxwrap");/*获取box的大包裹层*/
var btn=document.getElementById("js-btn_4");/*下方点击按钮*/
var title=document.getElementById("js-title");/*获取标题*/
var day = {};/*新建一个对象，day.killman保存每天被杀人的号数，day.id保存是被杀手杀死还是投票投死，*/
var text ="";
var box_item = document.getElementsByClassName("u-idbox-item_id");/*包裹容器*/
/*取出存入缓存的判断杀手杀人的数*/
/*注意这里kill_page才是sessionstorage里的东西*/
var killpagenum;
function getkillpage() {
    if(sessionStorage.kill_page) {
        killpagenum = JSON.parse(sessionStorage.kill_page);
    }else {
        killpagenum=1;
    }
}
//day.whokill=killpagenum;/*whokill用于后面判断是杀手杀死还是水民投死*/

/*这是为html里面添加元素的方法*/
function inner() {
    for(var i=0;i<ID_length;i++){
        text+='<div class="u-idbox-item"><div class="u-idbox-item_id"><p>'+Id_arrN[i]+'</p></div><div class="u-dibox-item_num">'+(i+1)+'号</div></div>';
        box.innerHTML=text;
    }

    if ((killpagenum%2)!==0){
        btn.innerHTML="确定";
        title.innerHTML="杀手杀人"
    }else {
        btn.innerHTML="投死";
        title.innerHTML="投票"
    }
}

/*接下来这个函数是给死了的人写一个样式,死了就变成黑色*/
var killdate=[];
var deadman=[];
function getDeadMan() {
    if (localStorage.date) {
        killdate = JSON.parse(localStorage.date);
        for (var j = 0; j < killdate.length; j++) {
            deadman = killdate[j].killman;
            if (deadman.length){
                for (var i = 0; i < deadman.length; i++) {
                    (function (i) {
                        var deadmannum = box_item[deadman[i]];
                        deadmannum.style.backgroundColor = "black";/*变黑*/
                    })(i)
                }
            }else {
                box_item[deadman].style.backgroundColor="black";
            }

        }
    } else {
        return false;
    }
}


/*这个函数是用于点击人和选择这个人*/
function sbs() {
    var aaa;/*随便写了个变量，如果你点击两次，那么会还原你上一个点击的样式*/
    for (var i = 0; i < box_item.length; i++) {
        /*这是杀手杀人页面的样式，因为杀手不能点，所以单独写*/
        if ((killpagenum%2)!=0){
            (function(i){
                box_item[i].onclick = function () {
                    if (box_item[i].getElementsByTagName("p")[0].innerHTML=="杀手") {
                        console.log(i);
                        alert("别开枪！自己人！");
                    }
                    /*死人不能选择*/
                    else if(box_item[i].style.backgroundColor=="black") {
                        alert("此人已被杀");
                    }
                    else {
                        if (aaa) {
                            aaa.style.backgroundColor = "#f5c97b";
                        }
                        console.log(i);
                        this.style.backgroundColor = "red";
                        day.bykill="杀手"
                        day.id=this.getElementsByTagName("p")[0].innerHTML;/*获取到被杀死人的身份*/
                        day.killman=i;
                        aaa=this;
                    }
                }
            })(i);
        }
        /*接下来是投票页面的样式*/
        else {
            (function (i) {
                box_item[i].onclick = function () {
                    /*死人不能选择*/
                    if (box_item[i].style.backgroundColor == "black") {
                        alert("此人已被杀");
                    } else {
                        if (aaa) {
                            aaa.style.backgroundColor = "#f5c97b";
                        }
                        console.log(i);
                        this.style.backgroundColor = "red";
                        day.bykill="投票"
                        day.id=this.getElementsByTagName("p")[0].innerHTML;/*获取到被杀死人的身份*/
                        day.killman = i;/*获取到被杀死人的号数*/
                        aaa = this;
                    }
                }
            })(i)
        }
    }
}
var k=1;/*这个用作初始值传递这个页面的奇偶数*/
/*存入本地储存*/
btn.onclick = function () {
    if (day.killman!=null) {
        /*这回合死的是什么人的判定，并且减少其人数，传到下一页，取出来判定胜负*/
        if (day.id==="杀手"){
            lengthpk.killnum--
        }
        else if(day.id=="水民") {
            lengthpk.popnum--
        }
        localStorage.lengthpk=JSON.stringify(lengthpk);/**/
        /*killpagenum的设置，用于判定杀人页还是投票页*/
        killpagenum++;
        sessionStorage.setItem("kill_page",killpagenum);/*killpage用于储存奇偶页以及用于判断是杀手杀死还是投票投死*/
        killdate.push(day);
        localStorage.date=JSON.stringify(killdate);
        location.href='../html/task2-6_black.html'
    }else {
        alert("回去杀人啊亲！")
    }
};


/*下面是存放多个window.onload的函数*/
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
addLoadEvent(getkillpage());
addLoadEvent(inner());
addLoadEvent(sbs());
addLoadEvent(getDeadMan());




