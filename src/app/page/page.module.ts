
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HomeComponent} from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PageRoutingModule} from './page-router.module';
import { HomeComponent } from './home/home.component';
import { PageComponent } from './page.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    PageRoutingModule
  ]
})
export class PageModule { }

