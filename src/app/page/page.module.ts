import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {PageRoutingModule} from './page-router.module';
import {HomeComponent} from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    PageRoutingModule
  ]
})
export class PageModule {
}
