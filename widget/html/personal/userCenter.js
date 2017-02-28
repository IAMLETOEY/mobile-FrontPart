define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var userCenter = new Vue({
        el: '#userCenter',
        template: _g.getTemplate('personal/userCenter-main-V'),
        data: {
           title:'用户中心',
           list:[{
            pic:'../../image/account/order.png',
            name: '我的订单',
           },{
            pic:'../../image/account/money.png',
            name: '我的钱包',
           },{
            pic:'../../image/account/phone.png',
            name: '我的发布',
           },{
            pic:'../../image/account/nickname.png',
            name: '我的认证',
           },{
            pic:'../../image/account/setting.png',
            name: '我的设置',
           }]
        },
        created: function() {

        },
        methods: {
        },
    });


     module.exports = {};

});
