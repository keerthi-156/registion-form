import { Component, OnInit } from '@angular/core';
import {User} from '../models/user.model';


@Component({
  selector: 'app-registration',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistrationComponent implements OnInit {
  user :User;
  isRegistered : boolean=false;

  constructor() { 
    this.user = new User();
    
  }

  ngOnInit(): void {
  }
  register(user:User){
        console.log(user);
       // this.isRegistered=true;
  }

}
