import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { AppUrls } from '@core/constants/app-urls.constants';
import { TemplateDrivenFormComponent } from './components/template-driven/template-driven.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: AppUrls.Forms.TemplateDriven,
        loadComponent: () => import('./components/template-driven/template-driven.component').then(m => m.TemplateDrivenFormComponent)
      },
      {
        path: AppUrls.Forms.Reactive,
        loadComponent: () => import('./components/reactive/reactive.component').then(m => m.ReactiveComponent)
      },
      {
        path: AppUrls.Forms.Dynamic,
        loadComponent: () => import('./components/dynamic/dynamic.component').then(m => m.DynamicComponent)
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
