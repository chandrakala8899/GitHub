import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepositService {
  private apiUrl = 'http://localhost:8080/deposit'; 

  constructor(private http: HttpClient) { }


  deposit(Deposit: any): Observable<any> {
  
    return this.http.post(`${this.apiUrl}`, Deposit, { responseType: 'text' });
  }
}
