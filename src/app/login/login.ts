import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class LoginComponent {

  constructor(
    private user:User,
    private router:Router
  ){}

  loginUser(email:string,pass:string)
  {

    let data=this.user.getUser();

    if(data.email==email && data.password==pass)
    {
      alert("Login Successful");

      this.router.navigate(['/profile']);
    }

    else
    {
      alert("Invalid Email or Password");
    }

  }

}