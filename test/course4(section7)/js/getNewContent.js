/**
 * Created by Administrator on 2016/12/16.
 */
function getNewContent() {
    var request = getHttpObject();
    if (request) {
        request.open("GET","example.txt",true);
        request.onreadystatechange = function () {
            if(request.readyState == 4) {
                var para =document.createElement("p");
                var txt =document.createTextNode(request.responseText);
                para.appendChild(txt);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);/*不知道是啥意思*/
    }else {
        alert("Sorry,your browser doesn\'t support XMLHttpRequest");
    }
}
addLoadEvent(getNewContent);