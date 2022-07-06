import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() pp="";
  @Output() outputs:EventEmitter<string>=new EventEmitter();
  po:string="Good How About You!";

  constructor() {
     
   }

  ngOnInit() {
    
  }
  sendData(){
     this.outputs.emit(this.po);
  }

}
