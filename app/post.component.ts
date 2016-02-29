import {Component,View,OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {PostInterface} from './data.interface';
import{DataService} from './data.service';

@Component({
    selector :'post-list'

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

    getPosts():any{
        if(localStorage.length <= 1){
            return this._dataService.getPosts().subscribe(
            data => this.posts = data,
                () => console.log('new fetch')
            )
        } else {
            this.posts = JSON.parse(localStorage.getItem('initial-data'));
            console.log('using this');
            return this.posts;
        }
    }

    gotoDetail(post:PostInterface) {
        this.selectedPost = post;
        this._router.navigate(['PostDetail', {id: this.selectedPost.id}]);
    }
}