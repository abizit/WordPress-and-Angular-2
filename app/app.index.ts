import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";

import {PostComponent} from './post.component';
import {PostDetail} from './post-detail.component';
import {DataService} from "./data.service";


@Component({
    selector : 'post-app',
    providers : [ROUTER_PROVIDERS]
})

@View({
    templateUrl : '../templates/navigation.html',
    directives : [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/posts',
        name : 'Posts',
        component : PostComponent


    },
    {
        path:'/posts/:id',
        name : 'PostDetail',
        component : PostDetail
    }
])

export class MainApp{
            constructor(private _dataService:DataService) {
                this.fetchData();
            }
            fetchData(){
                return this._dataService.getData().subscribe(
                    data => localStorage.setItem("load-data" ,JSON.stringify(data))

                )
            }
}