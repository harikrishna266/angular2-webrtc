import { Component, OnInit } from '@angular/core';
import { StreamigService } from '../../providers/streamig.service';
@Component({
  selector: 'app-stream-box',
  templateUrl: './stream-box.component.html',
  styleUrls: ['./stream-box.component.css']
})
export class StreamBoxComponent implements OnInit {

  constructor(public stream:StreamigService) {
   }

	ngOnInit() {
		console.log('checks');
  		this.stream.peer.on('open',(e)=>this.openStream(e));
  	}

  	openStream(e){
  		console.log(e);
	}
}
