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
                pic: '../../image/swiper1.jpg',
                title: '测试测试'
            }, {
                pic: '../../image/swiper2.jpg',
                title: '测试测试'
            }, {
                pic: '../../image/swiper3.jpg',
                title: '测试测试'
            }]
        },
        created: function() {

        },
        methods: {
            onDetailTap: function(index) {
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
        Http.ajax({
            data: {},
            url: '/phone/list',
            lock: false,
            success: function(ret) {
                if (ret.code == 200) {
                    productList.list = ret.data;
                } else {
                    _g.toast(ret.message);
                }
            },
            error: function(err) {}
        })
    }
    getProductList();
    module.exports = {};

});
