let login = $('#login')
let short = $('#short')
let module_login = $('#module_login')
let er_login = $('#er_login')
$('.list li').click(function () {
    $(this).addClass('active').siblings().removeClass('active')
    $(this).css('color', '#666').siblings().css('color', 'white')
    let i = $(this).index()
    let dive = [login, short, module_login, er_login]
    for (let j = 0; j < dive.length; j++) {
        dive[i].show().siblings().hide()
        $('.menu').show()
    }
})

let username = document.querySelector('#username')
username.addEventListener('focus', function () {
    if (username.value == '请输入4399账号或手机号') {
        username.value = ''
    }
    username.style.color = 'rgba(0,0,0)'
})
username.addEventListener('blur', function () {
    if (username.value == '') {
        username.value = '请输入4399账号或手机号'
    }
    username.style.color = 'rgba(175,175,175)'
})
let userpwd = document.querySelector('#userpwd')
let login_btn_Img = document.querySelector('#login_btn_Img')
let msg = document.querySelector('#msg')

login_btn_Img.addEventListener('click', function(){
    if (username.value == '请输入4399账号或手机号') {
        msg.style.display = 'block'
        msg.innerHTML = '请输入用户名'
    }else if(userpwd.value == ''){
        msg.style.display = 'block'
        msg.innerHTML = '请输入密码'
    }else{
        msg.style.display = 'block'
        msg.innerHTML = '密码错误'
    }
})

let phoneName = document.querySelector('#name_phone')
let enroll_img = document.querySelector('#enroll_img')
let phonemsg = document.querySelector('#phonemsg')
let Captcha = document.querySelector('#Captcha')
enroll_img.addEventListener('click', function(){
    if (phoneName.value.length < 11) {
        phonemsg.style.display = 'block'
        phonemsg.innerHTML = '请输入有效的手机号码'
    }else if(Captcha.value == '' && phoneName.value != '' ){
        phonemsg.style.display = 'block'
        phonemsg.innerHTML = '验证码不能为空'
    }else{
        phonemsg.style.display = 'block'
        phonemsg.innerHTML = '验证码错误'
    }
})



//关闭弹窗
$('#login_close').click(function () {
    $('.box').hide() 
}) 

function regs() {
    $('#login').css('display', 'none') 
    $('#module_login').css('display', 'block') 
    $('#lis').addClass('active').siblings().removeClass('active').css('color', 'black').siblings().css('color', '')  
}

$(".phone").click(function(){
    $('#login').css('display', 'none')
    $('#module_login').css('display', 'none')
    $('#short').css('display', 'block') 
    $('#listphone').addClass('active').siblings().removeClass('active').css('color', 'black').siblings().css('color', '') 
})

$(function () {
    let users = false 
    let yzm = false 

    //短信登录验证
    let $name_phone = $('#name_phone') 
    let $Captcha = $('#Captcha') 
    let $sjh = $('#sjh') 

    $name_phone.blur(function () {
        BnUser() 
    }) 
    $name_phone.focus(function () {
        fnUserFoc() 
    }) 
    $Captcha.blur(function () {
        Captcha() 
    }) 
    $Captcha.focus(function () {
        CaptchaFoc() 
    }) 

    function BnUser() {
        let vals = $name_phone.val() 
        const re = /^1\d{10}$/ 
        if (vals == '' || vals.length < 11) {
            $sjh.show().addClass('c_input_tit_err') 
            $("#sjh").html("请输入有效的手机号码") 
            users = false 
        }
    }
    function fnUserFoc() {
        $sjh.removeClass('c_input_tit_err') 
        $("#sjh").html("请输入11位手机号")    
    }

    function Captcha() {
        let CaptchaVals = $Captcha.val() 
        var reg = new RegExp(/^[a-zA-Z]{1,20}$/) 
        if (reg.test(CaptchaVals) || CaptchaVals =='') {
            $('#yzm').addClass('c_input_tit_err') 
            $("#yzm").html("手机验证码必须为4或6个数字") 
        }
    }
    function CaptchaFoc() {
        $('#yzm').removeClass('c_input_tit_err') 
        $("#yzm").html("请输入短信验证码") 
    }



    //快速登录验证
    let $fp_Users = $('#fp_Users') 
    let $ks_Pwd = $('#ks_Pwd') 
    let $ks_Two_pwd = $('#ks_Two_pwd')
    let $login_qq_err = $('#login_qq_err') 
    let $ks_Name = $('#ks_Name') 
    let $j_Id = $('#j_Id') 


    $("#submit_enroll").click(function(){
        if ($ks_Pwd.val() == '' || $ks_Two_pwd.val() == '' || $login_qq_err.val() == '' || $ks_fnName.val() == '' || $j_Id.val() == '') {
            ks_Pwd.focus()
        }
    })

    $fp_Users.blur(function () {
        fp_fnUsers() 
    }) 
    $ks_Pwd.blur(function () {
        ks_fnPwd() 
    }) 
    $ks_Two_pwd.blur(function () {
        ks_fnTwo_pwd() 
    }) 
    $login_qq_err.blur(function () {
        ks_loginblur_qq_err() 
    })
    $ks_Name.blur(function () {
        ks_fnName() 
    }) 
    $j_Id.blur(function () {
        j_fnId() 
    }) 

    $fp_Users.focus(function () {
        fp_fnUsersfoc() 
    }) 
    $ks_Pwd.focus(function () {
        ks_fnPwdfoc() 
    }) 
    $ks_Two_pwd.focus(function () {
        ks_fnTwo_pwdfoc() 
    }) 
    $login_qq_err.focus(function () {
        ks_fnlogin_qq() 
    })
    $ks_Name.focus(function () {
        ks_fnNamefoc() 
    }) 
    $j_Id.focus(function () {
        j_fnIdfoc() 
    }) 

    function fp_fnUsers() {
        let vals = $fp_Users.val() 
        if (vals == '') {
            $('#fp_Userstit').show().addClass('ks_input_pwd_err') 
            $("#fp_Userstit").html("请输入用户名") 
        } else if(vals.length <= 3){
            $('#fp_Userstit').show().addClass('ks_input_pwd_err') 
            $('#fp_Userstit').html("用户名必须为 3-20 个字符") 
        }else{
            $('#fp_Userstit').html("这是为您分配的帐号,也可自己填写") 
        }
    }
    function ks_fnPwd() {
        let vals = $ks_Pwd.val() 
        if (vals == '') {
            $('#ks_Pwd_label').show().addClass('ks_input_pwd_err').removeClass('input_tip_ok') 
            $("#ks_Pwd_label").html("请输入密码")
            $('#Two_pwd_label').show().addClass('ks_input_pwd_err').removeClass('input_tip_ok')
            $("#Two_pwd_label").html("两次密码不一致")  
        }else if(vals.length < 6){
            $('#ks_Pwd_label').show().addClass('ks_input_pwd_err') 
            $("#ks_Pwd_label").html("密码应为6-20 个字符")
        }else if($ks_Two_pwd.val() != '' && vals == $ks_Two_pwd.val()){
            $('#Two_pwd_label').show().addClass('input_tip_ok').removeClass('ks_input_pwd_err')
            $("#Two_pwd_label").html("") 
            $('#ks_Pwd_label').show().addClass('input_tip_ok') 
            $("#ks_Pwd_label").html("")
        }else{
            $('#ks_Pwd_label').show().addClass('input_tip_ok') 
            $("#ks_Pwd_label").html("") 
        }
    }
    function ks_fnTwo_pwd() {
        let vals = $ks_Two_pwd.val() 
        if (vals == '') {
            $('#Two_pwd_label').show().addClass('ks_input_pwd_err')  
            $("#Two_pwd_label").html("请再次输入密码") 
        }else if($ks_Pwd.val() != $ks_Two_pwd.val()){
            $('#Two_pwd_label').show().addClass('ks_input_pwd_err').removeClass('input_tip_ok')
            $("#Two_pwd_label").html("两次密码不一致") 
        }else{
            $('#Two_pwd_label').show().addClass('input_tip_ok') 
            $("#Two_pwd_label").html("") 
        }
    }

    function ks_loginblur_qq_err(){
        if ($login_qq_err.val().length < 5 && $login_qq_err.val() != '') {
            $("#login_qq_tit").show().addClass('ks_input_pwd_err')
            $("#login_qq_tit").html("QQ号无效，请重新输入")
        }
    }


    function ks_fnlogin_qq(){
        $("#login_qq_tit").html("(选填)可通过QQ号找回密码").removeClass("ks_input_pwd_err")
    }

    function ks_fnName() {
        let vals = $ks_Name.val() 
        if (vals == '') {
            $('#j_ks_Name').show().addClass('ks_input_pwd_err') 
            $("#j_ks_Name").html("姓名不能为空") 
        }else{
            $('#j_ks_Name').show().addClass('ks_input_pwd_err') 
            $("#j_ks_Name").html("姓名无效，请重新输入") 
        }
    }
    function j_fnId() {
        let vals = $j_Id.val() 
        if (vals == '') {
            $("#j_ks_Id").show()
            $('#j_ks_Id').addClass('ks_input_pwd_err') 
            $("#j_ks_Id").html("身份证号不能为空") 
            $("#j_ks_Id a").css('color', '#000') 
            $("#a_zs_id").hide() 
        }else{
            $("#j_ks_Id").show()
            $("#j_ks_Id").html("身份证号无效，请重新输入" + '<a href="https://ptlogin.4399.com/resource/howSetIdCard.html" target="_blank" class="ico_question"> </a>') 
            $('#j_ks_Id').addClass('ks_input_pwd_err') 
            $("#a_zs_id").hide() 
        }
    }
    function fp_fnUsersfoc() {
        $('#fp_Userstit').removeClass('ks_input_pwd_err') 
        $('#fp_Userstit').html("用户名由3~20个字符组成") 
    }
    function ks_fnPwdfoc() {
        $('#ks_Pwd_label').removeClass('ks_input_pwd_err').removeClass('input_tip_ok') 
        $('#ks_Pwd_label').html("长度为6~20个字符，区分大小写") 
    }
    function ks_fnTwo_pwdfoc() {
        $('#Two_pwd_label').show().addClass('ks_input_pwd_err') 
        $("#Two_pwd_label").html("") 
        $('#Two_pwd_label').removeClass('ks_input_pwd_err') 
    }
    function ks_fnNamefoc() {
        $('#j_ks_Name').show().addClass('ks_input_pwd_err') 
        $("#j_ks_Name").html("防沉迷要求填写真实姓名") 
        $('#j_ks_Name').removeClass('ks_input_pwd_err') 
    }
    function j_fnIdfoc() {
        $("#a_zs_id").show() 
        $('#j_ks_Id').removeClass('ks_input_pwd_err') 
        $("#j_ks_Id").hide()
    }


}) 