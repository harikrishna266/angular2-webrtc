import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class LivestreamsService {

    public streamers:any;
    
    constructor(af: AngularFire) {
      this.streamers = af.database.list('/streamers');
    }

    createStreamer() {
        this.streamers.list.push({'id':'123123','userid':'1212'})   
    }

    deleteStreamer() {
        //this.streamers.list.push({'id':'123123','userid':'1212'})      
    }


}
