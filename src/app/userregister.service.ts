import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {

  userNameBehaviour = new  BehaviorSubject<string>('Neoteric');
  
  emitName(name:any) : void{
    this.userNameBehaviour.next(name);
  }


  private apiUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }
  learnObservable():Observable<string>{
    return new Observable<string> ( Observer =>{
      setTimeout(() => Observer.next('Neoteric'),6000)
    }

    );
  }

  saveUser(user: any) : Observable<Object>{
  
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Accept': 'application/json'
        
      })
    };
    
    console.log("from service method");
    return this.http.post(this.apiUrl+"saveUser", user,httpOptions)
  }
}