import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-choose-user',
  templateUrl: './choose-user.component.html',
  styleUrls: ['./choose-user.component.css']
})
export class ChooseUserComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  tutorLogin(){
  	this.router.navigateByUrl('/tutor');
  }
  studentLogin(){
  	this.router.navigateByUrl('/student');
  }

}
