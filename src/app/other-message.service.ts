import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherMessageService {

  constructor() { }
  getothermessage(){
    return 'message from other service';
  }
}
        