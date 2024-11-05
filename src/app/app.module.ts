import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { AppComponent } from './app.component';
import { CommentsComponent } from './comments/comments.component';
import { FilterPipe } from './filter.pipe'; // Si has creado el pipe de filtro

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    FilterPipe // Si tienes un filtro personalizado
  ],
  imports: [
    BrowserModule,
    FormsModule // Agrega FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
