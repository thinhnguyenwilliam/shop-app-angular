import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
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
import { NgChartsModule } from 'ng2-charts'; // ✅ In Angular 16.1.3
import { TestChartComponent } from './components/test-chart/test-chart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';



// Function to load translations
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    HomeComponent,
    //TestApiComponent,
    //ModalExampleComponent,
    //TestModalComponent,
    FormComponent,
    TestTranslateComponent,
    TestChartComponent,
    NavbarComponent,
    FooterComponent
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
    }),
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [
    HomeComponent,
    //FormComponent,
    //TestApiComponent,
    //TestModalComponent,
    //TestTranslateComponent,
    //TestChartComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class AppModule { }
