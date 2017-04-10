define(function(require, exports, module) {
    var Http = require('U/http');
    var headerHeight = 0;
    var footerHeight = 0;
    // var windowHeight = window.innerHeight;
    // var messageRead = setInterval(getMessageRead, 300000);
    var UserInfo = _g.getLS('UserInfo');
    var pageIndex = 1;
    var pageSize = 10;
    var unReadMsg = new Array();
    var header = new Vue({
        el: '#header',
        template: _g.getTemplate('main/header-search-V'),
        data: {
            isHome: true,
            isAllMatch: false,
            isPersonal: false,
            active: 0,
            title: '足球推荐',
            isHome: 1,
            list: [
                '足球推荐',
                '全部赛事',
                '个人中心'
            ],
        },
        methods: {
           
        }
    });
    // var header = new Vue({
    //     el: '#header',
    //     template: _g.getTemplate('main/header-search-V'),
    //     data: {
    //         title: '足球推荐',
    //     },
    //     methods: {

    //     }
    // });
    var footer = new Vue({
        el: '#footer',
        template: _g.getTemplate('main/footer-V'),
        data: {
            show: true,
            active: 0,
            list: [{
                title: '首页',
                tag: 'home',
            }, {
                title: '全部赛事',
                tag: 'allMatch'
            }, {
                title: '个人中心',
                tag: 'personal'
            }]
        },
        // methods: {
        //     onItemTap: function(index) {
        //         if (this.active == index) return;
        //         if (index == 0) {
        //             header.isHome = true;
        //             header.isAllMatch = false;
        //             header.isPersonal = false;
        //             api.sendEvent({
        //                 name: 'home-home-refresh'
        //             })
        //         } else if (index == 1) {
        //             header.isHome = false;
        //             header.isAllMatch = true;
        //             header.isPersonal = false;
        //             api.sendEvent({
        //                 name: 'home-allMatch-refresh'
        //             })

        //         } else if (index == 2) {
        //             header.isHome = false;
        //             header.isAllMatch = false;
        //             header.isPersonal = true;
        //             api.sendEvent({
        //                 name: 'home-personal-refresh'
        //             })
        //         } else
        //             header.title = this.list[index].title;
        //         setFrameGroupIndex(index);
        //     },
        // }
    });

    function setFrameGroupIndex(index) {
        api && api.setFrameGroupIndex({
            name: 'main-group',
            index: index,
            scroll: false
        });
    }

    function openFrameGroup() {
        headerHeight = $('#header').offset().height;
        footerHeight = $('#footer').height();
        _g.setLS('appH', {
            'header': headerHeight,
            'footer': footerHeight,
            'win': windowHeight
        });
        api && api.openFrameGroup({
            name: 'main-group',
            scrollEnabled: false,
            rect: {
                x: 0,
                y: headerHeight,
                w: 'auto',
                h: windowHeight - headerHeight - footerHeight
            },
            index: 0,
            preload: 0,
            frames: [{
                name: 'product-productList-frame',
                url: '../product/productList.html',
                bounces: true,
                bgColor: '#ededed',
            }, {
                name: 'home-allMatch-frame',
                url: '../home/allMatch.html?mod=dev',
                bounces: true,
                bgColor: '#ededed',
            }, {
                name: 'home-personal-frame',
                url: '../home/personal.html',
                bounces: true,
                bgColor: '#ededed',
            }]
        }, function(ret, err) {
            footer.active = ret.index;
        });
    }

    setTimeout(function() {
        openFrameGroup(0)
    }, 200);
    api && api.addEventListener({
        name: 'main-index-login'
    }, function(ret, err) {
        setFrameGroupIndex(0)
    });


    api && api.addEventListener({
        name: 'account-login-success'
    }, function(ret, err) {
        setFrameGroupIndex(0)
    });
    api && api.addEventListener({
        name: 'keyback'
    }, function(ret, err) {
        api.closeWidget();
    });
    module.exports = {};

});
