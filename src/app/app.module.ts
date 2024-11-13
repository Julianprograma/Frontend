import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AuthService } from './services/auth.service';

import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CalendarComponent } from './component/calendar/calendar.component';
import { CommentsComponent } from './component/comments/comments.component';
import { StockProductsComponent } from './component/stock-products/stock-products.component';
import { ScheduleComponent } from './component/schedule/schedule.component';

import { AddProductDialogComponent } from './component/stock-products/add-product-dialog/add-product-dialog.component';
import { DeleteProductDialogComponent } from './component/stock-products/delete-product-dialog/delete-product-dialog.component';
import { EditProductDialogComponent } from './component/stock-products/edit-product-dialog/edit-product-dialog.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    
    DashboardComponent,
    CalendarComponent,
    CommentsComponent,
    StockProductsComponent,
    ScheduleComponent,
  

    AddProductDialogComponent,
    DeleteProductDialogComponent,
    EditProductDialogComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatSnackBarModule,

    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
