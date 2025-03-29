import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
//import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
//import { TestApiComponent } from './components/test-api/test-api.component';
import { ModalExampleComponent } from './components/modal-example/modal-example.component';
import { TestModalComponent } from './components/test-modal/test-modal.component';


@NgModule({
  declarations: [
    //HomeComponent,
    //TestApiComponent,
    ModalExampleComponent,
    TestModalComponent,
    //FormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [
    //HomeComponent,
    //FormComponent,
    //TestApiComponent,
    TestModalComponent,
  ]
})
export class AppModule { }
