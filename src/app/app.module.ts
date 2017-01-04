import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
  
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LeaderBoxComponent } from './pages/leader-box/leader-box.component';
import { StreamBoxComponent } from './pages/stream-box/stream-box.component';
import { OutBoxComponent } from './pages/out-box/out-box.component';
import { LoginComponent } from './pages/login/login.component';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
