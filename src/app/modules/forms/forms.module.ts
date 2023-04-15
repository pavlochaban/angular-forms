import { NgModule } from '@angular/core';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { RouterTabsComponent } from '@common/components/router-tabs/router-tabs.component';
import { FormsStoreService } from './services/forms-store.service';

@NgModule({
  imports: [
    FormsRoutingModule,
    RouterTabsComponent,
  ],
  declarations: [
    FormsComponent,
  ],
  providers: [
    FormsStoreService,
  ],
})
export class FormsModule { }
