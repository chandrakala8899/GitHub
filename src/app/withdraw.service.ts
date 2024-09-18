import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {

  private baseUrl = 'http://localhost:8080/withdraw';  // Update with your backend URL

  constructor(private http: HttpClient) { }

  withdraw(withdrawRequest: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, withdrawRequest, { responseType: 'text' });
  }
}
