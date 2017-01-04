/**
 * Created by Administrator on 2016/12/14.
 */
function showpic(witchpic) {
    if (!document.getElementById("placeholder"));/*检测placeholder是否存在*/
    var source = witchpic.getAttribute("href");/*获取具有href的元素的href链接*/
    var placeholder =document.getElementById("placeholder");/*获取下面占位图片的id*/
    placeholder.setAttribute("src", source);/*把该id图片的src属性改为前面获取的href链接*/
    if (document.getElementById("despription")){
        var description = document.getElementById("description");/*获取p节点的id*/
        var text = witchpic.getAttribute("title");/*获取点击元素title的值*/
        description.firstChild.nodeValue=text;/*将description的第一个元素也就是文字，改变为刚刚获取的title值*/
    }
    return true
}/*在同一页面看a标签包含的图片*/

/*function countBodyChildren() {
    var element_body = document.getElementsByTagName("body")[0];/!*获取body元素，因为只有一个body元素，所以返回的数组中他是第一个，[0]*!/
    alert(element_body.nodeType)/!*使用childNodes来取出body的子元素并用length来计算数量*!/
}*/
/*window.onload=showpic()/!*在页面加载时执行此函数*!/*/

/*js编程艺术，第六章代码*/
function changeimg() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if(!document.getElementById("imgchoose")) return false;
    var imgchoose=document.getElementById("imgchoose");/*获取id为imgchoose的ul*/
    var aelemnt = imgchoose.getElementsByTagName("a")/*找出ul中的a标签*/
    for (var i=0; i<aelemnt.length;i++) {/*遍历a标签*/
        aelemnt[i].onclick = function () {/*点击a标签会产生什么效果*/
            return !showpic(this);/*产生showpic函数带来的效果*/
        }
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
addLoadEvent(changeimg);