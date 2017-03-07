define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var type = api.pageParam.type;
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
            phoneNum: '',
            password: ''
        },
        created: function() {

        },
        methods: {
            onHomeTap: function() {
                api && api.openWin({
                    name: 'main-index-win',
                    url: '../main/index.html',
                    bounces: false,
                    slidBackEnabled: false,
                    // animation: { type: 'none' }
                });
                api.closeWin();
            },
            
        },
    });

    module.exports = {};

});
