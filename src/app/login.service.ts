import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './model/Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http:HttpClient) { }

  private api = 'http://localhost:8080/loginvalidate';
  
  login(atm:Login):Observable<any>{
    const login : Login = {
      cardNumber:atm.cardNumber,
      pin:atm.pin
    };
      console.log("From service" + JSON.stringify(atm));
      const httpOptions ={
        headers: new HttpHeaders({
           'Content-Type': 'application/json',
          'Accept': 'application/json'
         }),
         responseType: 'text' as 'json'
       };
       return this.http.post(this.api,login,httpOptions);
    }
}
