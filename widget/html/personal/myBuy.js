define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var imageBrowser = api.require('imageBrowser');
    var openPic = [];
    var myBuy = new Vue({
        el: '#myBuy',
        template: _g.getTemplate('personal/myBuy-main-V'),
        data: {
            title: '订单列表',
            list: []
        },
        created: function() {

        },
        methods: {
            onSureTap: function(index) {
                if (this.list[index].status != 1) {
                    _g.toast('该交易状态不能确认收货!');
                    return;
                }
                Http.ajax({
                    data: {
                        order: this.list[index]._id,
                        isSure: 1,
                    },
                    url: '/order/receivePhone',
                    // lock: false,
                    success: function(ret) {
                        if (ret.code == 200) {
                            myBuy.list[index].status = 2;
                            _g.toast('确认收货成功!')
                        } else {
                            _g.toast(ret.msg);
                        }
                    },
                    error: function(err) {}
                })
            },
            onPhoneTap: function(index) {
                _g.openWin({
                    header: {
                        data: {
                            title: '手机详情',
                        },
                    },
                    name: 'product-productDetail',
                    url: '../product/productDetail.html',
                    slidBackEnabled: false,
                    pageParam: {
                        phoneID: this.list[index].phone
                    }
                });
            },
            onPhotoTap: function(index) {
                openPic = [];
                var a = CONFIG.HOST + myBuy.list[index].photo;
                openPic = openPic.push(a);
                imageBrowser.openImages({
                    // showList:false,
                    imageUrls:[a],
                });
                // _g.openWin({
                //     header: {
                //         data: {
                //             title: '订单列表',
                //         },
                //     },
                //     name: 'personal-orderList',
                //     url: '../personal/orderList.html',
                //     slidBackEnabled: false,
                // });
            }
        },
    });

    function getMyBuyList() {
        Http.ajax({
            data: {
                myBuy: 1
            },
            url: '/order/getOrderList',
            // lock: false,
            success: function(ret) {
                if (ret.code == 200) {
                    myBuy.list = ret.data
                } else {
                    _g.toast(ret.msg);
                }
            },
            error: function(err) {}
        })
    };
    getMyBuyList();
    module.exports = {};
});
