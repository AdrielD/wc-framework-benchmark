import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VanillaDSButton } from './VanillaDS/button.component';
import { LitElementDSButton } from './LitElementDS/button.component';
import { StencilDSButton } from './StencilDS/button.component';
import { SvelteDSButton } from './SvelteDS/button.component';
import { AppComponent } from './app.component';
import 'vanilla-ds/build/vanilla-ds';
import 'litelement-ds/build/litelement-ds';
import 'svelte-ds/build/bundle';
import { defineCustomElements } from  'stencil-ds';

defineCustomElements();

@NgModule({
  declarations: [
    AppComponent,
    VanillaDSButton,
    LitElementDSButton,
    StencilDSButton,
    SvelteDSButton,
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
