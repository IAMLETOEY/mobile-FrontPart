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
          onToTap:function (index) {
            var head = userCenter.list[index].name;
                var name = '';
                var url = '';
                var template = '';
                if (index == 0) {
                    name = 'personal-myBuy';
                    url = './myBuy.html';
                } 
                else if (index == 1) {
                    // name = 'personal-myLocation';
                    // url = '../personal/myLocation.html';
                    template = 'common/header-save-V';
                } else if (index == 2) {
                    name = 'personal-myPost';
                    url = './myPost.html';
                }
                else if (index == 3) {
                    // name = 'personal-joinIn';
                    // url = '../personal/joinIn.html';
                } else if (index == 4) {
                    name = 'personal-setInfo';
                    url = './setInfo.html';
                }
                _g.openWin({
                    header: {
                        data: {
                            title: head,
                        },
                        // template: template,
                    },
                    name: name,
                    url: url,
                    // bounces: false,//页面弹动
                    slidBackEnabled: false,
                });
          }
        },
    });


     module.exports = {};

});
