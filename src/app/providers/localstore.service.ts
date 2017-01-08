import { Injectable } from '@angular/core';

@Injectable()
export class LocalstoreService {

    public localStorage:any = window.localStorage;
    constructor() { }

    setValue(key,val) {
        this.localStorage.setItem(key,JSON.stringify(val));
    }
    getVal(key) {
        this.localStorage.getItem(key);
    }
    delete(key) {
        
    }

}
