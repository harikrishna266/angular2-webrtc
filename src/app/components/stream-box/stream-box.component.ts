import { Component, OnInit,ViewChild } from '@angular/core';
import { PeerService } from '../../providers/streamig.service';
import {LivestreamsService} from '../../providers/livestreams.service';
declare const navigator;
declare const AdapterJS

@Component({
  selector: 'app-stream-box',
  templateUrl: './stream-box.component.html',
  styleUrls: ['./stream-box.component.css']
})

export class StreamBoxComponent implements OnInit {

    public userMedia = <any>navigator;
    @ViewChild('videoElem') videoElem: any;
    
    constructor(public peer:PeerService,public livestreams:LivestreamsService) {}

    ngOnInit() {
        this.peer.peer.on('open',(e)=>this.openStream(e));
        this.peer.peer.on('disconnect',(e)=>this.closeStream(e));
        this.getCamera();
  	}

    openStream(e){
        this.livestreams.createStreamer(e);
    }
    closeStream(e) {
        this.livestreams.removeStreamer(e);   
    }
    getAllConnections() {
        
    }
    getCamera() {
       console.log('in');
       // this.userMedia.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

        if (!navigator.getUserMedia)
            this.userMedia.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        if (!navigator.cancelAnimationFrame)
            this.userMedia.cancelAnimationFrame = navigator.webkitCancelAnimationFrame || navigator.mozCancelAnimationFrame;
        if (!navigator.requestAnimationFrame)
            this.userMedia.requestAnimationFrame = navigator.webkitRequestAnimationFrame || navigator.mozRequestAnimationFrame;

    this.userMedia.getUserMedia(
        {
            audio: {
                "mandatory": {
                    "googEchoCancellation": "false",
                    "googAutoGainControl": "false",
                    "googNoiseSuppression": "false",
                    "googHighpassFilter": "false"
                },
                "optional": []
            },video: true
        }, (stream)=>this.streamVideo(stream),(e)=>this.error(e));

       // this.userMedia.getUserMedia({video:true,audio:true},(stream)=>this.streamVideo(stream),(e)=>this.error(e))  
    }
    
    streamVideo(remoteStream) {
        var video = <any>document.getElementById('video');
        video.src = URL.createObjectURL(remoteStream);
        // video.play();
    }
    error(err) {
      console.log(err);
    }

}
