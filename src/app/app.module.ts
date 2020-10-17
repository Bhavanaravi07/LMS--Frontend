import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddNewspaperComponent } from './add-newspaper/add-newspaper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewspaperListComponent } from './newspaper-list/newspaper-list.component';
import { UpdateNewspaperComponent } from './update-newspaper/update-newspaper.component';
import { HomeComponent } from './home/home.component';
import { AddMagazineComponent } from './add-magazine/add-magazine.component';
import { UpdateMagazineComponent } from './update-magazine/update-magazine.component';
import { MagazineListComponent } from './magazine-list/magazine-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNewspaperComponent,
    NewspaperListComponent,
    UpdateNewspaperComponent,
    HomeComponent,
    AddMagazineComponent,
    UpdateMagazineComponent,
    MagazineListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
