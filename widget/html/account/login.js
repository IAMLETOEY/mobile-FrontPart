define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var type = api.pageParam.type; //获取上个页面的参数
    var id = api.pageParam.id;
    if (type == 'app') {
        $('#header').css('display', 'block');
        var header = _g.addHeader({
            template: '../html/common/header-login-V',
            data: {
                title: '登录'
            }
        });
    } else {
        $('#header').css('display', 'none');
    }
    var login = new Vue({
        el: '#login',
        template: _g.getTemplate('account/login-main-V'),
        data: {
            phoneNum: '',
            password: ''
        },
        created: function() {
            //打开页面时候的操作
        },
        ready: function() {
            //渲染完页面
        },
        filters: {
            'sex': function(data) {
                return data ? '男' : '女';
            }
        },
        methods: {
            onHomeTap: function() {
                api && api.openWin({
                    name: 'main-index-win',
                    url: '../../html/main/index.html?mod=dev',
                    bounces: false,
                    slidBackEnabled: false,
                    animation: { type: 'none' }
                });
                // api.closeWin();
                // alert(1)
                // api.sendEvent({
                //     name:'main-index-login',
                // });
                // Http.ajax({
                //     data: {
                //         // account:login.phoneNum,
                //         // password: login.password
                //     },
                //     isSync: true, //阻断异步打开界面传输机
                //     url: '', //接口地址
                //     success: function(ret) {
                //         if (ret.code == 200) {
                //             _g.toast(ret.msg);
                //             // var data = ret.data;
                //             api && api.openWin({
                //                 name: 'product-productList-win',
                //                 url: '../product/productList.html',
                //                 // bounces: false,
                //                 // slidBackEnabled: false,
                //                 pageParam: {
                //                     id: '1111',
                //                     aaa:'aaaa'
                //                 }
                //                 // animation: { type: 'none' }
                //             });
                //             // api.closeWin();
                //             _g.closeWins(['account-login-win'])
                //         } else {
                //             _g.toast(ret.msg);
                //         }
                //     },
                //     error: function(err) {}

                // })

            },
            onRegisterTap:function () {
               api && api.openWin({
                    name: 'account-register-win',
                    url: '../../html/account/register.html',
                    bounces: false,
                    slidBackEnabled: false,
                    animation: { type: 'none' }
                });
                // api.closeWin();
            }

        },
    });

    // function xx() {
    //     Http.ajax({
    //             data: {
    //                 account: login.phoneNum,
    //                 password: login.password
    //             },
    //             isSync: true, //阻断异步打开界面传数据
    //             url: '', //接口地址
    //             success: function(ret) {
    //                 if (ret.code == 200) {
    //                     _g.toast(ret.msg);
    //                     // var data = ret.data;
    //                     api && api.openWin({
    //                         name: 'product-productList-win',
    //                         url: '../product/productList.html',
    //                         // bounces: false,
    //                         // slidBackEnabled: false,
    //                         pageParam: {
    //                             id: '1111',
    //                             aaa: 'aaaa'
    //                         }
    //                         // animation: { type: 'none' }
    //                     });
    //                     // api.closeWin();
    //                     _g.closeWins(['account-login-win'])
    //                 } else {
    //                     _g.toast(ret.msg);
    //                 }
    //             },
    //             error: function(err) {}

    //         }) //进入页面后调用接口
    // }
    // xx();
    module.exports = {};
});
