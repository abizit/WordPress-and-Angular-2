import {Injectable} from "angular2/core";
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {PostInterface} from './data.interface';
import {Headers} from "angular2/http";
import {RequestOptions} from "angular2/http";
import {Json} from "angular2/src/facade/lang";



@Injectable()
export class DataService{
    private _dataURL : string = 'http://localhost/studiomatrix/?rest_route=/wp/v2/posts';
    data : PostInterface [];
    flag : number;
    errorMessage : string;

    constructor(private http:Http){
        //localStorage.clear();

    }

    getData():Observable<any[]>{
        return this.http.get(this._dataURL)
            .map(res => res.json())
            .catch(this.handleError)
    }
    //these are called if localStorge already has data
    getPosts(){
        return JSON.parse(localStorage.getItem('load-data'));
    }
    getPostByID(id:number){
            return JSON.parse(localStorage.getItem('load-data')).filter(
                post => post.id === id
            )[0];
    }


    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}