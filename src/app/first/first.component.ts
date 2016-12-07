import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  template : `
    <div>
      <h1> This is header </h1> 
      <app-second></app-second>

      <p> First Para </p>
    </div>
  `,
  styles: [
    `div  { 
      width : 500px;
      height : 100px;
      border : 1px solid red;
    }`
  ]
})
export class FirstComponent {
  
}
