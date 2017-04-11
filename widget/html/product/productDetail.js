define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    // var productID = api.pageParam.productID;
    var productDetail = new Vue({
        el: '#productDetail',
        template: _g.getTemplate('product/productDetail-main-V'),
        data: {
            title: '订单列表',
            pic: '../../image/httpmiao/402.jpg',
            text: '小米note 32G 全网通',
            imputedPrice: '899',
            sellerPrice: '799',
            list:[{
                id:'',
            }],
            tipShow:false
        },
        created: function() {

        },
        methods: {
            onCommentTap:function () {
                if (this.tipShow) {
                    this.tipShow=false;
                }else{
                    this.tipShow=true;
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


    module.exports = {};

});

