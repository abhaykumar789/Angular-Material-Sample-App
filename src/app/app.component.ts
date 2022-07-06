import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'emsapp';
  messageFromParent="How are You Child?";
  messageFromChild="";
  getData(value){
   this.messageFromChild=value;
  }
}
