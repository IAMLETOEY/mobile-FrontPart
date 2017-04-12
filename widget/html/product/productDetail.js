define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var phoneID = api.pageParam.phoneID;
    var productDetail = new Vue({
        el: '#productDetail',
        template: _g.getTemplate('product/productDetail-main-V'),
        data: {
            title: '',
            pic: '',
            text: '',
            imputedPrice: '',
            sellerPrice: '',
            phoneInfo:{},
            tipShow: false
        },
        created: function() {

        },
        methods: {
            onCommentTap: function() {
                if (this.tipShow) {
                    this.tipShow = false;
                } else {
                    this.tipShow = true;
                }
            },
            onBuyTap: function() {
                _g.openWin({
                    header: {
                        data: {
                            title: '添加订单',
                        },
                    },
                    name: 'trade-addOrder',
                    url: '../trade/addOrder.html',
                    slidBackEnabled: false,
                });

            }
        },
    });

    function getPhoneDetail() {
        Http.ajax({
            data: {
                phone: phoneID
            },
            url: '/phone/getPhone',
            lock: false,
            success: function(ret) {
                if (ret.code == 200) {
                    productDetail.phoneInfo = ret.data;
                    productDetail.pic = CONFIG.HOST + ret.data.photo
                } else {
                    _g.toast(ret.message);
                }
            },
            error: function(err) {}
        })
    };
    getPhoneDetail();
    module.exports = {};

});
