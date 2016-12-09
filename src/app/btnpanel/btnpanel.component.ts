import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btnpanel',
  templateUrl: './btnpanel.component.html',
  styleUrls: ['./btnpanel.component.css']
})
export class BtnpanelComponent {

  @Output()  clickedHero : EventEmitter<String>;

  public constructor(){
    this.clickedHero = new EventEmitter<String>();
  }

  public onHeroClicked(heroName : String) : void{
    //alert(''+heroName);
    this.clickedHero.emit(heroName);
  }
}
