define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var productList = new Vue({
        el: '#productList',
        template: _g.getTemplate('product/productList-main-V'),
        data: {
            title: '订单列表',
            root: CONFIG.HOST,
            list: [],
            rowList: [{
                pic: '../../image/swiper1.png',
                title: '旧物换钱'
            }, {
                pic: '../../image/swiper2.png',
                title: '环保'
            }, {
                pic: '../../image/swiper3.jpg',
                title: '新品推荐'
            }]
        },
        created: function() {

        },
        methods: {
            onDetailTap: function(index) {
                if (UserInfo.type == 2) {
                    _g.openWin({
                        header: {
                            data: {
                                title: '手机详情',
                            },
                        },
                        name: 'product-certifyDetail',
                        url: '../product/certifyDetail.html',
                        bounces: false,
                        slidBackEnabled: false,
                        pageParam: {
                            phoneID: productList.list[index]._id
                        }
                    });
                } else {
                    _g.openWin({
                        header: {
                            data: {
                                title: '商品详情',
                            },
                        },
                        name: 'product-productDetail',
                        url: '../product/productDetail.html',
                        bounces: false,
                        slidBackEnabled: false,
                        pageParam: {
                            phoneID: productList.list[index]._id
                        }
                    });
                }

            }
        },
    });

    var mySwiper = new Swiper('.swiper-container', {
        // direction: 'horizontal',
        loop: true,
        autoplay: 2000,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });

    function getProductList() {
        if (UserInfo.type == 2) {
            var isCertified = 1;
        } else {
            var isCertified = 0;
        }
        Http.ajax({
            data: {
                isCertified: isCertified,
                isMainPage:1
            },
            url: '/phone/list',
            lock: false,
            success: function(ret) {
                if (ret.code == 200) {
                    productList.list = ret.data;
                } else {
                    _g.toast(ret.msg);
                }
            },
            error: function(err) {}
        })
    }
    getProductList();

    api.addEventListener({
        name: 'postPhone'
    }, function() {
        getProductList()
    })
    module.exports = {};

});
