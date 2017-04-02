define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var UserInfo = new Vue({
        el: '#setInfo',
        template: _g.getTemplate('personal/setInfo-main-V'),
        data: {
           title:'用户设置',
           list:[]
        },
        created: function() {

        },
        methods: {
            onCancel:function () {
                _g.openWin({
                    header: {
                        data: {
                            title: '',
                        },
                    },
                    name: 'personal-userCenter',
                    url: './userCenter.html',
                    slidBackEnabled: false,
                });

            }
        },
    });


     module.exports = {};

});
