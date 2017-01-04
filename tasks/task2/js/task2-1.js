/**
 * Created by Administrator on 2016/12/22.
 */
// 基础借鉴版X
// 所有的方法基本了解
var setting = document.getElementById("js-stting");
var Id_arrN;
var Id_arrNstr;
var lengthpk={};
window.onload=function () {
    localStorage.clear();
    sessionStorage.clear();
}
setting.onclick=function () {
    var ul = document.getElementById("js-idbox");
    ul.innerHTML="";
    var  Id_arr = new Array;/*新建数组来存放身份*/
    var btn_plus = document.getElementById("js-input_pnum");
    var plaer = btn_plus.value;/*获取到游戏总人数*/
    var killer_num = Math.floor(plaer/4);/*杀手数量：总人数/4*/
    /*保存水民人数和杀手人数  传递到后面去↓*/
    lengthpk.killnum=killer_num;
    lengthpk.popnum=(plaer-killer_num);
    localStorage.lengthpk=JSON.stringify(lengthpk);
    /*下面这个是用于最后页输出一共多少人的*/
    localStorage.lengthpkp=JSON.stringify(lengthpk);
    for(var k = 0;k<killer_num;k++){
        Id_arr[k]="杀手";/*循环出杀手*/
    }
    for(var p = killer_num;p<plaer;p++) {
        Id_arr[p]="水民";/*循环出水民*/
    }
    /*在上面的循环中，每个杀手和水民都是按照顺序排列
    的，我先循环出的杀手，所以前面全是杀手，后面全是水
    民。注意循环杀手的时候，k<killer_num表示K小于杀手
    的数量，由于数组都是从0开始计数，当杀手有一个时，能
    循环出一个杀手，以此类推*/
    Id_arr.sort(function () {
        return 0.5-Math.random()/*这里利用这个方法（百度到的）来重新对数组进行排序，原理我还不是和理解，后续补充*/
    })
    Id_arrNstr=JSON.stringify(Id_arr);
    localStorage.idm=Id_arrNstr;
    console.log(Id_arrNstr+Id_arrNstr.length);
    Id_arrN=Id_arr;/*存进全局变量，方便储存*/
    var playerText="";
    for(var i =0;i<Id_arr.length;i++) {
        var ul = document.getElementById("js-idbox")
        playerText += '<li><span></span>' + Id_arr[i] + '1人</li>';
        ul.innerHTML=playerText;
    }
}
// Id_arrNstr = JSON.stringify(Id_arrN)/*转换为字符串再保存，JSON为转换为字符串的方法，sess和local都只能保存字符串*/
// localStorage.idm=Id_arrNstr;/*临时保存一下*/
// console.log(Id_arrNstr)

var go =document.getElementById("js-btn_go");
go.onclick=function () {
    if (!Id_arrN.length) {
        alert("点击一下设置有这么难吗！");
    }else {
        location.href='../html/task2-2.html';
    }
}



