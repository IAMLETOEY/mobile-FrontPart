define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var UserInfo = new Vue({
        el: '#productDetail',
        template: _g.getTemplate('product/productDetail-main-V'),
        data: {
            title: '订单列表',
            pic: '../../image/httpmiao/402.jpg',
            text: '小米note 32G 全网通',
            imputedPrice: '899',
            sellerPrice: '799'
        },
        created: function() {

        },
        methods: {},
    });
    module.exports = {};
});
