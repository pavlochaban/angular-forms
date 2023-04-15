import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUrls } from '@core/constants/app-urls.constants';

const routes: Routes = [
  {
    path: AppUrls.Forms.Base,
    loadChildren: () => import('@modules/forms/forms.module').then(m => m.FormsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
