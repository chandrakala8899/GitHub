import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  constructor(private http:HttpClient) { }

  private apiUrl = 'http://localhost:8080/transfer';

  transferAmount(transfer:any):Observable<any>{
    console.log("From service" + JSON.stringify(transfer));
    const httpOptions ={
      headers: new HttpHeaders({
         'Content-Type': 'application/json',
        'Accept': 'application/json'
       })
     };
     return this.http.post(this.apiUrl,transfer,httpOptions);
  }
}
