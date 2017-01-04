/**
 * Created by Administrator on 2016/12/19.
 */
// 改良版拖动条完成，------------------------
// 不是数字的情况代码写了但是不提示，-------------------------
// 没找到是啥原因，开始下一步---------------------------------------
// 还有一个问题，获取到的元素，不能直接用变量来储存他的value，原因还未知



/*精简改良版，但是我还是有很多问题没弄懂*/
var plus_btn= document.getElementById("js-btn_plus");
var minus_btn=document.getElementById("js-btn_minus");
var btn_range = document.getElementById("js-btn_range");
var input_pnum = document.getElementById("js-input_pnum");
/*将滑块的值和input的值完全联系起来*/
/*第一步，将滑块设置松开事件，松开后直接赋值到input上面*/
btn_range.onmouseup=function () {
    input_pnum.value=btn_range.value;
}


/*第二步，给input设定输入事件，输入后直接反应到滑块上面*/
input_pnum.oninput = function () {
    btn_range.value=input_pnum.value;
}
/*输入值的具体判断*/
input_pnum.oninput=function () {
    function reset() {
        input_pnum.value=6;
        btn_range.value=input_pnum.value;
    }
    var i = Number(input_pnum.value);/*转换为数字，为不为数字做铺垫*/
    if (isNaN(i)) {
        alert("请输入数字！")/*这个效果没有实现，我再抄一下作业*/
        reset()
    }
    if(i<6) {
        alert("人数必须大于6哟！")
        reset()
    }
    if (i>18) {
        alert("人数必须大于18哟！")
        reset()
    } else {
        btn_range.value=input_pnum.value;/*这一步是将滑块和input联系起来，与上面那一步重复，可以删除上面那一步，不能删除这一步！因为这才能保证每种情况的相等！*/
    }
}
/*滑块的具体判断*/
plus_btn.onclick=function () {
    var i =btn_range.value/*使用变量i来进行判断大小，因为我本身设置了最大值，所以range并不能取到19，就不会有提示，但是变量可以一直加上去！*/
    i++
    if (i>18) {
        alert("不能大于18哟")
    }else {
        btn_range.value=i;
        input_pnum.value=btn_range.value
}
}

minus_btn.onclick=function () {
    var i =btn_range.value
    i--
    if (i<6) {
        alert("不能不能小于6哟")
    }else {
        btn_range.value=i;
        input_pnum.value=btn_range.value
    }
}
