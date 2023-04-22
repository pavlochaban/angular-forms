import { NgModule } from '@angular/core';
import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { RouterTabsComponent } from '@common/components/router-tabs/router-tabs.component';
import { FormsStoreService } from './services/forms-store.service';
import { FormsDataService } from './services/forms-data.service';

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
    FormsDataService,
  ],
})
export class FormsModule { }
