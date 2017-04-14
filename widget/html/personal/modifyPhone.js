define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var phoneID = api.pageParam.phoneID;
    var modifyPhone = new Vue({
        el: '#modifyPhone',
        template: _g.getTemplate('personal/modifyPhone-main-V'),
        data: {
            model: '苹果',
            modelName: '',
            net: '',
            internal: '',
            RAM: '',
            color: '',
            buyChannel: '',
            warranty: false,
            border: '',
            screen: '',
            maintenance: '',
            failure: '',
            sellerPrice: 0,
            isAdmin: UserInfo.type == 2?0:1
        },
        created: function() {

        },
        methods: {
            onSubmitModify: function() {
                if (UserInfo.type == 2) {
                    Http.ajax({
                        data: {
                            phone: phoneID,
                            net: modifyPhone.net,
                            internal: modifyPhone.internal,
                            RAM: modifyPhone.RAM,
                            color: modifyPhone.color,
                            buyChannel: modifyPhone.buyChannel,
                            warranty: modifyPhone.warranty,
                            border: modifyPhone.border,
                            screen: modifyPhone.screen,
                            maintenance: modifyPhone.maintenance,
                            failure: modifyPhone.failure,
                            sellerPrice: modifyPhone.sellerPrice,
                        },
                        url: '/phone/certifyPhone',
                        // lock: false,
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
                } else {
                    Http.ajax({
                        data: {
                            phone: phoneID,
                            net: modifyPhone.net,
                            internal: modifyPhone.internal,
                            RAM: modifyPhone.RAM,
                            color: modifyPhone.color,
                            buyChannel: modifyPhone.buyChannel,
                            warranty: modifyPhone.warranty,
                            border: modifyPhone.border,
                            screen: modifyPhone.screen,
                            maintenance: modifyPhone.maintenance,
                            failure: modifyPhone.failure,
                            sellerPrice: modifyPhone.sellerPrice,
                        },
                        url: '/phone/modifyPhone',
                        // lock: false,
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
                }

            }
        },
    });

    function getPhone() {
        Http.ajax({
            data: {
                phone: phoneID,
                modifyQuery: 1
            },
            url: '/phone/getPhone',
            // lock: false,
            success: function(ret) {
                if (ret.code == 200) {
                    modifyPhone.model = ret.data.model,
                        modifyPhone.net = ret.data.net,
                        modifyPhone.internal = ret.data.internal,
                        modifyPhone.RAM = ret.data.RAM,
                        modifyPhone.color = ret.data.color,
                        modifyPhone.buyChannel = ret.data.buyChannel,
                        modifyPhone.warranty = ret.data.warranty ? 1 : 2,
                        modifyPhone.border = ret.data.border,
                        modifyPhone.screen = ret.data.screen,
                        modifyPhone.maintenance = ret.data.maintenance,
                        modifyPhone.failure = ret.data.failure,
                        modifyPhone.sellerPrice = ret.data.sellerPrice
                } else {
                    _g.toast(ret.msg);
                }
            },
            error: function(err) {}
        })
    }
    getPhone();
    module.exports = {};
});
