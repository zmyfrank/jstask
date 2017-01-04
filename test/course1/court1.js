/**
 * Created by Administrator on 2016/12/14.
 */
function showpic(witchpic) {
    var source = witchpic.getAttribute("href");/*获取具有href的元素的href链接*/
    var placeholder =document.getElementById("placeholder");/*获取下面占位图片的id*/
    placeholder.setAttribute("src", source);/*把该id图片的src属性改为前面获取的href链接*/
    var description = document.getElementById("description");/*获取p节点的id*/
    var text = witchpic.getAttribute("title");/*获取点击元素title的值*/
    description.firstChild.nodeValue=text;/*将description的第一个元素也就是文字，改变为刚刚获取的title值*/
}/*在同一页面看a标签包含的图片*/

/*function countBodyChildren() {
    var element_body = document.getElementsByTagName("body")[0];/!*获取body元素，因为只有一个body元素，所以返回的数组中他是第一个，[0]*!/
    alert(element_body.nodeType)/!*使用childNodes来取出body的子元素并用length来计算数量*!/
}*/
window.onload=showpic()/*在页面加载时执行此函数*/
