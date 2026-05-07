import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})

export class ProfileComponent {

  userData:any={};

  constructor(private user:User)
  {
    this.userData=this.user.getUser();
  }

}