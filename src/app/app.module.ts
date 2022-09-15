import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AddEditItemComponent } from './add-edit-item/add-edit-item.component';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonRendererComponent } from './button-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    AddEditItemComponent,
    ButtonRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
