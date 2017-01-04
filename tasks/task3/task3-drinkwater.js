/**
 * Created by Administrator on 2017/1/2.
 */

$(document).ready(function () {
    $('#loginButton').click(
        function () {
            var user = $('#username').val(),
                pwd = $('#password').val();
            console.log(user);
            $.post("/jns/a/login", {"mobile": user, "pwd": pwd}, function (response) {
                if (response.message === "success") {

                    alert(response.message)
                    /*// location.href = "list.html?full?uids=2315332" + response.uid+"712rE2a";*/
                    console.log(response);
                }
                else {
                    alert(response.message)
                }
            }, "json");
        }
    );
});
