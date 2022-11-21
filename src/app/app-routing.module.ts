import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';


const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'page',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () => import('./page/page.module')
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
