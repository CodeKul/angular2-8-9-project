import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { SimpleuiComponent } from './simpleui/simpleui.component';
import { BtnpanelComponent } from './btnpanel/btnpanel.component';
import { ImagepanelComponent } from './btnpanel/imagepanel.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    DatabindingComponent,
    SimpleuiComponent,
    BtnpanelComponent,
    ImagepanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
