import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class LivestreamsService {

    public streamers:any;
    
    constructor(af: AngularFire) {
      this.streamers = af.database.list('/streamers');
    }

    createStreamer(streamId) {
        return this.streamers.push({name:streamId});   
    }
    removeStreamer(streamId) {
        console.log(streamId);
    }

    


}
