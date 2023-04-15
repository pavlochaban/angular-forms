import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainNavService } from '@core/services/main-nav.service';
import { IMainNavLink } from '@core/models/main-nav-link.model';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.less'],
  standalone: true,
  imports: [MatListModule, CommonModule, RouterModule],
  providers: [MainNavService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {

  get mainNavLinks(): IMainNavLink[] {
    return this._mainNavService.navLinks;
  }

  constructor(
    private _mainNavService: MainNavService
  ) { }

}
