import {CommonModule} from '@angular/common';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';


@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LayoutModule {
}
