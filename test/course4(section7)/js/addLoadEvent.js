/**
 * Created by Administrator on 2016/12/16.
 */
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