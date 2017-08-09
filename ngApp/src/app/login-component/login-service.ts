import {Injectable} from '@angular/core';

@Injectable()
export class LoginService{
    doLogin()  : void{
        alert("Are you sure to login?");
    } 
}