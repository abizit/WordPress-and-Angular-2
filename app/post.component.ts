import {Component,View,OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {PostInterface} from './data.interface';
import{DataService} from './data.service';


interface Hero {
    id: number;
    name: string;
}
@Component({
    selector :'post-list',
    providers:[DataService,HTTP_PROVIDERS]
})

@View({
    templateUrl: '../templates/template-post-list.html'

})
export class PostComponent implements OnInit{
    errorMessage : string;
    posts : PostInterface[];
    selectedPost : PostInterface;


    constructor(
        private _router:Router,
        private _dataService : DataService
    ){}

    ngOnInit(){
        this.getPosts();
    }

    getPosts(){
        this._dataService.getPosts()
            .subscribe(
                posts => this.posts = posts,
                error =>  this.errorMessage = <any>error);
    }
    gotoDetail(post:PostInterface) {
        this.selectedPost = post;
        this._router.navigate(['PostDetail', {id: this.selectedPost.id}]);
    }
}
