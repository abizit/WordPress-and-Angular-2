System.register(['angular2/core', 'angular2/router', './data.service'], function(exports_1, context_1) {
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
    var core_1, router_1, data_service_1;
    var PostDetail;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }],
        execute: function() {
            PostDetail = (function () {
                function PostDetail(_dataService, _routerParams) {
                    this._dataService = _dataService;
                    this._routerParams = _routerParams;
                }
                PostDetail.prototype.ngOnInit = function () {
                    var id = +this._routerParams.get('id');
                    this.getPost(id);
                };
                PostDetail.prototype.getPost = function (id) {
                    var _this = this;
                    var lcs = localStorage.getItem('load-data');
                    // Check if localstorage has 'load-data array'
                    if (lcs != null) {
                        // returns localStorage Data
                        console.log('Loaded Data');
                        this.post = this._dataService.getPostByID(id);
                    }
                    else {
                        // Make a new http.get request
                        this._dataService.getData().subscribe(function (data) {
                            _this.posts = data;
                            _this.post = _this.posts.filter(function (post) { return post.id === id; })[0];
                        });
                        console.log('New Data');
                    }
                };
                PostDetail = __decorate([
                    core_1.Component({
                        selector: 'post-detail'
                    }),
                    core_1.View({
                        templateUrl: '../templates/template-post-detail.html'
                    }), 
                    __metadata('design:paramtypes', [data_service_1.DataService, router_1.RouteParams])
                ], PostDetail);
                return PostDetail;
            }());
            exports_1("PostDetail", PostDetail);
        }
    }
});
//# sourceMappingURL=post-detail.component.js.map