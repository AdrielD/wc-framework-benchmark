import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { VanillaDSButton } from './VanillaDS/button.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    VanillaDSButton,
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
