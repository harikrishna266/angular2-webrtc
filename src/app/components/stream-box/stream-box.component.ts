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
        this.peer.peer.on('connection',(e)=>this.connectionIncoming(e));
        this.getCamera();
  	}

    openStreamAndGetData(e){
        this.peer.peer.on('data',(e)=>this.showRemoteStreamOnPlayer(e));
    }
    connectionIncoming(e) {
        this.peer.peer.on('open',(e)=>this.openStreamAndGetData(e));
    }
    showRemoteStreamOnPlayer(stream) {
       this.videoElem.nativeElement.src = URL.createObjectURL(stream); 
    }
    createPeerIdBeforeCameraInstantiation() {
        return new Promise((res,rej) => { 
            this.peer.peer.on('open', (e) => this.livestreams.createStreamer(e).then(id => {res(true)}));
        })      
    }    
    getCamera() {
        this.createPeerIdBeforeCameraInstantiation()
        .then(res => {
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
        })       
    }
    
    streamVideo(remoteStream) {
        this.videoElem.nativeElement.src = URL.createObjectURL(remoteStream);
    }
    error(err) {
      console.log(err);
    }

}
