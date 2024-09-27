import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoansearchService {

  constructor(private http:HttpClient) { }

  
  searchAccount(accountnumber:any):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'accountinput':accountnumber,
        'Content-Type':'application/json',
        'Accept':'application/json'
        
      })
    };
  
    return this.http.get("http://localhost:8080/api/searchAccount/DataJpa",httpOptions)
  }

  searchAccountByAccountAndPan(accountnumber:any,pan:any):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'accountinput':accountnumber,
        "paninput":pan,
        'Content-Type':'application/json',
        'Accept':'application/json'
        
      })
    };
    console.log('from the service'+accountnumber+pan)

    return this.http.get("http://localhost:8080/api/searchAccount/Jpql",httpOptions)
    
  }

  getAccountByAccountAndPan(account: string, pan: string): Observable<any> {
    const headers = new HttpHeaders({
      'accountinput': account,
      'paninput': pan,
      'Content-Type':'application/json',
     'Accept':'application/json'
    });
  
    return this.http.get<any>('http://localhost:8080/api/searchAccountwithPan', { headers });
  }
  

  searchAccountByBalance(balance:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'balanceinput':balance,
        'Content-Type':'application/json',
        'Accept':'application/json'
        
      })
    };
  
    return this.http.get("http://localhost:8080/api/searchAccount/balance",httpOptions)
  }

  searchAccountByBalanceGreater(balance:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'balanceinput':balance,
        'Content-Type':'application/json',
        'Accept':'application/json'
        
      })
    };
  
    return this.http.get("http://localhost:8080/api/searchAccount/balanceGreater",httpOptions)

  }

  searchAccountByBalanceRange(lowerRange:any,upperRange:any):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'lowerRangeinput':lowerRange,
        'upperRangeinput':upperRange,
        'Content-Type':'application/json',
        'Accept':'application/json'
        
      })
    };
  
    return this.http.get("http://localhost:8080/api/searchAccount/balanceRange",httpOptions)


  }
}
