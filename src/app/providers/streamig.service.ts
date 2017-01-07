import { Injectable } from '@angular/core';
declare const Peer;
declare const DataConnection;
@Injectable()
export class PeerService {
	public peer: any;
    public DataConnection: any;
	
	constructor() {
	  	this.peer= new Peer({key: 'dosi0rnx8khuxr'});
    }

}
