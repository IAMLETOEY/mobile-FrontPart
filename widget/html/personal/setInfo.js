define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var imageBrowser = api.require('imageBrowser');
    var openPic = [];
    var setInfo = new Vue({
        el: '#setInfo',
        template: _g.getTemplate('personal/setInfo-main-V'),
        data: {
            title: '用户设置',
            list: [],
            UserInfo: UserInfo,
            avatar: UserInfo.avatar,
        },
        created: function() {},
        methods: {
            onLookPicTap: function() {
                if (getPrice.addPic == '') {
                    return;
                }
                openPic = [];
                var a = CONFIG.HOST + getPrice.addPic;
                openPic = openPic.push(a);
                imageBrowser.openImages({
                    imageUrls: [a],
                });
            },
            onCancel: function() {
                api.closeWin();
            },
            onSure: function() {
                var UserInfo = this.UserInfo;
                Http.ajax({
                    data: this.UserInfo,
                    url: '/user/update',
                    // lock: false,
                    success: function(ret) {
                        if (ret.code == 200) {
                            _g.setLS('UserInfo', UserInfo);
                            _g.toast('修改成功');
                            api.closeWin();
                        } else {
                            _g.toast(ret.message);
                        }
                    },
                    error: function(err) {}
                })
            },
            onPicTap: function() {
                _g.openPicActionSheet({
                    allowEdit: true,
                    suc: function(ret) {
                        if (!ret.base64Data) {
                            return;
                        } else {
                            postPhoto(ret.base64Data)
                        }
                    }
                });
            },
        },
    });

    function postPhoto(data) {
        Http.ajax({
            data: {
                base64: data.split(',')[1]
            },
            isSync: true,
            url: '/user/avatar',
            success: function(ret) {
                if (ret.code == 200) {
                    _g.toast('头像上传成功');
                    UserInfo.avatar = ret.data.avatar;
                    _g.setLS('UserInfo', UserInfo);
                    getAvatar();
                    api.sendEvent({
                        name:'updateAvatar'
                    });
                } else {
                    _g.toast(ret.msg);
                }
            },
            error: function(err) {}
        });
    };
    function getAvatar() {
         Http.ajax({
            data: {},
            isSync: true,
            url: '/user/info',
            success: function(ret) {
                if (ret.code == 200) {
                    setInfo.avatar = ret.data.avatar;

                    alert(setInfo.avatar)
                    _g.setLS('UserInfo', ret.data);
                } else {
                    _g.toast(ret.msg);
                }
            },
            error: function(err) {
                _g.toast(err)
            }
        });
    }
    module.exports = {};
});
