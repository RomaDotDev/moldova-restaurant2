import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Dish } from './shared/dish/dish';
import { Observable } from 'rxjs/Rx';

@Injectable()

export class MenuService {

    constructor (private http: Http) {}

    getMenu(menuUrl:string): Observable<Dish[]> {
        return this.http.get(menuUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
