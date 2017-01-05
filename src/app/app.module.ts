import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { StreamBoxComponent } from './components/stream-box/stream-box.component';
//providers
import { StreamigService } from './providers/streamig.service';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'videobox', component: StreamBoxComponent },

   
 
];



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StreamBoxComponent,
    StreamBoxComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [StreamigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
