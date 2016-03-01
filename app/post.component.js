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
    var PostComponent;
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
            PostComponent = (function () {
                function PostComponent(_router, _dataService) {
                    this._router = _router;
                    this._dataService = _dataService;
                }
                PostComponent.prototype.ngOnInit = function () {
                    this.getPosts();
                };
                PostComponent.prototype.getPosts = function () {
                    var _this = this;
                    var lcs = localStorage.getItem('load-data');
                    // Check if localStorage has 'load-data array'
                    if (lcs != null) {
                        // returns localStorage Data
                        console.log('Loaded Data');
                        this.posts = this._dataService.getPosts();
                    }
                    else {
                        // Make a new http.get request
                        this._dataService.getData().subscribe(function (data) { return _this.posts = data; });
                        console.log('New Data');
                    }
                };
                PostComponent.prototype.gotoDetail = function (post) {
                    this.selectedPost = post;
                    this._router.navigate(['PostDetail', { id: this.selectedPost.id }]);
                };
                PostComponent = __decorate([
                    core_1.Component({
                        selector: 'post-list'
                    }),
                    core_1.View({
                        templateUrl: '../templates/template-post-list.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService])
                ], PostComponent);
                return PostComponent;
            }());
            exports_1("PostComponent", PostComponent);
        }
    }
});
//# sourceMappingURL=post.component.js.map