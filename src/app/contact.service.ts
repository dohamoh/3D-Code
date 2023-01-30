import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private url =`https://mailthis.to/myEmail`
  // handleError: ((err: any, caught: Observable<string>) => ObservableInput<any>) | any;

  constructor(private http: HttpClient) { }

  sendEmail(data:any):any{
    return this.http.post(this.url, data,{ responseType: 'text' })
    
  }
}
