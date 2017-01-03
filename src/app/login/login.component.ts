import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AppRoutesComponent } from '../app-routes/app-routes.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	public form: FormGroup;
	firstName = new FormControl("", Validators.required);
  constructor(public fb:FormBuilder) {
  	this.form =fb.group({
  		"firstName":this.firstName,
  		"password": ["",Validators.required]
  	});
   }

  ngOnInit() {
  }
  onSubmit(){
  	console.log(this.form.value);
  }
}
