import { Component, OnInit } from '@angular/core';
import { StreamigService } from '../../providers/streamig.service';
declare const navigator;
@Component({
  selector: 'app-stream-box',
  templateUrl: './stream-box.component.html',
  styleUrls: ['./stream-box.component.css']
})
export class StreamBoxComponent implements OnInit {

    public userMedia = <any>navigator;
    constructor(public stream:StreamigService) {}

    ngOnInit() {
        this.stream.peer.on('open',(e)=>this.openStream(e));
        this.getCamera();
  	}

    openStream(e){
        this.getAllConnections();
    }

    getAllConnections() {
        
    }
    getCamera() {

        this.userMedia.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;
        this.userMedia.getUserMedia({video:true,audio:true},this.processVideoStream,this.error)                         
    }
    processVideoStream(stream) {
      console.log(stream);
    }
    error(err) {
      console.log(err);
    }

}
