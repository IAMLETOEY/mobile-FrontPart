define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var type = api.pageParam.type; //获取上个页面的参数
    var id = api.pageParam.id;
    if (type == 'app') {
        $('#header').css('display', 'block');
        var header = _g.addHeader({
            template: '../html/common/header-login-V',
            data: {
                title: '登录'
            }
        });
    } else {
        $('#header').css('display', 'none');
    }
    var login = new Vue({
        el: '#login',
        template: _g.getTemplate('account/login-main-V'),
        data: {
            account: '',
            password: ''
        },
        created: function() {
            //打开页面时候的操作
            _g.rmLS('sessionID');
            _g.rmLS('UserInfo');
        },
        ready: function() {
            //渲染完页面
        },
        filters: {
            'sex': function(data) {
                return data ? '男' : '女';
            }
        },
        methods: {
            onHomeTap: function() {
                postLogin();
            },
            onRegisterTap: function() {
                api && api.openWin({
                    name: 'account-register-win',
                    url: '../../html/account/register.html',
                    bounces: false,
                    slidBackEnabled: false,
                    animation: { type: 'none' }
                });
            }

        },
    });

    function postLogin() {
        Http.ajax({
                data: {
                    account: login.account,
                    password: login.password
                },
                isSync: true, //阻断异步打开界面传数据
                url: '/user/login', //接口地址
                success: function(ret) {
                    if (ret.code == 200) {
                        _g.setLS('UserInfo', ret.data.UserInfo);
                        _g.setLS('sessionID', ret.data.sessionID);
                        _g.toast('登录成功');
                        api && api.openWin({
                            name: 'main-index',
                            url: '../main/index.html',
                            bounces: false,
                            slidBackEnabled: false
                        });
                       
                        _g.closeWins(['account-login-win'])
                    } else {
                        _g.toast(ret.msg);
                    }
                },
                error: function(err) {}

            }) //进入页面后调用接口
    }
    module.exports = {};
});
