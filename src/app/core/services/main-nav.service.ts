import { Injectable } from '@angular/core';
import { AppUrls } from '@core/constants/app-urls.constants';
import { IMainNavLink } from '@core/models/main-nav-link.model';

@Injectable({providedIn: 'root'})
export class MainNavService {

  public navLinks: IMainNavLink[] = [
    {
      label: 'Forms',
      routerLink: AppUrls.Forms.Base
    },
  ];

}
