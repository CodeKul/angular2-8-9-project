import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagepanel',
  templateUrl: './imagepanel.component.html',
  styleUrls: ['./imagepanel.component.css']
})
export class ImagepanelComponent  {

  @Input() private heroName : String ;

  public get getHeroName() :String {
    return this.heroName;
  }
}
