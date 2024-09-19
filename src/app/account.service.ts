import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

 private api = 'http://localhost:8080/createAccount';
  constructor(private http:HttpClient) { }

createAccount(account:any):Observable<any>{
  console.log("  In Service" + JSON.stringify(account));

  const httpOptions = {
    headers: new HttpHeaders({
   
      'Content-Type':  'application/json',
      'Accept': 'application/json'
      
    })
  };
  return this.http.post(this.api,account,httpOptions);

}

}

