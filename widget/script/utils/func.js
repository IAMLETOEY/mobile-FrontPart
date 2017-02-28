define(function(require, exports, module) {

    // baseWin头部操作事件

    function Func() {
        this['home-home'] = {
            onTapLeftRemind: function() {
                api && api.sendEvent({
                    name: 'home-home-remind',
                });
            },
            onTapRightSearch: function() {
                api && api.sendEvent({
                    name: 'home-home-search',
                });
            }
        },
        this['home-allMatch'] = {
            onTapLeftRemind: function() {
                api && api.sendEvent({
                    name: 'home-allMatch-remind',
                });
            },
            onTapRightSelect: function() {
                api && api.sendEvent({
                    name: 'home-allMatch-select',
                });
            }
        },
        this['search-index'] = {
            onSearchInput: function() {
                this.isSearchInput = !!this.searchText;
                if (!this.isSearchInput) return;
                // api && api.sendEvent({
                //     name: 'index-search-nameList',
                //     extra: {
                //         goods_name: this.searchText
                //     }
                // });
            },
            onSearchClearTap: function() {
                this.searchText = '';
                this.isSearchInput = false;
            },
            onTapRightBtn: function() {
                if (!this.isSearchInput) return;
                api && api.sendEvent({
                    name: 'search-index-search',
                    extra: {
                        searchText: this.searchText
                    }
                });
            }
        };
        this['setting-user'] = {
            onTapRightBtn: function() {
                api.sendEvent({
                    name: 'setting-user-save',
                });
            }
        };
        this['match-recommendDetail']={
            onTapRightBtn:function(){
                if(this.follow == false) {
                   this.follow = true; 
                } else {
                    this.follow = false;
                }
                api.sendEvent({
                    name: 'match-recommendDetail-follow',
                });
            }
        };
        this['message-index'] = {
            onTapRightBtn: function() {
                api.sendEvent({
                    name: 'message-index-edit',
                });
            }
        };
        this['me-answer'] = {
            onTapRightBtn: function() {
                api.sendEvent({
                    name: 'me-answer-edit',
                });
            }
        };
    }

    Func.prototype = {
        get: function(page) {
            return this[page] || {}
        }
    };

    Func.prototype.constructor = Func;

    module.exports = new Func();

});
