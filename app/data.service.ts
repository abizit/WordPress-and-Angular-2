import {Injectable} from "angular2/core";
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {PostInterface} from './data.interface';
import {Headers} from "angular2/http";
import {RequestOptions} from "angular2/http";
import {Json} from "angular2/src/facade/lang";



@Injectable()
export class DataService{
    private _dataURL : string = 'http://jsonplaceholder.typicode.com';
    data : PostInterface [];
    flag : number;
    errorMessage : string;

    constructor(private http:Http){
        console.log(localStorage.length);
    }

    getData(fetchParams: string){
        this.flag = 1;
        return this.http.get(this._dataURL + fetchParams)
            .map(res => res.json())
            .do(data => {localStorage.setItem('initial-data',JSON.stringify(data))}) // eyeball results in the console
            .catch(this.handleError)
    }

    getPosts(){
        return this.getData('/posts');
    }

    getPostByID(id:number){
            return this.getData('/posts/'+id);
    }


    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}