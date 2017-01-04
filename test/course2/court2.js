/**
 * Created by Administrator on 2016/12/15.
 */
/*window.onload = (function () {
    if (!document.getElementsByTagName) return false;
    var lnks = document.getElementsByTagName("a");
    for (var i = 0; i<lnks.length;i++) {
        if (lnks[i].getAttribute("class") == "baidu") {
            lnks[i].onclick = function () {
                pop(this.getAttribute("href"));
                return false;
            }
        }
    }
})()
function pop(winurl) {
    window.open(winurl,"提示信息","width=320,height:480");
}*/
function opp(winurl){
    window.open(winurl,"新页面","width=320px,height=480px");/*写一个打开窗口的函数*/
}
window.onload=function () {/*在窗口加载之后打开*/
    if (!document.getElementsByTagName) return false;/*兼容性设置，如果不支持此属性，直接返回*/
    var links = document.getElementsByTagName("a");/*查找整个文件中的a标签*/
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") == "baidu")/*遍历a元素，查找i元素中带有baidu字符的class*/
        {
            links[i].onclick = function () {/*为带有baidu的class的a标签写一个鼠标点击事件*/
                opp(this.getAttribute("href"));
                return false;
            }
        }
    }
}
