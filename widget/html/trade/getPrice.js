define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var phoneID = api.pageParam.phoneID;
    var price = api.pageParam.price;
    var getPrice = new Vue({
        el: '#getPrice',
        template: _g.getTemplate('trade/getPrice-main-V'),
        data: {
            price: '' + price,
            sellerPrice: price,
            phone: phoneID,
            picture: ''
        },
        created: function() {

        },
        methods: {
            onPicTap: function() {
                _g.openPicActionSheet({
                    allowEdit: true,
                    suc: function(ret) {
                        postPhoto(getPrice.phone,ret.base64Data)
                    }
                });
            },
            onPostPhone: function() {
                if (! getPrice.picture){
                    _g.toast('请先上传图片')
                    return;
                }
                    Http.ajax({
                        data: {
                            price: getPrice.price,
                            sellerPrice: getPrice.sellerPrice,
                            phone: getPrice.phone,
                            isPost: 1
                        },
                        isSync: true,
                        url: '/phone/modifyPhone',
                        success: function(ret) {
                            if (ret.code == 200) {
                                _g.openWin({
                                    header: {
                                        data: {
                                            title: '我的发布',
                                        },
                                    },
                                    name: 'personal-myPost',
                                    url: '../personal/myPost.html',
                                    slidBackEnabled: false,
                                });

                                setTimeout(_g.toast('发布成功'), 2000);
                                api && api.closeWin();
                            } else {
                                _g.toast(ret.msg);
                            }
                        },
                        error: function(err) {}
                    });
            },
            onBack: function() {
                api && api.closeWin();
            }
        },
    });

    function postPhoto(phoneID,data) {
        Http.ajax({
            data: {
                _id: phoneID,
                base64: data.split(',')[1]
            },
            isSync: true,
            url: '/phone/addPhonePicture',
            success: function(ret) {
                if (ret.code == 200) {
                    getPrice.picture = 1;
                    _g.toast('图片上传成功');
                } else { 
                    _g.toast(ret.msg);
                }
            },
            error: function(err) {}
        });
    }

    module.exports = {};
});
