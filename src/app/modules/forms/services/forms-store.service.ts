import { Injectable } from '@angular/core';
import { IRouterTabsLink } from '@common/components/router-tabs/models/router-tabs-link.model';

@Injectable()
export class FormsStoreService {

  public tabsLink: IRouterTabsLink[] = [];

}
