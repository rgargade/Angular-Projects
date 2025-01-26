import { Component } from '@angular/core';
import { NumberlistService } from '../numberlist.service';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css'
})
export class Comp1Component {
   numberList:any[]=[];
  constructor(private numlsSer:NumberlistService){
  }

  addnumber(val:any){
    this.numlsSer.addnum(val);
  }

  getNumList(){
    this.numberList = this.numlsSer.getlist();
  }
}
