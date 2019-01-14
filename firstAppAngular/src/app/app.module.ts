import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { holamundo } from './PrimerComponente/primer.componente';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    holamundo,
    SegundoComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
