define(function(require, exports, module) {
    var type = api.pageParam.type;
    var freeback = api.pageParam.freeback;
    var orderDetail = api.pageParam.orderDetail;
    var tradeNo = api.pageParam.tradeNo;
    var serviceTypeList = api.pageParam.serviceTypeList;
    var money = 0;
    var UserInfo = _g.getLS('UserInfo') || null;
    var Http = require('U/http');

    var main = new Vue({
        el: '#main',
        template: _g.getTemplate('popup/' + type),
        data: {
            money: 0,
            serviceTypeList: [{
                id: 1,
                title: '开锁'
            }],
        },
        created: function() {
            this.money = '';
            this.serviceTypeList = serviceTypeList;
        },
        methods: {
            onOrderPayTap: function() {
                var moneyReg = /^\d{0,8}\.{0,1}(\d{1,2})?$/;
                if (Number(this.money) + '' == 'NaN') {
                    _g.toast('请输入数字金额');
                    this.money = '';
                } else if (!moneyReg.test(this.money)) {
                    _g.toast('不能超过2位小数');
                } else if (this.money <= 0) {
                    _g.toast('金额不能低于0元');
                } else {
                    money = this.money
                    Http.ajax({
                        data: {
                            id: orderDetail.id,
                            servicePrice: Number(this.money)
                        },
                        url: '/app/order/balance.do',
                        isSync: true,
                        lock: false,
                        success: function(ret) {
                            if (ret.code == 200) {
                                _g.openWin({
                                    header: {
                                        data: {
                                            title: '支付订单',
                                        },
                                    },
                                    name: 'order-orderPay',
                                    url: '../order/orderPay.html',
                                    bounces: true,
                                    slidBackEnabled: false,
                                    pageParam: {
                                        // money: money,
                                        // orderDetail: orderDetail
                                        data: ret.data,
                                        serviceTitle: orderDetail.serviceTitle
                                    }
                                });
                                setTimeout(function() {
                                    api.closeFrame({
                                        name: 'popup-inputMoney-frame',
                                    });
                                }, 100);
                            } else {
                                _g.toast(ret.message);
                            }
                        },
                    })

                }
            },
            onCloseInputMoneyTap: function() {
                api.closeFrame({
                    name: 'popup-inputMoney-frame'
                });
            },
            onCommentTap: function() {
                api.closeFrame({
                    name: 'popup-success-frame'
                });
                _g.closeWins(['order-orderPay-win', 'order-orderStatus-win', 'order-onlinePayment-win']);
                _g.openWin({
                    header: {
                        data: {
                            title: '评价技工',
                        },

                        template: 'common/header-complaint-V',
                    },
                    name: 'order-commentWorker',
                    url: '../order/commentWorker.html',
                    slidBackEnabled: false,
                });
            },
            onCloseSuccessPayTap: function() {
                api.closeFrame({
                    name: 'popup-success-frame'
                });
            },
            onSelectServiceCencelTap: function() {
                api.closeFrame({
                    name: 'popup-selectService-frame'
                });
            },
            ononSelectServiceSureTap: function() {
                var serviceClassifyId = $('[name="serviceType"]:checked').val();
                var serviceClassifyName = $('[name="serviceType"]:checked').next().text();
                var data = {
                    serviceClassifyId: serviceClassifyId,
                    serviceClassifyName: serviceClassifyName
                };

                api.execScript({
                    name: 'order-workDetail-win',
                    script: 'onSelectServiceType(' + _g.j2s(data) + ');'
                });

                api.closeFrame({
                    name: 'popup-selectService-frame'
                });

                // api.closeFrame({
                //     name: 'order-workDetail'
                // });
                // _g.closeWins(['order-allServiceNav-win','service-detail-win', 'order-nearWorkerList-win']);
            },
            onCloseNotFinishOrderTap: function() {
                api.closeFrame();
                // api.closeFrame({
                //     name: 'popup-notFinishOrder-frame'
                // });
            },
            onSufferProblemPayCencelTap: function() {
                // api.execScript({
                //     name: 'main-index-win',
                //     frameName: 'home-home-frame',
                //     script: 'onCheckOrder()'
                // });
                // api.closeFrame({
                //     name: 'popup-sufferProblemPay-frame'
                // });
                checkOrderPay();

            },
            onAgainPayTap: function() {
                api.execScript({
                    name: 'order-onlinePayment-win',
                    frameName: 'order-onlinePayment-frame',
                    script: 'againApply()'
                });
                // api.closeFrame({
                //     name: 'popup-sufferProblemPay-frame'
                // });
            },

        },
    });

    function checkOrderPay() {
        Http.ajax({
            data: {
                tradeNo: tradeNo
            },
            url: '/app/order/check.do',
            lock: false,
            success: function(ret) {
                if (ret.code == 200) {
                    _g.openWin({
                        header: {
                            data: {
                                title: '评价技工',
                            },
                            template: 'common/header-complaint-V',
                        },
                        name: 'order-commentWorker',
                        url: '../order/commentWorker.html',
                        slidBackEnabled: false,
                    });
                } else {
                    alert('本次支付还没到账, 请稍后查询订单状态, 或者联系客服查询本次支付结果');
                    _g.closeWins(['order-orderPay-win', 'order-onlinePayment-win']);
                    api.closeFrame({
                        name: 'popup-sufferProblemPay-frame'
                    });
                    api.sendEvent({
                        name: 'main-index-toOrder',
                    });
                }
            }
        });
    }

    module.exports = {};

});
