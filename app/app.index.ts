import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";

import {PostComponent} from './post.component'

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

    }
])

export class MainApp{

}