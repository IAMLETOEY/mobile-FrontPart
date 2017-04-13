define(function(require, exports, module) {
    var Http = require('U/http');
    var Vcode = require('U/vcode');
    var register = new Vue({
        el: '#register',
        template: _g.getTemplate('account/register-main-V'),
        data: {
            account: '',
            password: '',
            nickName: '',
            address: '',
            idCard: ''
        },
        methods: {
            //申请注册
            onLoginTap: function() {
                var mobileReg = /^1[0-9]{10}$/;
                var pwdReg = /^[A-Za-z0-9]{6,16}$/;
                var codeReg = /^[0-9]{6}$/;
                // if (this.phoneNum == '1') {
                //     _g.toast('请输入手机号码');
                //     return;
                // }
                // if (!mobileReg.test(this.phoneNum)) {
                //     _g.toast('请输入11位数的手机号码');
                //     return;
                // }
                // if (this.password == '') {
                //     _g.toast('请输入密码');
                //     return;
                // }
                postRegist();

            }
        },
    });
    //请求注册
    function postRegist() {
        Http.ajax({
            data: {
                account: register.account,
                password: register.password,
                nickName: register.nickName,
                address: register.address,
                idCard: register.idCard
            },
            isSync: true,
            url: '/user/register',
            success: function(ret) {
                if (ret.code == 200) {
                        register.account = '',
                        register.password = '',
                        register.nickName = '',
                        register.address = '',
                        register.idCard = ''
                        setTimeout(_g.toast('注册成功'), 2000);
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
