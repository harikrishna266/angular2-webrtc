import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import {MdSidenav, MdDialog, MdDialogConfig} from "@angular/material";
import { LoginComponent } from './pages/login/login.component';
import { StreamBoxComponent } from './components/stream-box/stream-box.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  @ViewChild('sidenav') sidenav: MdSidenav;
  currentDog = {};
  isDarkTheme = false;

  constructor(public dialog: MdDialog, public vcr: ViewContainerRef) {


  }

  openDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
   // this.dialog.open(SettingsDialog, config);
  }

  opensidenav(dog) {
    this.sidenav.open();
  }
   openLogin() {
    this.dialog.open(LoginComponent);
  }
  openVideo(){
    this.dialog.open(StreamBoxComponent);
  }
}
