define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var myPost = new Vue({
        el: '#myPost',
        template: _g.getTemplate('personal/myPost-main-V'),
        data: {
            title: '订单列表',
            list: []
        },
        created: function() {},
        methods: {
            onModifyPhone: function(index) {
                if(this.list[index].isPurchased){
                    _g.toast('已出售不能更改!');
                    return
                };
                _g.openWin({
                    header: {
                        data: {
                            title: '修改手机',
                        },
                    },
                    name: 'personal-modifyPhone',
                    url: '../personal/modifyPhone.html',
                    pageParam: {
                        phoneID: this.list[index]._id
                    },
                    slidBackEnabled: false,
                });
            },
            onSendPhone: function(index) {
                if(!this.list[index].isPurchased){
                    _g.toast('该商品还未被购买!');
                    return;
                }
                _g.openWin({
                    header: {
                        data: {
                            title: '确认发货',
                        },
                    },
                    name: 'personal-sendPhone',
                    url: '../personal/sendPhone.html',
                    slidBackEnabled: false,
                    pageParam: {
                        phoneID: this.list[index]._id
                    }
                });
            },
            onPhoneDetail: function(index) {
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
                        phoneID: this.list[index]._id
                    }
                });
            }
        },
    });

    function getPostList() {
        Http.ajax({
            data: {
                user: UserInfo._id
            },
            url: '/phone/list',
            // lock: false,
            success: function(ret) {
                if (ret.code == 200) {
                    myPost.list = ret.data
                } else {
                    _g.toast(ret.message);
                }
            },
            error: function(err) {}
        })
    }
    getPostList();
    api.addEventListener({
        nam:'modifyPhone'
    },function () {
        getPostList()
    })
    module.exports = {};

});
