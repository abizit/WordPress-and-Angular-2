System.register(['angular2/core', "angular2/router", './post.component', './post-detail.component', "./data.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, post_component_1, post_detail_component_1, data_service_1;
    var MainApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (post_component_1_1) {
                post_component_1 = post_component_1_1;
            },
            function (post_detail_component_1_1) {
                post_detail_component_1 = post_detail_component_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            MainApp = (function () {
                function MainApp(_dataService) {
                    this._dataService = _dataService;
                    this.fetchData();
                }
                MainApp.prototype.fetchData = function () {
                    return this._dataService.getData().subscribe(function (data) { return localStorage.setItem("load-data", JSON.stringify(data)); });
                };
                MainApp = __decorate([
                    core_1.Component({
                        selector: 'post-app',
                        providers: [router_1.ROUTER_PROVIDERS]
                    }),
                    core_1.View({
                        templateUrl: '../templates/navigation.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/posts',
                            name: 'Posts',
                            component: post_component_1.PostComponent
                        },
                        {
                            path: '/posts/:id',
                            name: 'PostDetail',
                            component: post_detail_component_1.PostDetail
                        }
                    ]), 
                    __metadata('design:paramtypes', [data_service_1.DataService])
                ], MainApp);
                return MainApp;
            }());
            exports_1("MainApp", MainApp);
        }
    }
});
//# sourceMappingURL=app.index.js.map