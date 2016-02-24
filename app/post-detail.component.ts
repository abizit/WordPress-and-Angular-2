import {Component, View, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {PostInterface} from './data.interface';
import {DataService} from './data.service';

@Component({
    selector :'post-detail',
    //inputs :['post'],
    providers: [DataService,HTTP_PROVIDERS]
})

@View({
    templateUrl :'../templates/template-post-detail.html'
})

export class PostDetail {
    posts : PostInterface [];
    post : PostInterface;
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
        return this._dataService.getPosts()
            .subscribe(
                posts => this.posts = posts,
                error =>  this.errorMessage = <any>error,
                () => this.post = this.posts.filter(post => post.id === id)[0])
        ;
    }

}