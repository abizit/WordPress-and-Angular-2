System.register(["angular2/core", 'angular2/http', 'rxjs/Rx'], function(exports_1, context_1) {
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
    var core_1, http_1, Rx_1;
    var DataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            DataService = (function () {
                function DataService(http) {
                    this.http = http;
                    this._dataURL = 'http://localhost/studiomatrix/?rest_route=/wp/v2/posts';
                    this.singlePost = [];
                }
                DataService.prototype.getData = function (url) {
                    //return this.http.get(this._dataURL).map((res:Response) => res.json());
                    return this.http.get(url)
                        .map(function (res) {
                        if (res.json()) {
                            return res.json();
                        }
                    })
                        .catch(this.handleError);
                };
                DataService.prototype.methodName = function () {
                    var _this = this;
                    this.getPosts()
                        .subscribe(function (res) {
                        _this.posts = res;
                        return _this.posts;
                    });
                };
                DataService.prototype.getPosts = function () {
                    return this.getData(this._dataURL);
                };
                DataService.prototype.getPost = function (filterid) {
                    this._dataURL = this._dataURL + '/' + filterid;
                    return this.getData(this._dataURL);
                };
                DataService.prototype.handleError = function (error) {
                    // in a real world app, we may send the error to some remote logging infrastructure
                    // instead of just logging it to the console
                    console.error(error);
                    return Rx_1.Observable.throw(error.json().error || 'Server error');
                };
                DataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DataService);
                return DataService;
            }());
            exports_1("DataService", DataService);
        }
    }
});
//# sourceMappingURL=data.service.js.map