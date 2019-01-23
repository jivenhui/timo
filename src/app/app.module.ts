import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SlickModule} from 'ngx-slick';
import { Pane1Component } from './pane1/pane1.component';
import { Pane2Component } from './pane2/pane2.component';
import { Pane3Component } from './pane3/pane3.component';
import { Pane4Component } from './pane4/pane4.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ReceptenComponent } from './dropdown/recepten/recepten.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    Pane1Component,
    Pane2Component,
    Pane3Component,
    Pane4Component,
    DropdownComponent,
    ReceptenComponent
  ],
  imports: [
    BrowserModule,
    SlickModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
