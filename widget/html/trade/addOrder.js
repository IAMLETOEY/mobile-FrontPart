define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var UserInfo = new Vue({
        el: '#addOrder',
        template: _g.getTemplate('trade/addOrder-main-V'),
        data: {
           title:'订单列表'
        },
        created: function() {

        },
        methods: {
            onPayTap: function() {
                alert('支付成功！');
                _g.openWin({
                    header: {
                        data: {
                            title: '我的购买',
                        },
                    },
                    name: 'personal-myBuy',
                    url: '../personal/myBuy.html',
                    slidBackEnabled: false,
                });

            }
        },
    });


     module.exports = {};

});
