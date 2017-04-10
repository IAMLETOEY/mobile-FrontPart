define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var UserInfo = new Vue({
        el: '#myBuy',
        template: _g.getTemplate('personal/myBuy-main-V'),
        data: {
            title: '订单列表',
            text: '小米note 32G 全网通',
        },
        created: function() {

        },
        methods: {
            onOrderListTap: function() {
                _g.openWin({
                    header: {
                        data: {
                            title: '订单列表',
                        },
                    },
                    name: 'personal-orderList',
                    url: '../personal/orderList.html',
                    slidBackEnabled: false,
                });
            }
        },
    });

    module.exports = {};
});
