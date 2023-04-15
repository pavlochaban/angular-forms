import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AppComponentResizeDirective } from './common/directives/app-component/app-component-resize.directive';
import { ResizeObserverDirective } from './common/directives/resize-observer-directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  hostDirectives: [ResizeObserverDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent extends AppComponentResizeDirective {

  constructor(
    resizeObserverDirective: ResizeObserverDirective,
    cdr: ChangeDetectorRef,
  ) {
    super(
      resizeObserverDirective,
      cdr,
    );
  }

  public toggleSidenav(): void {
    if (!this.sidenav) { return; }

    this.sidenav.toggle();
  }

}
