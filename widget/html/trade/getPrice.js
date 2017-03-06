define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var UserInfo = new Vue({
        el: '#getPrice',
        template: _g.getTemplate('trade/getPrice-main-V'),
        data: {
           
        },
        created: function() {

        },
        methods: {},
    });

    module.exports = {};
});
