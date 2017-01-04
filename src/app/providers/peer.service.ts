import { Injectable } from '@angular/core';
declare const Peer;

@Injectable()

export class PeerService {

	public peer:any = new Peer({key: '6ud01r118b7yzaor'});
	constructor() { }
	
	createUser() {
		this.peer.on('open', function(id) {
		  console.log('My peer ID is: ' + id);
		});
	}
}	
