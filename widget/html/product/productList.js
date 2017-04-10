define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var UserInfo = new Vue({
        el: '#productList',
        template: _g.getTemplate('product/productList-main-V'),
        data: {
            title: '订单列表',
            list: [{
                id: 1,
                pic: '../../image/httpmiao/401.jpg',
                text: '小米note 32G 全网通',
                imputedPrice: '899',
                sellerPrice: '799'
            }, {
                pic: '../../image/httpmiao/402.jpg',
                text: '小米note 32G 全网通',
                imputedPrice: '899',
                sellerPrice: '799'
            }, {
                pic: '../../image/httpmiao/403.jpg',
                text: '小米note 32G 全网通',
                imputedPrice: '899',
                sellerPrice: '799'
            }, {
                pic: '../../image/httpmiao/404.jpg',
                text: '小米note 32G 全网通',
                imputedPrice: '899',
                sellerPrice: '799'
            }],
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

                        // template: template,
                    },
                    name: 'product-productDetail',
                    url: '../product/productDetail.html',
                    // bounces: false,
                    slidBackEnabled: false,
                });
            }
        },
    });

    //微信搜索框
    var $searchBar = $('#searchBar'),
        $searchResult = $('#searchResult'),
        $searchText = $('#searchText'),
        $searchInput = $('#searchInput'),
        $searchClear = $('#searchClear'),
        $searchCancel = $('#searchCancel');

    function hideSearchResult() {
        $searchResult.hide();
        $searchInput.val('');
    }

    function cancelSearch() {
        hideSearchResult();
        $searchBar.removeClass('weui-search-bar_focusing');
        $searchText.show();
    }

    $searchText.on('click', function() {
        $searchBar.addClass('weui-search-bar_focusing');
        $searchInput.focus();
    });
    $searchInput
        .on('blur', function() {
            if (!this.value.length) cancelSearch();
        })
        .on('input', function() {
            if (this.value.length) {
                $searchResult.show();
            } else {
                $searchResult.hide();
            }
        });
    $searchClear.on('click', function() {
        hideSearchResult();
        $searchInput.focus();
    });
    $searchCancel.on('click', function() {
        cancelSearch();
        $searchInput.blur();
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


    })
    module.exports = {};

});
