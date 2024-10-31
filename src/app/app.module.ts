import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component'; // Asegúrate de importar tu componente

@NgModule({
  declarations: [
    AppComponent,
    UserComponent // Declara el componente aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule // Agrega ReactiveFormsModule aquí
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

