/**
 * Created by Administrator on 2017/1/2.
 */
//点击注册和登陆进行切换

$('.btn button').on('click',function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('.main-bg').css('display','none').eq($(this).index()).css('display','inline-block');
});
//点击input 相应的边框变色
$('.main-bg input').on('click',function () {
    //还原所有边框颜色
    $('.main-bg form').find('div').css('border','1px solid transparent');
    // 返回当前点击的input的包裹div
    var aBtn=$(this).parent('div');
    aBtn.css('border','1px solid #0099ff');
    if($('.message').html()=='该手机号已注册'){
        $('#re-user').parent('div').css('border','1px solid red');
    }
})
//手机号输入框
$('#re-user').on('keyup',function () {
    //判断用户输入的是不是数字
    this.value = this.value.replace(/[^\d]/g, '');
    //判断用户输入的手机号是不是11位；
    var inputVal=$(this).val();
    if(inputVal.length==11){
        $.ajax({
            url:"a/mobile",
            data: {
                mobile : inputVal
            },
            success:function (code,message) {
                console.log(code);
                // JSON数据需要parse处理
                var codeStr=JSON.parse(code);
                if(codeStr.code== -2007){
                    $('.message').text(codeStr.message).css('color','red');
                    $('#re-user').parent('div').css('border','1px solid red');
                }else{
                    $('.message').text('该手机号码可以注册').css('color','#0099ff');
                    $('#re-user').parent('div').css('border','1px solid #0099ff');
                }
            }
        });
    }else{
        $('.message').text('请输入11位手机号码').css('color','orange');
        $('#re-user').parent('div').css('border','1px solid orange');
    }
});
//密码框输入框
$('#re-pass').on('keyup',function () {
    //    判断密码是不是不小于6位
    var inputval=$(this).val();
    if (inputval.length<6){
        $('#re-pass').parent('div').css('border','1px solid orange');
        $('.message').text('密码不能小于6位').css('color','orange');
    }else{
        $('#re-pass').parent('div').css('border','1px solid #0099ff');
        $('.message').text('当前密码可用').css('color','#0099ff')
    }
})


//点击刷新验证码
$('.vercode img').on('click',function () {
    var imgSrc;
    $.ajax({
        url:'a/captcha/generate',
        async:false,
        data:{
            da:Math.random()*10000+1
        },
        success:function () {
            imgSrc=this.url;
        },
    })
    this.src=imgSrc;
})
//验证图片验证码
$('.info input').on('keyup',function () {
    var inputval=$(this).val();
    console.log(inputval)
    $.ajax({
        url:'a/captcha/verify',

        data:{
            inputValue: inputval
        },
        success: function (code,message) {
            var Str=JSON.parse(code);
            console.log(Str)
            if (Str.code==-2005){
                $('.message').text(Str.message).css('color','red');
                $('.info').css('border','1px solid red');
            }else{
                $('.message').text('验证码正确~').css('color','#0099ff');
                $('.info').css('border','1px solid #0099ff');
            }
        }
    })
})

//获取手机验证码
$('.info-btn').on('click',function () {
    //手机号码验证
    var isre=false;
    var isN=false;
    $.ajax({
        url:'a/mobile',
        async:false,
        data:{
            mobile:$('#re-user').val()
        },
        success:function (code,message) {
            var Str=JSON.parse(code)
            console.log(Str.code)
            if (Str.code==-2007||Str.code==-1000){
                $('.message').text('您输入的手机号码有误！').css('color','red');
                isre=true;
            }else{
                isre=true;
            }
        }
    });
    //图片验证
    var inputval=$('.info input').val();
    console.log(inputval);
    $.ajax({
        url:'a/captcha/verify',
        async:false,
        data:{
            inputValue: inputval
        },
        success: function (code,message) {
            var Str=JSON.parse(code);
            console.log(Str)
            if (Str.code==-2005){
                $('.message').text(Str.message).css('color','red');
                $('.info').css('border','1px solid red');
                isN=false;
            }else{
                $('.message').text('验证码正确~').css('color','#0099ff');
                $('.info').css('border','1px solid #0099ff');
                isN=true;
            }
        }
    })
    console.log(isre)
    console.log(isN)
    if(isre==true && isN==true){
        $.ajax({
            url:'a/code/send',
            type:'Post',
            data:{
                mobile:$('#re-user').val(),
                type:'register'
            },
            success:function (code,message) {
                console.log(code);
            }
        })
    }
})



//点击注册事件
$('#re-btn').on('click',function () {
    console.log('ss')
    $.ajax({
        url:"a/user",
        type:'Post',
        data:{
            mobile:$('#re-user').val(),
            nick:'12',
            password:$('#re-pass').val(),
            verify:$('.info1 input').val()
        },
        success: function (code,message,uid) {
            console.log(code+'看到打印 说明接口是通的测试成功')
        }
    })
    /*图片验证码获取到之后 在本地进行判断，正确之后才允许获取手机验证码 防止恶意攻击*/
})


//登陆用户名判断
$('#l-user').on('keyup',function () {
    //判断用户输入的是不是数字
    this.value = this.value.replace(/[^\d]/g, '');
    //判断用户输入的手机号是不是11位；
    var inputVal=$(this).val();
    if(inputVal.length==11){
        $.ajax({
            url:"a/mobile",
            data: {
                mobile : inputVal
            },
            success:function (code,message) {
                console.log(code);
                // JSON数据需要parse处理
                var codeStr=JSON.parse(code);
                if(codeStr.code== -2007){
                    $('.l-message').text(' ').css('color','#0099ff').addClass('flag');
                    $('#l-user').parent('div').css('border','1px solid #0099ff');
                    $('#l-user').addClass('flag');

                }else{
                    $('.l-message').text('无效的手机号').css('color','red');
                    $('#l-user').parent('div').css('border','1px solid red');
                    $('#l-user').removeClass('flag');
                }
            }
        });
    }else{
        $('.message').text('请输入11位手机号码').css('color','orange');
        $('#re-user').parent('div').css('border','1px solid orange');
        $('#l-user').removeClass('flag');
    }
});
//登陆框密码判断
$('#l-pass').on('keyup',function () {
    //    判断密码是不是不小于6位
    var inputval=$(this).val();
    if (inputval.length<6){
        $('#l-pass').parent('div').css('border','1px solid orange');
        $('.l-message').text('密码不能小于6位').css('color','orange');
        $('#l-pass').removeClass('flag');
    }else{
        $('#l-pass').parent('div').css('border','1px solid #0099ff');
        $('.l-message').text(' ').css('color','#0099ff');
        $('#l-pass').addClass('flag');
    }
})

$('#l-btn').on('click',function () {
    if( $('#l-pass').hasClass('flag') && $('#l-user').hasClass('flag')){
        console.log('ss')
        $.ajax({
            url:'a/login',
            type:'Post',
            data:{
                mobile:$('#l-user').val(),
                pwd:$('#l-pass').val()
            },
            success:function (code,message) {
                var Str=JSON.parse(code);
                console.log(Str)

                if(Str.code==-2006){
                    $('.l-message').text('您输入的账号密码有误！').css('color','red');
                    $('.d-l-message').css('border','1px solid red');
                }else{
                    $('.l-message').text('您好，id为'+Str.uid+'的用户~');
                }
            }
        })
    }else{
        alert('您输入的账号和密码有问题~')
    }
})