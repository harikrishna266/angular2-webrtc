import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
  
//components
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { LeaderBoxComponent } from './leader-box/leader-box.component';
import { StreamBoxComponent } from './stream-box/stream-box.component';
import { OutBoxComponent } from './out-box/out-box.component';
import { LoginComponent } from './login/login.component';



//providers goes here
import {PeerService} from './providers/peer.service';

=======
import { HomeComponent } from './pages/home/home.component';
import { LeaderBoxComponent } from './pages/leader-box/leader-box.component';
import { StreamBoxComponent } from './pages/stream-box/stream-box.component';
import { OutBoxComponent } from './pages/out-box/out-box.component';
import { LoginComponent } from './pages/login/login.component';


>>>>>>> d8a0af8826406a7922fe9b0acf861744389ad57b
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
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
  providers: [PeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
