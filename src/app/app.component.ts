import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserregisterService } from './userregister.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';
fullNameFromChild:string='';
accountNumber: any;

  constructor(private router:Router,
    private userregisterservice:UserregisterService
  ){
  this.userregisterservice.userNameBehaviour.subscribe( data=>{
    this.fullNameFromChild = data;
    console.log( " from App component subsribe");
  })
  }
  register(){
    console.log("From Register");
    this.router.navigate(['register'])
  }
  forgotpassword(){
    console.log("From Forgotpassword");
    this.router.navigate(['forgotpassword'])
  }
  login(){
    console.log("From Login")

    }
  }


