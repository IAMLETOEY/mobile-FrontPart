define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var imageBrowser = api.require('imageBrowser');
    var openPic = [];
    var phoneID = api.pageParam.phoneID;
    var sendPhone = new Vue({
        el: '#sendPhone',
        template: _g.getTemplate('personal/sendPhone-main-V'),
        data: {
            transport: 0,
            picture: 0,
            addPic: '',
        },
        created: function() {

        },
        methods: {
            onLookPicTap: function() {
                if (sendPhone.addPic == '') {
                    return;
                }
                openPic = [];
                var a = CONFIG.HOST + sendPhone.addPic;
                openPic = openPic.push(a);
                imageBrowser.openImages({
                    imageUrls: [a],
                });
            },
            onPicTap: function() {
                _g.openPicActionSheet({
                    allowEdit: true,
                    suc: function(ret) {
                        if (!ret.base64Data) {
                            return;
                        } else {
                            postPhoto(ret.base64Data, phoneID)
                        }
                    }
                });
            },
            onPostPhone: function() {
                if (!(this.picture && this.transport)) {
                    _g.toast('请先填写信息并上传图片!')
                    return;
                }
                Http.ajax({
                    data: {
                        isUpdate: 1,
                        phoneID: phoneID,
                        transport: sendPhone.transport
                    },
                    isSync: true,
                    url: '/order/receivePhone',
                    success: function(ret) {
                        if (ret.code == 200) {
                            _g.toast('修改成功')
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

    function postPhoto(data, phoneID) {
        Http.ajax({
            data: {
                phoneID: phoneID,
                base64: data.split(',')[1]
            },
            isSync: true,
            url: '/order/addOrderPicture',
            success: function(ret) {
                if (ret.code == 200) {
                    sendPhone.picture = 1;
                    sendPhone.addPic = ret.data.picture;
                    _g.toast('图片上传成功');
                } else {
                    // _g.toast(ret.msg);
                }
            },
            error: function(err) {}
        });
    }

    module.exports = {};
});
