define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var phoneID = api.pageParam.phoneID;
    var productDetail = new Vue({
        el: '#productDetail',
        template: _g.getTemplate('product/productDetail-main-V'),
        data: {
            title: '',
            pic: '',
            text: '',
            imputedPrice: '',
            sellerPrice: '',
            phoneInfo: {},
            content: '',
            peopleContent: '',
            tipShow: false,
            peopleShow: false,
            peopleIndex: 0,
            commentList: [],
            addUser: {}
        },
        created: function() {

        },
        filters: {
            'trans-date': function(value) {
                var date = new Date(value);
                return date.Format('yyyy MM-dd hh:mm');
            }
        },
        methods: {
            onCommentTap: function() {
                if (this.tipShow) {
                    this.tipShow = false;
                } else {
                    this.tipShow = true;
                }
            },
            onOtherCommentTap: function(index) {
                if (this.peopleShow) {
                    this.peopleShow = false;
                } else {
                    this.peopleShow = true;
                }
                this.peopleIndex = index;

            },
            onBuyTap: function() {
                if(UserInfo._id == productDetail.phoneInfo.addUser){
                    _g.toast('不能购买自己发布的手机!');
                    return;
                }
                _g.openWin({
                    header: {
                        data: {
                            title: '添加订单',
                        },
                    },
                    name: 'trade-addOrder',
                    url: '../trade/addOrder.html',
                    slidBackEnabled: false,
                    pageParam: {
                        phoneID: phoneID
                    }
                });
            },
            onSureTap: function() {
                if (!productDetail.content) {
                    _g.toast('评论内容不能为空!');
                    return
                } else {
                    Http.ajax({
                        data: {
                            phone: phoneID,
                            content: productDetail.content
                        },
                        url: '/phone/addComment',
                        // lock: false,
                        success: function(ret) {
                            if (ret.code == 200) {
                                _g.toast('发表评论成功');
                                productDetail.tipShow = false;
                                productDetail.content = '';
                                productDetail.commentList = [];
                                getComment();
                            } else {
                                _g.toast(ret.message);
                            }
                        },
                        error: function(err) {}
                    })
                }

            },
            onOtherSureTap: function() {
                if (!productDetail.peopleContent) {
                    _g.toast('评论内容不能为空!');
                    return
                } else {
                    Http.ajax({
                        data: {
                            phone: phoneID,
                            response: productDetail.commentList[productDetail.peopleIndex].addUser,
                            content: productDetail.peopleContent
                        },
                        url: '/phone/addComment',
                        success: function(ret) {
                            if (ret.code == 200) {
                                _g.toast('评论他人成功');
                                productDetail.peopleShow = false;
                                productDetail.peopleContent = '';
                                productDetail.commentList = [];
                                getComment();
                            } else {
                                _g.toast(ret.message);
                            }
                        },
                        error: function(err) {}
                    })
                }
            }
        },
    });

    function getPhoneDetail() {
        Http.ajax({
            data: {
                phone: phoneID,
                isCertified: 1
            },
            url: '/phone/getPhone',
            lock: false,
            success: function(ret) {
                if (ret.code == 200) {
                    productDetail.addUser = ret.data.addUser;
                    productDetail.phoneInfo = ret.data;
                    productDetail.pic = CONFIG.HOST + ret.data.photo
                } else {
                    _g.toast(ret.message);
                }
            },
            error: function(err) {}
        })
    };

    function getComment() {
        Http.ajax({
            data: {
                phone: phoneID
            },
            url: '/phone/getComment',
            lock: false,
            success: function(ret) {
                if (ret.code == 200) {
                    productDetail.commentList = ret.data;
                } else {
                    _g.toast(ret.message);
                }
            },
            error: function(err) {}
        })
    };
    getPhoneDetail();
    getComment();
    module.exports = {};

});
