import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css'
})

export class RegisterComponent {

  constructor(
    private user:User,
    private router:Router
  ){}

  registerUser(
    name:string,
    address:string,
    contact:string,
    email:string,
    pass:string
  )
  {

    let data={
      name:name,
      address:address,
      contact:contact,
      email:email,
      password:pass
    }

    this.user.setUser(data);

    alert("Registration Successful");

    this.router.navigate(['/login']);

  }

}