define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var phoneID = api.pageParam.phoneID;
    var addOrder = new Vue({
        el: '#addOrder',
        template: _g.getTemplate('trade/addOrder-main-V'),
        data: {
            title: '订单列表',
            address: '',
            receiver: '',
            receiverPhone: '',
        },
        created: function() {

        },
        methods: {
            onPayTap: function() {
                if(!(addOrder.address && addOrder.receiver &&addOrder.receiverPhone)){
                    _g.toast('请填写收货信息!')
                    return;
                }
                Http.ajax({
                    data: {
                        phone: phoneID,
                        address: addOrder.address,
                        receiver: addOrder.receiver,
                        receiverPhone: addOrder.receiverPhone
                    },
                    url: '/order/buyPhone',
                    // lock: false,
                    success: function(ret) {
                        if (ret.code == 200) {
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
                            api && api.closeWin();
                        } else {
                            _g.toast(ret.msg);
                        }
                    },
                    error: function(err) {}
                })



            }
        },
    });


    module.exports = {};

});
