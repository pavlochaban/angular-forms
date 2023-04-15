import { Injectable } from '@angular/core';
import { IRouterTabsLink } from '@common/components/router-tabs/models/router-tabs-link.model';
import { AppUrls } from '@core/constants/app-urls.constants';

@Injectable()
export class FormsStoreService {

  public tabsLink: IRouterTabsLink[] = [
    {
      label: 'Template Driven Forms',
      routerLink: AppUrls.Forms.TemplateDriven,
    },
  ];

}
