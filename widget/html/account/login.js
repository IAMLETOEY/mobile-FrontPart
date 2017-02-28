define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var type = api.pageParam.type;
    if(type == 'app'){
        $('#header').css('display','block');
        var header = _g.addHeader({
            template:'../html/common/header-login-V',
            data:{
                title:'登录'
            }
        });
    }else{
        $('#header').css('display','none');
    }
    var login = new Vue({
        el: '#login',
        template: _g.getTemplate('account/login-main-V'),
        data: {
            phoneNum: '',
            password: ''
        },
        created: function() {

        },
        methods: {
            onLoginTap: function() {
                var mobileReg = /^1[0-9]{10}$/;
                var pwdReg = /^[A-Za-z0-9]{6,16}$/;
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
                postLogin();

            },
            onRegisterTap: function() {
                _g.openWin({
                    header: {
                        data: {
                            title: '注册',
                        },
                    },
                    name: 'account-register',
                    url: '../account/register.html',
                    bounces: false,
                    slidBackEnabled: false,
                });
            },
            onForgetPwdTap: function() {
                _g.openWin({
                    header: {
                        data: {
                            title: '忘记密码',
                        },
                    },
                    name: 'account-forgetPwd',
                    url: '../account/forgetPwd.html',
                    bounces: false,
                    slidBackEnabled: false,
                });
            },
            onDelNumTap: function() {
                this.phoneNum = '';
            },
            onDelPwdTap: function() {
                this.password = '';
            }
        },
    });

    //请求登录
    function postLogin() {
        Http.ajax({
            data: {
                phone: login.phoneNum,
                password: login.password,
            },
            isSync: true,
            url: '/app/account/login.do',
            success: function(ret) {
                if (ret.code == 200) {
                    var data = ret.data;
                    _g.setLS('UserInfo', data.UserInfo);
                    _g.setLS('sessionID', data.sessionID);
                    setTimeout(function() {
                        api.openWin({
                            name: 'main-index-win',
                            url: '../main/index.html',
                            bounces: false,
                            slidBackEnabled: false,
                        });
                    }, 1000);
                    api.sendEvent({
                        name: 'account-login-success'
                    });
                    login.phoneNum='';
                    login.password='';
                } else {
                    _g.toast(ret.msg);
                }
            },
            error: function(err) {}
        });
    }

    module.exports = {};

});
