import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FormComponent } from './components/form/form.component';
//import { TestApiComponent } from './components/test-api/test-api.component';
//import { ModalExampleComponent } from './components/modal-example/modal-example.component';
//import { TestModalComponent } from './components/test-modal/test-modal.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TestTranslateComponent } from './components/test-translate/test-translate.component';


// Function to load translations
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    //HomeComponent,
    //TestApiComponent,
    //ModalExampleComponent,
    //TestModalComponent,
    FormComponent,
    TestTranslateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [
    //HomeComponent,
    FormComponent,
    //TestApiComponent,
    //TestModalComponent,
    TestTranslateComponent
  ]
})
export class AppModule { }
