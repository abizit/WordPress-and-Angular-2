System.register(['angular2/platform/browser', './app.index', './data.service', 'angular2/http', "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_index_1, data_service_1, http_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_index_1_1) {
                app_index_1 = app_index_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            //enableProdMode();
            browser_1.bootstrap(app_index_1.MainApp, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, data_service_1.DataService]);
        }
    }
});
//# sourceMappingURL=app.loader.js.map