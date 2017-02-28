define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var UserInfo = new Vue({
        el: '#orderList',
        template: _g.getTemplate('personal/orderList-main-V'),
        data: {
           title:'订单列表',
           list:[{
            price:2400,
            address:'广东省广州市天河区棠东东路东岳商业大厦302',
            transport:427512196112,
            status:'已发货',
            product:'小米note 64G 竹壳版 全网通'
           },{
            price:890,
            address:'广东省广州市天河区棠东东路东岳商业大厦302',
            transport:427512196112,
            status:'已发货',
            product:'小米note'
           }]
        },
        created: function() {

        },
        methods: {
        },
    });


     module.exports = {};

});
