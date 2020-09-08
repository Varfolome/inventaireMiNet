import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ObjetsControlBarComponent } from './objets-control-bar/objets-control-bar.component';
import { ObjectsShowSectionComponent } from './objects-show-section/objects-show-section.component';
import { ObjectsAddSectionComponent } from './objects-add-section/objects-add-section.component';
import { ConnectionFormComponent } from './connection-form/connection-form.component';
import { ObjectsPositionAddSectionComponent } from './objects-position-add-section/objects-position-add-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ObjetsControlBarComponent,
    ObjectsShowSectionComponent,
    ObjectsAddSectionComponent,
    ConnectionFormComponent,
    ObjectsPositionAddSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
