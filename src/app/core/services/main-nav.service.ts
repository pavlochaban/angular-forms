import { Injectable } from '@angular/core';
import { IMainNavLink } from '../models/main-nav-link.model';

@Injectable({providedIn: 'root'})
export class MainNavService {

  public navLinks: IMainNavLink[] = [
    {
      label: 'form',
      routerLink: '/form/form'
    },
    {
      label: 'home',
      routerLink: './home'
    }
  ];

}
