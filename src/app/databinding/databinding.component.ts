import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {

  newStyle : any;
  showMyClass : Boolean;
  widthCntr : number;
  btnOkay : String;

  constructor(){
    this.btnOkay = 'Okay';
    this.widthCntr = 100;

    this.newStyle = {
      width : ''+this.widthCntr+'px',
      height : '200px',
      border : '1px solid red'
    };

    this.showMyClass = true;
  }

  public increaseWidth() : void {
    this.widthCntr += 10;
    alert('hello' + this.widthCntr);
  }
}
