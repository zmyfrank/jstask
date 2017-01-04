/**
 * Created by Administrator on 2016/12/15.
 */
/*
window.onload=function () {
    var pr = document.createElement("p");
    var info ="nodeName: ";
    info+= pr.nodeName ;
    info+="nodeType: ";
    info+=pr.nodeType;
    alert(info);
}*/

/*window.onload=function () {
    var pr=document.createElement("p");
    var testdiv=document.getElementById("testdiv");
    testdiv.appendChild(pr);
    var text=document.createTextNode("Hello World");
    pr.appendChild(text);
}*/
/*加入一个更复杂的节点*/
window.onload=function () {
    var pr = document.createElement("p");
    var emr = document.createElement("em");
    var tex1 = document.createTextNode("This is ");
    var tex2 = document.createTextNode("my ")
    var tex3 =document.createTextNode("content.");
    var p = document.getElementsByTagName("p")
    pr.setAttribute("id","textp")
    pr.appendChild(tex1);
    pr.appendChild(emr);
    emr.appendChild(tex2);
    pr.appendChild(tex3);
    insertAfter(pr,p[0])
}
/*添加元素到一个元素后面*/
function insertAfter(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild==targetElement) {
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}