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
        var lcs = localStorage.getItem('load-data');
        // Check if localstorage has 'load-data array'
        if (lcs != null){
            // returns localStorage Data
            console.log('Loaded Data');
            this.post = this._dataService.getPostByID(id);
        } else {
            // Make a new http.get request
            this._dataService.getData().subscribe(
                data => {
                    this.posts = data;
                    this.post = this.posts.filter(post => post.id === id)[0];
                }
            )
            console.log('New Data');
        }

    }

}