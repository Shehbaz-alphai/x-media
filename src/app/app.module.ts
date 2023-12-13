import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import {  ReactiveFormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { PricesComponent } from './prices/prices.component';
import { XmediapricesComponent } from './xmediaprices/xmediaprices.component';
import { SecComponent } from './sec/sec.component';
import { UiuxComponent } from './uiux/uiux.component';
import { AnimationComponent } from './animation/animation.component';
import { DeomeComponent } from './deome/deome.component';
import { WebDevComponent } from './web-dev/web-dev.component';
import { DynamicTableComponent } from './table/dynamic-table/dynamic-table.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    PricesComponent,
    XmediapricesComponent,
    SecComponent,
    UiuxComponent,
    AnimationComponent,
    DeomeComponent,
    WebDevComponent,
    DynamicTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-full-width',
    }),
    BrowserAnimationsModule,
    MatTooltipModule
   

  ],
  providers: [RxFormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
