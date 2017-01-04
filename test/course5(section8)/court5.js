/**
 * Created by Administrator on 2016/12/16.
 */
/*获取tittle和文字并且保存进数组*/
function displayAbbreviations() {
    // 获取元素和文本部分
    if (!document.getElementsByTagName) return false;
    if (!document.createElement) return false;
    if (!document.createTextNode);
    var abbreviations = document.getElementsByTagName("abbr");
    if (abbreviations.length<1) return false;
    var defs = new Array();/*为什么这里要用数组来保存呢，还一个下标一个值，我懂了意思是说 defs.text1=title，这样能够方便调用和理解*/
    // 遍历abbr元素
    for (var i=0;i<abbreviations.length;i++) {
        var current_abbr=abbreviations[i];
        if (current_abbr.childNodes.length<1) continue;
        // 查找每个abbr元素里面的title属性
        var definition = abbreviations[i].getAttribute("title");
        // 把每个abbr标签中的文字存在变量key中
        var key = abbreviations[i].lastChild.nodeValue;
        //将新建的数组元素defs用上，把key存为它的下标，把title属性变量存为它的值
        defs[key] = definition;
    }
    // 创建标签并添加文本部分
    // 创建dl标签
    var dlist = document.createElement("dl");
    // 遍历defs数组中的key下标
    for (key in defs) {
        // 没怎么看懂，似乎是重申？
        var definition = defs[key];
        // 创建dt标签
        var dtitle=document.createElement("dt");
        // 创建key里的文字
        var dtitle_text= document.createTextNode(key);
        // 将key里的文字填充到dt标签中
        dtitle.appendChild(dtitle_text);
        // 创建dd标签
        var ddesc = document.createElement("dd");
        // 创建definition的文字
        var ddesc_text = document.createTextNode(definition);
        // 将defin的文字塞入dd标签中
        ddesc.appendChild(ddesc_text);
        // 在dl标签下插入dt标签和dd标签
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.childNodes.length<1) return false;/*如果dl里面没有任何子节点，自动结束*/
    // 创建h2标签和填充里面的文字
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    // 将header和dlist都填入body中
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}

/*给文档P最后添加一个链接*/
function displayCitations() {
    // 获取元素部分
    var quotes = document.getElementsByTagName("blockquote");
    for (var i=0;i<quotes.length;i++) {
        if (!quotes[i].getAttribute("cite")) continue;
        var url = quotes[i].getAttribute("cite");
        var quotesChildren = quotes[i].getElementsByTagName("*");
        if (quotesChildren.length-1<0) continue;
        var elem = quotesChildren[quotesChildren.length-1];
        // 创建标签部分
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.setAttribute("href",url);
        link.appendChild(link_text);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        // 插入文档部分
        elem.appendChild(link);
    }
}
function displayAccesskeys() {
    var elementa = document.getElementsByTagName("a");
    var defs2 = new Array;
    for (var i=0;i<elementa.length;i++) {
        if (!elementa[i].getAttribute("accesskey")) continue;
        // 获取acc属性的文字
        var elementass = elementa[i].getAttribute("accesskey");
        // 获取a标签里面的文字
        var atext = elementa[i].lastChild.nodeValue;
        defs2[atext]=elementass;
    }
    for (atext in defs2) {
        var elementass = defs2[atext];
        var ulist = document.createElement("ul");
        var uli = document.createElement("li");
        /*var atextt = document.createTextNode(atext);
        var elementasst =document.createTextNode(elementass)*/
        var str =atext + ": " +elementass;
        var text3=document.createTextNode(str)
        // uli.appendChild(atextt);
        uli.appendChild(text3);
        ulist.appendChild(uli);
        document.body.appendChild(ulist)
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
addLoadEvent(displayAbbreviations);
addLoadEvent(displayCitations);
addLoadEvent(displayAccesskeys);