System.register(['angular2/platform/browser', 'angular2/core', './app.index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, core_1, app_index_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_index_1_1) {
                app_index_1 = app_index_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            browser_1.bootstrap(app_index_1.MainApp);
        }
    }
});
//# sourceMappingURL=app.loader.js.map