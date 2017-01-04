/**
 * Created by Administrator on 2016/12/23.
 */
var Id_arrN=JSON.parse(localStorage.idm);/*括号里面的部分：获取上个页面储存的值；括号外面是是重新转换为数组*/
var ID_length = Id_arrN.length;/*数组长度，用于比较*/
var btn_check=document.getElementById("js-btn_check");/*获取点击下一页的button*/
var idbox = document.getElementById("m-idbox")
var k=1;
var i=0;
btn_check.onclick=function () {
    k++;
    i++;
    var num=k-Math.ceil((k-1)/2);/*这个是当前号数*/
    /*当超过人数数组的length之后，跳转到下一页面*/
    if (k>(2*ID_length)) {
        location.href = '../html/task2-3.html';
    }
    /*跳转到法官页面的样式单独写*/
    if (k==(2*ID_length)){
        var inner_text="";
        inner_text+='<div class="u-idbox_circle">'+num+'</div><img src="../images/icon-draw.png" id="js-draw"><p id="js-Idj">角色：'+Id_arrN[(num-1)]+'</p><p id="js-Idc">词组：西伯利亚</p><p id="js-tip">想办法猜到人的词，同时还要注意不要暴露自己哦！</p>';
        console.log(inner_text);
        idbox.innerHTML=inner_text;
        btn_check.innerHTML='查看法官日志'
    }
    /*身份页面*/
    if (k%2==0 && k<(2*ID_length)) {
        var inner_text="";
        inner_text+='<div class="u-idbox_circle">'+num+'</div><img src="../images/icon-draw.png" id="js-draw"><p id="js-Idj">角色：'+Id_arrN[(num-1)]+'</p><p id="js-Idc">词组：西伯利亚</p><p id="js-tip">想办法猜到人的词，同时还要注意不要暴露自己哦！</p>';
        console.log(inner_text);
        idbox.innerHTML=inner_text;
        btn_check.innerHTML='隐藏并传递给'+(num+1)+'号'
    }
    /*点击显示身份页面*/
    if (k%2!=0 &&  k<(2*ID_length)) {
        var inner_text2="";
        inner_text2+='<div class="u-idbox_circle">'+num+'</div><img src="../images/icon-draw2.png" id="js-draw2">';
        idbox.innerHTML=inner_text2;
        console.log(inner_text2);
        btn_check.innerHTML='查看'+num+'号身份'
    }
}