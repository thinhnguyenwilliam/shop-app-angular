import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { TestApiComponent } from './components/test-api/test-api.component';


@NgModule({
  declarations: [
    //HomeComponent,
    TestApiComponent,
    //FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    //HomeComponent,
    //FormComponent,
    TestApiComponent
  ]
})
export class AppModule { }
