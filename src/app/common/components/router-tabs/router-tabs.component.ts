import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { IRouterTabsLink } from './models/router-tabs-link.model';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, takeUntil } from 'rxjs';
import { AppBaseDirective } from '@common/directives/app-base.directive';

@Component({
  selector: 'router-tabs',
  templateUrl: 'router-tabs.component.html',
  standalone: true,
  imports: [MatTabsModule, CommonModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouterTabsComponent extends AppBaseDirective implements OnInit {

  @Input() links: IRouterTabsLink[] = [];

  public activeLinkRoute: string | null = null;

  constructor(
    private _router: Router,
  ) {
    super();
  }

  public ngOnInit(): void {
    this._onRouterNavigation();
    this._activateLinkByUrl(this._router.url);
  }

  private _onRouterNavigation(): void {
    this._router.events
      .pipe(
        takeUntil(this.onDestroy$),
        filter((event) => event instanceof NavigationEnd)
      )
      .subscribe((event: unknown) => {
        const url = (event as NavigationEnd).url;
        this._activateLinkByUrl(url);
      });
  }

  private _activateLinkByUrl(url: string): void {
    const find = this.links.find((link: IRouterTabsLink) => url.includes(link.routerLink));
    this.activeLinkRoute = find?.routerLink || null;
  }

}
