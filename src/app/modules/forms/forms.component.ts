import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IRouterTabsLink } from '@common/components/router-tabs/models/router-tabs-link.model';
import { FormsStoreService } from './services/forms-store.service';

@Component({
  templateUrl: 'forms.component.html',
  styleUrls: ['forms.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormsComponent {

  get tabsLink(): IRouterTabsLink[] {
    return this.formsStoreService.tabsLink;
  }

  constructor(
    private formsStoreService: FormsStoreService,
  ) { }

}
