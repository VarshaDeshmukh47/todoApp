import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getAppTitle() {
    return this.http.get('https://myapp-5fe1d.firebaseio.com/AppName.json')
    .pipe(map(
      (response :Response) =>{
        return response;
      }
    ) );
  }
}
