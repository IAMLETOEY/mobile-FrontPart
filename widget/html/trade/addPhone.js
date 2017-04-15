define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var PhoneInfo = new Vue({
        el: '#addPhone',
        template: _g.getTemplate('trade/addPhone-main-V'),
        data: {
            model: '苹果',
            modelName: '',
            net: '',
            internal: '',
            RAM: 1,
            color: '',
            buyChannel: '',
            warranty: false,
            border: '',
            screen: '',
            maintenance: '',
            failure: ''
        },
        created: function() {

        },
        methods: {
            onCheckPhone: function() {
                if (!(this.modelName && this.net && this.internal && this.RAM && this.color && this.buyChannel && this.border && this.screen && this.maintenance)) {
                    _g.toast('请补充完善信息!');
                    return;
                }
                if(this.RAM > 6 || this.RAM < 1){
                    _g.toast('请检查运行内存信息!');
                    return;
                }
                Http.ajax({
                    data: {
                        model: PhoneInfo.model,
                        modelName: PhoneInfo.modelName,
                        net: PhoneInfo.net,
                        internal: PhoneInfo.internal,
                        RAM: PhoneInfo.RAM,
                        color: PhoneInfo.color,
                        buyChannel: PhoneInfo.buyChannel,
                        warranty: PhoneInfo.warranty ? 1 : 2,
                        border: PhoneInfo.border,
                        screen: PhoneInfo.screen,
                        maintenance: PhoneInfo.maintenance,
                        failure: PhoneInfo.failure
                    },
                    url: '/phone/imputedPrice',
                    // lock: false,
                    success: function(ret) {
                        if (ret.code == 200) {
                            _g.openWin({
                                header: {
                                    data: {
                                        title: '估算价格',
                                    },
                                },
                                name: 'trade-getPrice',
                                url: '../trade/getPrice.html',
                                slidBackEnabled: false,
                                pageParam: {
                                    phoneID: ret.data.phoneID,
                                    price: ret.data.price
                                }
                            });
                        } else {
                            _g.toast(ret.msg);
                        }
                    },
                    error: function(err) {}
                })
            }
        },
    });
    module.exports = {};
});
