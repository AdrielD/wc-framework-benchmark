import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import 'vanilla-ds/build/vanilla-ds';
import 'litelement-ds/build/litelement-ds';
import 'svelte-ds/build/bundle';
import { defineCustomElements } from  'stencil-ds';
import { VanillaDSButton } from './VanillaDS/button.component';
import { LitElementDSButton } from './LitElementDS/button.component';
import { StencilDSButton } from './StencilDS/button.component';
import { SvelteDSButton } from './SvelteDS/button.component';
import { VanillaDSDefaultMultiType } from './VanillaDS/defaultmultitype.component';
import { VanillaDSMultiType } from './VanillaDS/multitype.component';

defineCustomElements();

@NgModule({
  declarations: [
    AppComponent,
    VanillaDSButton,
    LitElementDSButton,
    StencilDSButton,
    SvelteDSButton,
    VanillaDSDefaultMultiType,
    VanillaDSMultiType,
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
