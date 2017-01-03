import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
  

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeaderBoxComponent } from './leader-box/leader-box.component';
import { StreamBoxComponent } from './stream-box/stream-box.component';
import { OutBoxComponent } from './out-box/out-box.component';
import { LoginComponent } from './login/login.component';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeaderBoxComponent,
    StreamBoxComponent,
    OutBoxComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
