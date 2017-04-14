define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var phoneID = api.pageParam.phoneID;
    var certifyDetail = new Vue({
        el: '#certifyDetail',
        template: _g.getTemplate('product/certifyDetail-main-V'),
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
            onModifyTap: function() {
                _g.openWin({
                    header: {
                        data: {
                            title: '修改手机',
                        },
                    },
                    name: 'personal-modifyPhone',
                    url: '../personal/modifyPhone.html',
                    slidBackEnabled: false,
                    pageParam: {
                        phoneID: phoneID
                    }
                });
            },
            onCertifyTap: function() {
                Http.ajax({
                    data: {
                        phone: phoneID
                    },
                    url: '/phone/certifyPhone',
                    lock: false,
                    success: function(ret) {
                        if (ret.code == 200) {
                            alert('修改成功!');
                            api && api.closeWin();
                        } else {
                            _g.toast(ret.msg);
                        }
                    },
                    error: function(err) {}
                })
            },
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
                    certifyDetail.addUser = ret.data.addUser;
                    certifyDetail.phoneInfo = ret.data;
                    certifyDetail.pic = CONFIG.HOST + ret.data.photo
                } else {
                    _g.toast(ret.msg);
                }
            },
            error: function(err) {}
        })
    };
    getPhoneDetail();
    module.exports = {};

});
