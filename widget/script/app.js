define(function(require, exports, module) {

    api && api.setFullScreen({
        fullScreen: false
    });

    api && api.setStatusBarStyle({
        style: 'light'
    });

    if (window.APPMODE == 'dev' && !window.location.host) {
        api.clearCache();
        api.removeLaunchView();

        var path = _g.getLS('DEV_PATH');

        if (path) {
            api.confirm({
                title: '提示',
                msg: '使用历史记录地址',
                buttons: ['确定', '取消']
            }, function(ret, err) {
                if (ret.buttonIndex == 1) {
                    openDev(path);
                } else {
                    inputPath();
                }
            });
        } else {
            inputPath();
        }

        // var config = require('config');
        // var url = 'http://' + config.host + ':' + config.port;

        function openDev(path) {
            api.openWin({
                name: 'dev-win',
                url: path + '/index.html?isApp=1',
                bounces: false,
                slidBackEnabled: false,
                pageParam: { key: 'value' },
                animation: { type: 'none' }
            });
        }

        function inputPath() {
            api.prompt({
                buttons: ['确定', '取消']
            }, function(ret, err) {
                if (ret.buttonIndex == 1) {
                    path = 'http://' + ret.text;
                    _g.setLS('DEV_PATH', path);
                    openDev(path);
                } else {
                    api.closeWidget({
                        silent: true
                    });
                }
            });
        }

        return
    }

    // _g.rmLS('isFirstStart');
    // _g.rmLS('UserInfo');

    // 如果是第一次打开app, 启动引导页
    // if (!_g.getLS('isFirstStart')) {
    //     api && api.openWin({
    //         name: 'leading-index-win',
    //         url: './html/leading/index.html',
    //         bounces: false,
    //         slidBackEnabled: false
    //     });
    //     return
    // }

    var startTime = new Date().getTime();
    var LastTime = _g.getLS('LastTime');
    if (!LastTime) _g.setLS('LastTime', startTime);
    if (startTime - LastTime > 7 * 24 * 60 * 60 * 1000) {
        _g.rmLS('UserInfo');
    }
    _g.setLS('LastTime', startTime);

    api.removeLaunchView();

    function openMainPage() {
        api && api.openWin({
            name: 'main-index-win',
            url: './html/main/index.html',
            bounces: false,
            slidBackEnabled: false,
            animation: { type: 'none' }
        });
    }

    function openLoginPage() {
        api && api.openWin({
            name: 'account-login-win',
            url: './html/account/login.html',
            bounces: false,
            slidBackEnabled: false,
            animation: { type: 'none' }
        });
    }

    if(_g.getLS('UserInfo')){
        openMainPage();
    }else{
        openLoginPage();
    }

    api.addEventListener({
        name: 'shake'
    }, function(ret, err) {
        if (window.APPMODE == 'pub') return;
        api.alert({
            title: '当前代码版本为:',
            msg: window.VERSION,
        }, function(ret, err) {

        });
    });

    module.exports = {};

});
