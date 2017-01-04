/**
 * Created by Administrator on 2016/12/16.
 */
  /* window.onload=function () {
       var para=document.getElementById("special");
        para.style.color="green";
   }*/
  /*表格变色*/
function stripeTables() {
    /*检测浏览器是否支持get方法*/
    if (!document.getElementsByTagName) return false;
    /*获取table元素的数组*/
    var table = document.getElementsByTagName("table");
    /*声明两个变量，odd用来比对加颜色，rows来储存table属性中的tr属性数组*/
    var odd,rows;
    /*遍历table元素*/
    for (var i=0;i<table.length;i++) {
        /*初始化odd元素为false*/
        odd = false;
        /*rows为含有所有tr元素的数组*/
        rows = table[i].getElementsByTagName("tr");
        /*遍历rows，目的是找出所有tr元素*/
        for (var j = 0; j < rows.length; j++) {
            if (odd == true) {
                /*给第一行设定背景颜色*/
                rows[j].style.backgroundColor = "#ffc";
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}
/*鼠标悬停在某个表格，文字加黑加粗*/
function hightLight() {
    if (!document.getElementsByTagName) return false;
    var tr = document.getElementsByTagName("tr");
    for (var i=0; i<tr.length; i++) {
        tr[i].onmouseover= function () {
            this.style.fontWeight="blod";
        }
        tr[i].onmouseout=function () {
            this.style.fontWeight="normal";
        }
    }
}

/*检测元素本身是否有classname并添加*/
function addClass(element,value) {
    if (!element.className) {
        element.className=value;
    }else {
        var newClassName;
        newClassName=element.className;
        newClassName+="";
        newClassName+=value
        element.className=newClassName
    }
}
/*添加windown.onload代码，每使用一次，添加一个*/
function addLoadEvent(func) {
    var oldonload = window.onload;/*将window.onload放入变量oldonload中*/
    if (typeof window.onload !="function") {
        window.onload = func;/*检测window.onload里是否有函数，如果没有，就让这个变量成为window.onload里的函数*/
    }else {
        window.onload=function () {
            oldonload();
            func();/*如果有，就把这个函数加在oldonload数组的最后面*/
        }
    }
}

addLoadEvent(stripeTables);
addLoadEvent(hightLight);
