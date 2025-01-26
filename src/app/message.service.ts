import { Injectable } from '@angular/core';
import { OtherMessageService } from './other-message.service';


@Injectable({
  providedIn: 'root'
})

export class MessageService {

  _message = "Hello Sahosoft";
  _otherMessage:string="";
  
 
  constructor(private othermsg:OtherMessageService) {
    this._otherMessage = this.othermsg.getothermessage();
   }

  getMessage(){
    return this._message;
  }

 
}
