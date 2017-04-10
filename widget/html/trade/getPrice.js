define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var UserInfo = new Vue({
        el: '#getPrice',
        template: _g.getTemplate('trade/getPrice-main-V'),
        data: {
           
        },
        created: function() {

        },
        methods: {
            onPostPhone: function() {
                _g.openWin({
                    header: {
                        data: {
                            title: '我的发布',
                        },
                    },
                    name: 'personal-myPost',
                    url: '../personal/myPost.html',
                    slidBackEnabled: false,
                });
            },
            onBack: function() {
                _g.openWin({
                    header: {
                        data: {
                            title: '二手手机',
                        },
                    },
                    name: 'main-index',
                    url: '../main/index.html',
                    slidBackEnabled: false,
                });
            }
        },
    });

    module.exports = {};
});
