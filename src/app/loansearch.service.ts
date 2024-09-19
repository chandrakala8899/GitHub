import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoansearchService {

  constructor(private http:HttpClient) { }

  searchaccount(accountnumber:any):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'accountinput':accountnumber,
        'Content-Type':'application/json',
        'Accept':'application/json'
        
      })
    };
  
    return this.http.get("http://localhost:8080/createAccount/searchaccount",httpOptions)
  }
  
}
