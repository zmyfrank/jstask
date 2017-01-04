/**
 * Created by Administrator on 2016/12/29.
 */
var Id_arrN=JSON.parse(localStorage.idm);
var ID_length = Id_arrN.length;
var box=document.getElementById("boxwrap");
var btn=document.getElementById("js-btn_4")
var text ="";
window.onload=function inner() {
    for(var i=0;i<ID_length;i++){
        text+='<div class="u-idbox-item"><div class="u-idbox-item_id"><p>'+Id_arrN[i]+'</p></div><div class="u-dibox-item_num">'+(i+1)+'号</div></div>';
        box.innerHTML=text;
    }
}
btn.onclick=function () {
    location.href='../html/task2-4_day.html'
}