$('.list li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    let i = $(this).index();
    switch (i){
        case 0:
            $('#login').show();
            $('#module_login').hide();
            $('#short').hide();
            $('#er_login').hide();
            $('#phone').css("color","#fff");
            $('#one_login').css("color","#666");
            $('#Selector').css("color","#fff");
            $('#ermlogin').css("color","#fff");
            break;
        case 1:
            $('#login').hide();
            $('#short').show();
            $('#module_login').hide();
            $('#er_login').hide();
            $('#phone').css("color","#666");
            $('#one_login').css("color","#fff");
            $('#Selector').css("color","#fff");
            $('#ermlogin').css("color","#fff");
            break;
        case 2:
            $('#module_login').show();
            $('#login').hide();
            $('#short').hide();
            $('#er_login').hide();
            $('#phone').css("color","#fff");
            $('#Selector').css("color","#666");
            $('#one_login').css("color","#fff");
            $('#ermlogin').css("color","#fff");
            break;
        case 3:
            $('#module_login').show();
            $('#login').hide();
            $('#short').hide();
            $('#module_login').hide();
            $('#er_login').show();
            $('#phone').css("color","#fff");
            $('#Selector').css("color","#fff");
            $('#one_login').css("color","#fff");
            $('#ermlogin').css("color","#666");
            break;
    }
    // console.log(i);
});
//关闭弹窗
$('#login_close').click(function (){
    $('.box').hide();
});

function regs(){
    $('#login').css('display','none');
    $('#module_login').css('display','block');
    $('#lis').addClass('active').siblings().removeClass('active');
    $('#Selector').css("color","#666");
    $('#one_login').css('color','#fff');
}

$(function (){
    let users = false;
    let yzm = false;

    //短信登录验证
    let $name_phone = $('#name_phone');
    let $Captcha = $('#Captcha');
    let $sjh = $('#sjh');

    $name_phone.blur(function (){
        fnUser();
    });
    $name_phone.focus(function (){
        fnUserFoc();
    });
    $Captcha.blur(function (){
       Captcha();
    });
    $Captcha.focus(function (){
        CaptchaFoc();
    });

    function fnUser(){
        let vals = $name_phone.val();
        const re = /^1\d{10}$/;
        if (vals == ''){
            $sjh.show().addClass('c_input_tit_err');
            $("#sjh").html("请输入有效的手机号码");
            users = false;
        }
        if (re.test(vals)){
            $sjh.hide();
            users = false;
        }
    }
    function fnUserFoc(){
        $sjh.removeClass('c_input_tit_err');
        users = false;
    }

    function Captcha(){
        let $CaptchaVals = $Captcha.val();
        // let $yam = 123456;
        if ($CaptchaVals == ''){
            $('#yzm').addClass('c_input_tit_err');
            $("#yzm").html("手机验证码必须为4或6个数字");
            yzm = false;
        }
    }
    function  CaptchaFoc(){
        $('#yzm').removeClass('c_input_tit_err');
        yzm = false;
    }



    //快速登录验证
    let $fp_Users = $('#fp_Users');
    let $ks_Pwd = $('#ks_Pwd');
    let $ks_Two_pwd = $('#ks_Two_pwd');
    let $ks_Name = $('#ks_Name');
    let $j_Id = $('#j_Id');

    $fp_Users.blur(function () {
        fp_fnUsers();
    });
    $ks_Pwd.blur(function () {
        ks_fnPwd();
    });
    $ks_Two_pwd.blur(function () {
        ks_fnTwo_pwd();
    });
    $ks_Name.blur(function () {
        ks_fnName();
    });
    $j_Id.blur(function () {
        j_fnId();
    });

    $fp_Users.focus(function () {
        fp_fnUsersfoc();
    });
    $ks_Pwd.focus(function () {
        ks_fnPwdfoc();
    });
    $ks_Two_pwd.focus(function () {
        ks_fnTwo_pwdfoc();
    });
    $ks_Name.focus(function () {
        ks_fnNamefoc();
    });
    $j_Id.focus(function () {
        j_fnIdfoc();
    });

    function fp_fnUsers(){
        let vals = $fp_Users.val();
        if (vals == ''){
            $('#fp_Userstit').show().addClass('ks_input_pwd_err');
            $("#fp_Userstit").html("请输入用户名");
        }else {
            $('#fp_Userstit').css('color','#b3b3b3');
            $('#fp_Userstit').html("这是为您分配的帐号,也可自己填写");
        }
    }
    function ks_fnPwd(){
        let vals = $ks_Pwd.val();
        if (vals == ''){
            $('#ks_Pwd_label').show().addClass('ks_input_pwd_err');
            $("#ks_Pwd_label").html("请输入密码");
        }
    }
    function ks_fnTwo_pwd(){
        let vals = $ks_Two_pwd.val();
        if (vals == ''){
            $('#Two_pwd_label').show().addClass('ks_input_pwd_err');
            $("#Two_pwd_label").html("请再次输入密码");
        }
    }
    function ks_fnName(){
        let vals = $ks_Name.val();
        if (vals == ''){
            $('#j_ks_Name').show().addClass('ks_input_pwd_err');
            $("#j_ks_Name").html("姓名不能为空");
        }
    }
    function j_fnId(){
        let vals = $j_Id.val();
        if (vals == ''){
            $('#j_ks_Id').addClass('ks_input_pwd_err');
            $("#j_ks_Id").html("身份证号不能为空");
            $("#j_ks_Id a").css('color', '#000');
        }
    }
    function fp_fnUsersfoc(){
        $('#fp_Userstit').html("用户名由3~20个字符组成");
    }
    function ks_fnPwdfoc(){
        $('#ks_Pwd_label').removeClass('ks_input_pwd_err');
        $('#ks_Pwd_label').html("长度为6~20个字符，区分大小写");
    }
    function ks_fnTwo_pwdfoc(){
        $('#Two_pwd_label').removeClass('ks_input_pwd_err');
    }
    function ks_fnNamefoc(){
        $('#j_ks_Name').removeClass('ks_input_pwd_err');
    }
    function j_fnIdfoc(){
        $('#j_ks_Id').removeClass('ks_input_pwd_err');
    }


});
