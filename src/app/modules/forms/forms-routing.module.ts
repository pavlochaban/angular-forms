import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './forms.component';
import { AppUrls } from '@core/constants/app-urls.constants';
import { TemplateDrivenFormComponent } from './components/template-driven/template-driven.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      {
        path: AppUrls.Forms.TemplateDriven,
        component: TemplateDrivenFormComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
