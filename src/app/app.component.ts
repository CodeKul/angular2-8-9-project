import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title  : String = 'codekul app works!';
  btnOkay : String = 'Okay Android';
  private heroName : String;

  public onHeroClickedApp( heroName?  : String) : void {
    if(heroName == 'ironMan'){
      this.heroName = 'https://upload.wikimedia.org/wikipedia/en/e/e0/Iron_Man_bleeding_edge.jpg';
    }
    else if(heroName == 'spiderMan') {
      this.heroName = 'http://cdn.movieweb.com/img.news.tops/NElW3Ex3w06Fon_2_b.jpg';
    }
    else {
      this.heroName = 'http://img.cinemablend.com/cb/3/f/e/e/3/7/3fee37dcfa24d7df1eb34eeddd051cf47e6cb0151d82ec2c88c9331f4ff6cd1a.jpg';
    }
  }

  public get getHeroName() : String {
    return this.heroName;
  }
}
