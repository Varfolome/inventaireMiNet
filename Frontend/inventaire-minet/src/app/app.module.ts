import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ObjectsPositionAddSectionComponent } from './objects-position-add-section/objects-position-add-section.component';
import { ObjectsTypeControlSectionComponent } from './objects-type-control-section/objects-type-control-section.component';
import { ObjectPositionEditSectionComponent } from './object-position-edit-section/object-position-edit-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObjectsPositionAddSectionComponent,
    ObjectsTypeControlSectionComponent,
    ObjectPositionEditSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
