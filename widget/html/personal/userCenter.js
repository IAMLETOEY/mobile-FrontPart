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
            name: '我的购买',
           },{
            pic:'../../image/account/phone.png',
            name: '我的发布',
           },{
            pic:'../../image/account/setting.png',
            name: '我的设置',
           }],
           avatar: UserInfo.avatar,
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
                    url = '../personal/myBuy.html';
                } 
                else if (index == 1) {
                    name = 'personal-myPost';
                    url = '../personal/myPost.html';
                } else if (index == 2) {
                    name = 'personal-setInfo';
                    url = '../personal/setInfo.html';
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
    api.addEventListener({
        name:'updateAvatar'
    },function () {
        getAvatar()
    })
    function getAvatar() {
         Http.ajax({
            data: {},
            isSync: true,
            url: '/user/info',
            success: function(ret) {
                if (ret.code == 200) {
                    userCenter.avatar = ret.data.avatar;
                    _g.setLS('UserInfo', ret.data);
                } else {
                    _g.toast(ret.msg);
                }
            },
            error: function(err) {
                _g.toast(err)
            }
        });
    }
     module.exports = {};

});
