define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var UserInfo = new Vue({
        el: '#addPhone',
        template: _g.getTemplate('trade/addPhone-main-V'),
        data: {
            title: '订单列表',
            text: '小米note 32G 全网通',
        },
        created: function() {

        },
        methods: {},
    });

    var tmpl = '<li class="weui-uploader__file" style="background-image:url(#url#)"></li>',
        $gallery = $("#gallery"),
        $galleryImg = $("#galleryImg"),
        $uploaderInput = $("#uploaderInput"),
        $uploaderFiles = $("#uploaderFiles");

    $uploaderInput.on("change", function(e) {
        var src, url = window.URL || window.webkitURL || window.mozURL,
            files = e.target.files;
        for (var i = 0, len = files.length; i < len; ++i) {
            var file = files[i];

            if (url) {
                src = url.createObjectURL(file);
            } else {
                src = e.target.result;
            }

            $uploaderFiles.append($(tmpl.replace('#url#', src)));
        }
    });
    $uploaderFiles.on("click", "li", function() {
        $galleryImg.attr("style", this.getAttribute("style"));
        $gallery.fadeIn(100);
    });
    $gallery.on("click", function() {
        $gallery.fadeOut(100);
    });


    module.exports = {};
});
