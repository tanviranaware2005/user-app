import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class User {

  userData:any={};

  setUser(data:any)
  {
    this.userData=data;
  }

  getUser()
  {
    return this.userData;
  }

}