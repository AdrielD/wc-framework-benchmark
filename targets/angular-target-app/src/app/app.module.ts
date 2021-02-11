import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VanillaDSButton } from './VanillaDS/button.component';
import { StencilDSButton } from './StencilDS/button.component';
import { AppComponent } from './app.component';
import 'vanilla-ds/build/vanilla-ds';
import { defineCustomElements } from  'stencil-ds';

defineCustomElements();

@NgModule({
  declarations: [
    AppComponent,
    VanillaDSButton,
    StencilDSButton,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
