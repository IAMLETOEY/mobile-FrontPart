define(function(require, exports, module) {
    var Http = require('U/http');
    var Vcode = require('U/vcode');
    var register = new Vue({
        el: '#register',
        template: _g.getTemplate('account/register-main-V'),
        data: {
            phoneNum: '',
            password: '',
            codeQR: '',
            codeText: ''
        },
        created: function() {
            Vcode.init({
                onInit: this.onInit,
                onAction: this.onAction,
            });
        },
        methods: {
            
            //申请注册
            onLoginTap: function() {
                var mobileReg = /^1[0-9]{10}$/;
                var pwdReg = /^[A-Za-z0-9]{6,16}$/;
                var codeReg = /^[0-9]{6}$/;
                if (this.phoneNum == '') {
                    _g.toast('请输入手机号码');
                    return;
                }
                if (!mobileReg.test(this.phoneNum)) {
                    _g.toast('请输入11位数的手机号码');
                    return;
                }
                if (this.password == '') {
                    _g.toast('请输入密码');
                    return;
                }
                if (!pwdReg.test(this.password)) {
                    _g.toast('请输入6~16位数字/字母或组合的密码');
                    return;
                }
                if (this.codeQR == '') {
                    _g.toast('请输入验证码');
                    return;
                }
                if (!codeReg.test(this.codeQR)) {
                    _g.toast('请输入6位正确的验证码');
                    return;
                }
                postRegist();
            },
            onDelTap: function() {
                this.phoneNum = '';
            },
        },
    });
    //请求注册
    function postRegist() {
        Http.ajax({
            data: {
                phone: register.phoneNum,
                password: register.password,
                vcode: register.codeQR
            },
            isSync: true,
            url: '/app/account/register.do',
            success: function(ret) {
                if (ret.code == 200) {
                    // _g.toast(ret.msg);
                    register.password = '';
                    register.phoneNum = '';
                    register.codeQR = '';
                    _g.openWin({
                        header: {
                            data: {
                                title: '登录',
                            },
                        },
                        name: 'account-login',
                        url: '../account/login.html',
                        bounces: false,
                        slidBackEnabled: false,
                    });
                    api && api.closeWin();
                } else {
                    _g.toast(ret.msg);
                }
            },
            error: function(err) {}
        });
    }

    module.exports = {};

});
