import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleui',
  templateUrl: './simpleui.component.html',
  styleUrls: ['./simpleui.component.css']
})
export class SimpleuiComponent  {

  textStatus : String = '';


  checkUser(userName: String,password:  String) : void {
    if(userName == 'android' && password == 'android'){
      this.textStatus = 'Success';    
    }
    else this.textStatus = 'Fail';
  }
}
