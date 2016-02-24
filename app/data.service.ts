import {Injectable} from "angular2/core";
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {PostInterface} from './interface.product';
import {Headers} from "angular2/http";
import {RequestOptions} from "angular2/http";



@Injectable()
export class DataService{
    private _dataURL : string = 'http://localhost/studiomatrix/?rest_route=/wp/v2/posts';

    constructor(private http:Http){}

    getPosts(){
        //return this.http.get(this._dataURL).map((res:Response) => res.json());
        return this.http.get(this._dataURL)
            .map(res=>res.json())
            .do(data => console.log(data)) // eyeball results in the console
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}