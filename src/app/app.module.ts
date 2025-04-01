import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
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
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UserTableComponent } from './components/user-table/user-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  { MatInputModule } from '@angular/material/input';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AosComponent } from './components/aos/aos.component';



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
    FooterComponent,
    ColorPickerComponent,
    UserTableComponent,
    SkeletonLoaderComponent,
    AosComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [
    HomeComponent,
    //FormComponent,
    //TestApiComponent,
    //TestModalComponent,
    //TestTranslateComponent,
    //TestChartComponent,
    //NavbarComponent,
    //FooterComponent
  ]
})
export class AppModule { }
