import { Component, EventEmitter, Output, output } from '@angular/core';
import { UserregisterService } from '../userregister.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  name:string = "angular demo";
  subject=new Subject<string>();

  @Output()
  userNameEmitter: EventEmitter<string>=new EventEmitter();

  constructor(private userregister:UserregisterService){

    this.subject.subscribe(data => {
      console.log("From subject subscriber value" +data);
    });
    console.log("From Constructor");
  }
  companyName : string='';
  userDetails={
    name:'',
    email:'',
    address:'',
    mobile:'',
    age:null,
    gender:''
  }

  submitForm(form: any): void{

    this.subject.next("testing subject in angular" +this.userDetails.name);
    this.subject.next("111111");
    this.subject.next('222222');
     
    this.userNameEmitter.emit(this.userDetails.name);


    this.userregister.learnObservable().subscribe(
      data =>{
        console.log("from custom learn observable subscription")
       this.companyName=data; 
      }
    )

        

  var response=this.userregister.saveUser(this.userDetails);
   response.subscribe(response=>{
    console.log("Subscribe of Observable" +JSON.stringify(response));
   },
   error=>{
    console.log("From Subscribe of observable Error");
   }
  )
    console.log("registration In Progress" +JSON.stringify(this.userDetails) +"Response" +response)
  }

  }


