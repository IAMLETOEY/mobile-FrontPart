define(function(require, exports, module) {
    var Http = require('U/http');
    var UserInfo = _g.getLS('UserInfo');
    var sessionID = _g.getLS('sessionID');
    var productID = api.pageParam.productID;
    var productDetail = new Vue({
        el: '#productDetail',
        template: _g.getTemplate('product/productDetail-main-V'),
        data: {
            title: '订单列表',
            pic: '../../image/httpmiao/402.jpg',
            text: '小米note 32G 全网通',
            imputedPrice: '899',
            sellerPrice: '799',
            list:[{
                id:'',
            }]
        },
        created: function() {
            this.title:'';
            this.list = [];
        },
        methods: {
            if(UserInfo){

            }
        },
    });

    // function getData(){
    //     Http.ajax({
    //         data:{

    //         },
    //         url:'',
    //         isSync:true,
    //         lock:false,
    //         success:function(ret){
    //             if(ret.code == 200){
    //                 setTimeout(function(){
    //                     productDetail.title = ret.data.title;
    //                 },0)
    //             }else{
    //                 _g.toast(ret.msg);
    //             }
    //         },
    //         error:function(err){}
    //     })
    // }

    // getData();

    getUserList();

    module.exports = {};
});
