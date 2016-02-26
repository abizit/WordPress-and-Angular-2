System.register(['angular2/platform/browser', './app.index'], function(exports_1) {
    var browser_1, app_index_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_index_1_1) {
                app_index_1 = app_index_1_1;
            }],
        execute: function() {
            //enableProdMode();
            browser_1.bootstrap(app_index_1.MainApp);
        }
    }
});
//# sourceMappingURL=app.loader.js.map