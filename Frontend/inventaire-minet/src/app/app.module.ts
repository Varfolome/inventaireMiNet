import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ObjectsShowSectionComponent } from './objects-show-section/objects-show-section.component';
import { ObjectsAddSectionComponent } from './objects-add-section/objects-add-section.component';
import { ConnectionFormComponent } from './connection-form/connection-form.component';
import { ObjectsPositionAddSectionComponent } from './objects-position-add-section/objects-position-add-section.component';
import { ObjectsTypeControlSectionComponent } from './objects-type-control-section/objects-type-control-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ObjectsShowSectionComponent,
    ObjectsAddSectionComponent,
    ConnectionFormComponent,
    ObjectsPositionAddSectionComponent,
    ObjectsTypeControlSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
