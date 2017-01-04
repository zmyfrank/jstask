/**
 * Created by Administrator on 2016/12/16.
 */
/*window.onload=function () {
    var box = document.getElementsByClassName("box");
    for (var i=0;i<box.length; i++) {
        var current_box=box[i];
        current_box.style.backgroundColor="black";
    }
}*/
// // 生成16进制数字
// function getRandomColor(){
//      return '#' +
//         function(color){
//          return (color +=  '0123456789abcdef'[Math.floor(Math.random()*15)])
//          && (color.length == 6) ?  color : arguments.callee(color);
//      }('');
// };
// /*console.log(getRandomColor);*/
//
// // 获取盒子
// function rtbox() {
//     // var boxnumber = new Array;
//     var boxnmb = document.getElementsByClassName("box");
//     // for (var i = 0; i < box.length; i++) {
//     //     var current_box = box[i];
//     //     boxnumber=
//         return boxnmb;
// };
//
// //从一个给定的数组arr中,随机返回num个不重复项
// function getArrayItems (arr, num) {
//     //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
//     var temp_array = new Array();
//     for (var j=0;j <arr.length;j++) {
//         temp_array.push(arr[j]);
//     }
//     //取出的数值项,保存在此数组
//     var return_array = new Array();
//     for (var i = 0; i<num; i++) {
//         //判断如果数组还有可以取出的元素,以防下标越界
//         if (temp_array.length>0) {
//             //在数组中产生一个随机索引
//             var arrIndex = Math.floor(Math.random()*temp_array.length);
//             //将此随机索引的对应的数组元素值复制出来
//             return_array[i] = temp_array[arrIndex];
//             //然后删掉此索引的数组元素,这时候temp_array变为新的数组
//             temp_array.splice(arrIndex, 1);
//         } else {
//             //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
//             break;
//         }
//     }
//     return return_array;
// }
// btn_l = document.getElementById("js-bl");
// btn_r = document.getElementById("js-br");
// function changeColor() {
//     var buzhidao = getArrayItems(rtbox(),3);
//     for (var i =0; i<buzhidao.length;i++) {
//         buzhidao[i].style.backgroundColor=getRandomColor();
//     }
// }
// // document.getElementById("js-bl").onclic=setInterval("changeColor()",1000);
// // function changecolor1() {
// //     chancolor2=setInterval(changeColor,1000);
// //     clearTimeout(chancolor2);
// // }
// // document.getElementById("js-br").onclick=function () {
// //     window.clearTimeout(changeColor());
// // }
// // var int = setInterval("changeColor()",1000);
// var t;
// function start() {
//     t= setInterval("changeColor()",1000);
// }
// function end() {
//     clearInterval(t);
// }
//
// /*function clearcolor() {
//    clearTimeout(chancolor2);
//     // var clearbox = getArrayItems(rtbox(),3);
//     for (var i =0; i<rtbox().length;i++) {
//         rtbox()[i].style.backgroundColor="#D86C01";
//     }
// }*/
// btn_l.onclick=function () {
//     end();
//     start();
// }
//
// btn_r.onclick=function () {
//     end();
//     for (var i = 0; i < rtbox().length; i++) {
//         rtbox()[i].style.backgroundColor = "#D86C01";
//     }
// // <<<<<<< Updated upstream
// // }
// // // function () {
// // //     function changecolor1() {
// // //         var change1=setInterval(changeColor,1000);
// // //         function clearcolor() {
// // //             clearTimeout(change1);
// // //             for (var i = 0; i < rtbox().length; i++) {
// // //                 rtbox()[i].style.backgroundColor = "#D86C01";
// // //             }
// // //         }
// // //     }
// // // }
// // =======
// // }*/
/*生成16进制颜色*/
function randomColor() {
    var num =new Array("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f");
    var color = ""
    for (var i=0;i<6;i++) {
        var randam = Math.floor(Math.random()*num.length);
        color+=num[randam]
    }
    return "#"+color;
}
/*随机抓取box并加上随机颜色*/
var  box = document.getElementsByClassName("box");
function chooseBox() {
    var newbox = new Array();
    for(var i=0;i<3;i++) {
        var randam = Math.floor(Math.random()*box.length);
        newbox[i]=box[randam];
        newbox[i].style.backgroundColor=randomColor();
        console.log(randomColor())
    }
}
/*定时事件*/
var t;
function start() {
        t=setInterval("chooseBox()",1000)
}
var endt;
function end() {
    endt=clearInterval(t)
}
/*关联button*/
var btnl=document.getElementById("js-bl");
var btnr=document.getElementById("js-br");
btnl.onclick=function () {
   end();
   start();
}
btnr.onclick=function () {
    end()
    for (var i= 0;i<box.length;i++) {
        box[i].style.backgroundColor="#D86C01";
    }
}



