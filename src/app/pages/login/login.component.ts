import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChooseUserComponent } from '../choose-user/choose-user.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  chooseLogin(){
  	this.router.navigateByUrl('/choose');
  }
}
