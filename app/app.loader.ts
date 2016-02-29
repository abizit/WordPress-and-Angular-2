import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {MainApp} from './app.index';
import {DataService} from'./data.service';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {ROUTER_PROVIDERS} from "angular2/router";

//enableProdMode();
bootstrap(MainApp,[HTTP_PROVIDERS,ROUTER_PROVIDERS,DataService]);
