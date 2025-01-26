import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MessageService } from './message.service';
import { Comp1Component } from "./comp1/comp1.component";
import { Comp2Component } from './comp2/comp2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, Comp1Component,Comp2Component,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular17App_2';
  msg:string ="";

    constructor(private msgService:MessageService){
      
    }

    getMessageDetails(){
    
      this.msg = this.msgService.getMessage();
    
    }

  company = {
    name:'Chandan Kumar',
    city:'noida',
    state:'UP',
    country:'India'
  }

  // students:any[]=[
  //   { id:101, name:'chandan kumar', gender:'male'},
  //   { id:102, name:'Ajeet eumar', gender:'male'},
  //   { id:101, name:'Soham kumar', gender:'male'},
  //   { id:101, name:'Soni kumari', gender:'female'},
  // ];

  students:any[]=[
    { id:101, name:'chandan kumar', gender:'male'},
    { id:102, name:'Ajeet eumar', gender:'male'},
    { id:101, name:'Soham kumar', gender:'male'},
    { id:101, name:'Soni kumari', gender:'female'},
  ];




}
