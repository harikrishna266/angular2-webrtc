import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';


//components
import { AppComponent } from './app.component';
import { StreamBoxComponent } from './components/stream-box/stream-box.component';
import { AngularFireModule } from 'angularfire2';
import { StreamerSidebarComponent } from './components/streamer-sidebar/streamer-sidebar.component';
import { LoginComponent } from './pages/login/login.component';

//providers
import { PeerService } from './providers/streamig.service';
import {LivestreamsService}  from './providers/livestreams.service';
import {LocalstoreService} from './providers/localstore.service';
import { Draggable } from './directives/draggable.directive';
import { StudentsHomePageComponent } from './pages/students-home-page/students-home-page.component';
import { TutorHomePageComponent } from './pages/tutor-home-page/tutor-home-page.component';
import { ChooseUserComponent } from './pages/choose-user/choose-user.component';




const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'student', component: StudentsHomePageComponent },
  { path: 'tutor', component: TutorHomePageComponent },
  { path: 'choose', component: ChooseUserComponent },
  { path: 'videobox', component: StreamBoxComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

export const firebaseConfig = {
    apiKey: "AIzaSyDuNkOcwiMRckGJzeTML_oqRgxYsSBmzCg",
    authDomain: "tutor-76b83.firebaseapp.com",
    databaseURL: "https://tutor-76b83.firebaseio.com",
    storageBucket: "tutor-76b83.appspot.com",
    messagingSenderId: "466104162907"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StreamBoxComponent,
    StreamBoxComponent,
    StreamerSidebarComponent,
    Draggable,
    StudentsHomePageComponent,
    TutorHomePageComponent,
    ChooseUserComponent,
    
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),  
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [PeerService,LivestreamsService,LocalstoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
