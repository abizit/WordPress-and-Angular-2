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
        var lcs = localStorage.getItem('load-data');
        // Check if localStorage has 'load-data array'
        if (lcs != null){
            // returns localStorage Data
            console.log('Loaded Data');
            this.posts = this._dataService.getPosts();
        } else {
            // Make a new http.get request
            this._dataService.getData().subscribe(
                data => this.posts = data
            )
            console.log('New Data');
        }
    }

    gotoDetail(post:PostInterface) {
        this.selectedPost = post;
        this._router.navigate(['PostDetail', {id: this.selectedPost.id}]);
    }
}