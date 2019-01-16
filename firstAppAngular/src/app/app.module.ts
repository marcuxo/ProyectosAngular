import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { holamundo } from './PrimerComponente/primer.componente';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    holamundo,
    SegundoComponenteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
