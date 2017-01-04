var Totalid=[];
var KillN=[];
var click;
var Total;
console.log(localStorage)

// 玩家索引
TotalArrString=localStorage.arr;
TotalArr=JSON.parse(localStorage.arr);
// 删除数组中的第一个
TotalArr.shift();
// 读取天数
if(localStorage.day){
    dayString=localStorage.day;
    day=JSON.parse(dayString);
}
// 将所有玩家的身份列出来
if (localStorage.Total) {
    TotalString=localStorage.Total;
    Total=JSON.parse(TotalString);
}
if (localStorage.kill) {
    KillNString=localStorage.kill;
    KillN=JSON.parse(KillNString);
}
for (var i = 0; i < TotalArr.length; i++) {
    var ali='<li class="box-item">'+'<div class="box-bg"></div>'+"<p class='judge-name'>"+ TotalArr[i]+"</p>"+"<p class='judge-Num'>"+(i+1)+"号</p>"+"</li>";
    $('.box').append(ali);
    // 标记死亡角色
    if (localStorage.Total) {
        if (Total[i].status=='dead') {
            $('.box-item').eq(i).css('border','3px solid red').addClass('die');
        }if (Total[i].status=='vote') {
            $('.box-item').eq(i).css('border','3px solid red').addClass('die');
        }
    }

}

// 将所有被杀死和投死的人标记出来~

if(!localStorage.Total){
    // 身份数组;
    for (var i = 0; i < TotalArr.length; i++) {
        Totalid.push(TotalArr[i])
    }
    for (var i = 0 ; i < TotalArr.length; i++) {
        TotalArr[i]={};
        // 当前玩家索引
        TotalArr[i].num=i;
        // 当前玩家的身份
        TotalArr[i].id=Totalid[i];
        // 当前玩家死亡的天数
        TotalArr[i].day=0;
        // 当前玩家的状态
        TotalArr[i].status='life';
    }
    console.log(TotalArr)
}

$('.box-item').on('click',function () {
    // 点击边框换色
    if ($(this).find('.judge-name').html()=='杀手') {
        alert('为何要手足相残啊，少年！？杀手不能杀死杀手！');
        click=undefined;
        $('.box-item').css('border','3px solid #fff')
    }else if($(this).hasClass('die')){
        alert('玩家已死 请选择一个没有死亡的玩家！')
        click=undefined;
        $('.box-item').css('border','3px solid #fff')
    }else{
        $(this).css('border','3px solid orange').siblings().css('border','3px solid #fff');
        click=$(this).index();
    }
    // 重新标记死亡角色；
    $('.die').css('border','3px solid red')
})
console.log(Total)
$('button').on('click',function () {
    console.log(click);
    if (click==undefined) {
        alert('请选择一个没有死亡的玩家！')
    }else if (Total!==undefined){

        Total[click].status='dead';
        Total[click].day=day;
        KillN.push(click);
        KillNS=JSON.stringify(KillN);
        localStorage.kill=KillNS;
        attArrString=JSON.stringify(Total);
        localStorage.Total=attArrString;
        location.href='night.html';
    }else{

        TotalArr[click].status='dead';
        TotalArr[click].day=day;
        KillN.push(click);
        KillNS=JSON.stringify(KillN);
        localStorage.kill=KillNS;
        attArrString=JSON.stringify(TotalArr);
        localStorage.Total=attArrString;
        console.log(localStorage);
        location.href='night.html';
    }
})


/****************/
// 读取本地缓存中的数组；
console.log(localStorage);
TotalArrString=localStorage.Total;
TotalArr=JSON.parse(TotalArrString);
console.log(TotalArr)
killNString=localStorage.kill;
killN=JSON.parse(killNString);
dayString=localStorage.day;
day=JSON.parse(dayString);
var voteN;

if (localStorage.vote) {
    voteString=localStorage.vote;
    voteN=JSON.parse(voteString);
}

for (var i = 0; i < day; i++) {
    ali='<p>'+(TotalArr[killN[i]].num+1)+'号被杀手杀死了，真实身份是'+TotalArr[killN[i]].id+'</p>';
    $('.body-text').append(ali);
    if (voteN!==undefined&&voteN.length>i) {
        oli='<p>'+(TotalArr[voteN[i]].num+1)+'号被集体投死了，真实身份是'+TotalArr[voteN[i]].id+'</p>';
        $('.body-text').append(oli);
    }
}
$('.footer button').on('click',function () {

    location.href='vote.html';

})

/******VOTE******/
var voteN=[];
var click;
// 读取本地缓存中的数组；
console.log(localStorage);
TotalArrString=localStorage.Total;
TotalArr=JSON.parse(TotalArrString);
dayString=localStorage.day;
day=JSON.parse(dayString);
if (localStorage.vote) {
    voteString=localStorage.vote;
    voteN=JSON.parse(voteString);
}
// 循环出所有人的身份，死亡的人边框变红
for (var i = 0; i < TotalArr.length; i++) {
    var ali='<li class="box-item">'+'<div class="box-bg"></div>'+"<p class='judge-name'>"+ TotalArr[i].id+"</p>"+"<p class='judge-Num'>"+(i+1)+"号</p></li>"
    $('.box').append(ali);
    if (TotalArr[i].status=='dead') {
        $('.box-item').eq(i).css('border','3px solid red').addClass('die');
    }else if(TotalArr[i].status=='vote'){
        $('.box-item').eq(i).css('border','3px solid red').addClass('die');
    }
}
// 判断玩家有没有点击或有没有点击到死亡玩家
$('.box-item').on('click',function () {
    if ($(this).hasClass('die')) {
        alert('什么鬼啦，选择一个非死亡玩家~');
        click=undefined;
        console.log(click)
    }else{
        $(this).css('border','3px solid orange').siblings().css('border','3px solid #fff');
        $('.die').css('border','3px solid red');
        click=$(this).index();
        console.log(click)
    }
})
$('footer button').on('click',function () {
    if (click==undefined) {
        alert('请选择一个非死亡玩家')
    }else{
        TotalArr[click].status='vote';
        TotalArr[click].day=day;
        voteN.push(click);
        voteNS=JSON.stringify(voteN);
        localStorage.vote=voteNS;
        attArrString=JSON.stringify(TotalArr);
        localStorage.Total=attArrString;
        location.href='night1.html'
    }

})
/*******night2*******/

// 读取本地缓存中的数组；
console.log(localStorage);
// 玩家总索引
TotalArrString=localStorage.Total;
TotalArr=JSON.parse(TotalArrString);
console.log(TotalArr)
// 被杀数组
killNString=localStorage.kill;
killN=JSON.parse(killNString);
// 当前天数
dayString=localStorage.day;
day=JSON.parse(dayString);
// 被投死的数组
voteString=localStorage.vote;
voteN=JSON.parse(voteString);


for (var i = 0; i < day; i++) {
    ali='<p>'+(TotalArr[killN[i]].num+1)+'号被杀手杀死了，真实身份是'+TotalArr[killN[i]].id+'</p>';
    oli='<p>'+(TotalArr[voteN[i]].num+1)+'号被集体投死了，真实身份是'+TotalArr[voteN[i]].id+'</p>';
    $('.body-text').append(ali);
    $('.body-text').append(oli);
}

/*
 判断胜利条件~
 如果杀手数量不少村民，杀手win。杀手>= 水民数量
 如果所有杀手死亡，村民win。
 获取当前总玩家数
 直接判断字面信息！判断输赢
 */


//当前存活水民的数组 // 当前存活存活的杀手的数组
var lpeo=[];
var lKill=[];
for (var i = 0; i < TotalArr.length; i++) {
    if (TotalArr[i].status=='life'&&TotalArr[i].id=='水民') {
        lpeo.push(i);
    }
    if (TotalArr[i].status=='life'&&TotalArr[i].id=='杀手') {
        lKill.push(i)
    }
}
console.log('当前存活的水民人数'+lpeo.length);
console.log('当前存活的杀手人数'+lKill.length);

// 玩家总数
var all=TotalArr.length;
console.log('当前玩家总人数'+TotalArr.length);
var KillNum=Math.floor( all / 4);
if (all==8) {
    KillNum=1;
};
day++;
$('button').html('第'+day+'天');

if (lKill.length>=lpeo.length) {
    $('.footer button').html('杀手胜利 点击查看结果')
}else if (lKill.length==0) {
    $('.footer button').html('水民胜利 点击结果')
}
$('button').on('click',function () {

    if (lKill.length>=lpeo.length) {
        winner=47;//杀手47~
        winnerString=JSON.stringify(winner);
        localStorage.winner=winnerString;
        location.href='end.html';
    }else if(lKill.length==0){
        winner=0;//杀手47~
        winnerString=JSON.stringify(winner);
        localStorage.winner=winnerString;
        location.href='end.html';
    } else{
        dayString=JSON.stringify(day);
        localStorage.day=dayString;
        location.href='day.html';
    }

})

