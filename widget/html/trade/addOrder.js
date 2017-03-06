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
        },
    });


     module.exports = {};

});
