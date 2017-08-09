import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

	loginName="";
	loginPassword="";
/*
	user:User {
	name="",
	password=""
	
	};*/

  constructor() { }

  ngOnInit() {
  }
  
  onLogin(event:Event){
    console.log(event);
    this.loginName = (<HTMLInputElement>event.target).value;
    
  }
  onClick(){
  alert('Hi');
  if(this.loginName==null && this.loginPassword==null)
    {
      alert('Please enter username and password!')
    }
  }

}
