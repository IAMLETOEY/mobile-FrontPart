define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var UserInfo = new Vue({
        el: '#buySuccess',
        template: _g.getTemplate('trade/buySuccess-main-V'),
        data: {
            title: '订单列表',
            text: '小米note 32G 全网通',
        },
        created: function() {

        },
        methods: {},
    });

    module.exports = {};
});
