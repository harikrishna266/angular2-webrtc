import { Injectable } from '@angular/core';
declare const Peer;
@Injectable()
export class StreamigService {
	public peer: any;
	
	constructor() {
	  	this.peer= new Peer({key: 'dosi0rnx8khuxr'});
	}

}
