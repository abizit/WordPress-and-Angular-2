import {Component, View, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {PostInterface} from './data.interface';
import {DataService} from './data.service';

@Component({
    selector :'post-detail'
})

@View({
    templateUrl :'../templates/template-post-detail.html'
})

export class PostDetail {
    posts;
    post;
    errorMessage : string;

    constructor(
        private _dataService : DataService,
        private _routerParams : RouteParams
    ){}

    ngOnInit(){
        let id = +this._routerParams.get('id');
        this.getPost(id);
    }

    getPost(id:number){
        return this._dataService.getPostByID(id).subscribe(
            data => this.post = data
        )

    }

}