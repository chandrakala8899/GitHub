import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { response } from 'express';
import { Login } from '../model/Login';

@Component({
  selector: 'app-atmlogin',
  templateUrl: './atmlogin.component.html',
  styleUrl: './atmlogin.component.css'
})
export class AtmloginComponent {
  atm = {
    cardNumber: '',
    pin: ''
  };
  message: string = '';

  constructor(private route:Router,private loginservice:LoginService) { }

  login() {
    const loginData: Login = {
      cardNumber: this.atm.cardNumber,
      pin: this.atm.pin
    };

    this.loginservice.login(loginData).subscribe(
      response => {
        console.log('Login successful:', response);
        // Navigate to the withdrawal page or dashboard after successful login
        this.route.navigate(['/withdraw']);
      },
      error => {
        console.error('Login failed:', error);
        this.message = 'Invalid card number or PIN. Please try again.';
      }
    );
  }
}
  

