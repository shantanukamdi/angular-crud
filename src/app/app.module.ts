import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppComponent, Dialog } from './app.component';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    AppComponent,
    Dialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    NoopAnimationsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
  entryComponents: [Dialog]
})
export class AppModule { }
