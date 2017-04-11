define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var setInfo = new Vue({
        el: '#setInfo',
        template: _g.getTemplate('personal/setInfo-main-V'),
        data: {
            title: '用户设置',
            list: [],
            UserInfo: UserInfo
        },
        created: function() {
        },
        methods: {
            onCancel: function() {
                api.closeWin();
            },
            onSure: function() {
                var UserInfo = this.UserInfo;
                Http.ajax({
                    data: this.UserInfo,
                    url: '/user/update',
                    // lock: false,
                    success: function(ret) {
                        if (ret.code == 200) {
                            _g.setLS('UserInfo', UserInfo);
                            _g.toast('修改成功');
                            api.closeWin();
                        } else {
                            _g.toast(ret.message);
                        }
                    },
                    error: function(err) {}
                })
            }
        },
    });


    module.exports = {};

});
