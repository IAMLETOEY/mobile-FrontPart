define(function(require, exports, module) {

    api.call({
        type: 'tel_prompt',
        number: '10086'
    });



    _g.viewAppear(function() {
        alert(1)
        api.openWin({
            name: 'main-index-win',
            url: 'index.html',
            pageParam: {
                name: 'value'
            }
        });
    })

    // alert(new Date('10 28,2016 11:11:11'))

    module.exports = {};

});
