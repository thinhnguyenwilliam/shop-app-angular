import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [
    HomeComponent,
    //FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [
    HomeComponent,
    //FormComponent
  ]
})
export class AppModule { }
