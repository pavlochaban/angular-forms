import { ViewChild, OnInit, ChangeDetectorRef, Directive } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatIconButton } from '@angular/material/button';
import { debounceTime, takeUntil } from 'rxjs';
import { ResizeObserverDirective } from '@common/directives/resize-observer/resize-observer-directive';
import { AppBaseDirective } from '@common/directives/app-base.directive';
import { IResizeObserverOutput } from '@common/directives/resize-observer/resize-observer.model';

@Directive()
export class AppComponentResizeDirective extends AppBaseDirective implements OnInit {

  @ViewChild(MatDrawer) sidenav!: MatDrawer;
  @ViewChild(MatIconButton) navToggler!: MatIconButton;

  public readonly smallWidth = 999;

  constructor(
    private _resizeObserverDirective: ResizeObserverDirective,
    private _cdr: ChangeDetectorRef,
  ) {
    super();
  }

  public ngOnInit(): void {
    this._subscribeOnResize();
  }

  private _subscribeOnResize(): void {
    if (this._resizeObserverDirective) {
      this._resizeObserverDirective.resized.asObservable()
        .pipe(
          debounceTime(200),
          takeUntil(this.onDestroy$)
        )
        .subscribe((event: IResizeObserverOutput) => {
          this._setMatDrawerOptions(event);
          this._setNavTogglerOptions(event);
          this._cdr.detectChanges();
        });
    }
  }

  private _setMatDrawerOptions(event: IResizeObserverOutput): void {
    if (!this.sidenav) { return; }

    const isWideWidth = event.offsetWidth > this.smallWidth;
    this.sidenav.mode = isWideWidth ? 'side' : 'over';
    if (isWideWidth) { this.sidenav.open(); }
    else { this.sidenav.close(); }
  }

  private _setNavTogglerOptions(event: IResizeObserverOutput): void {
    if (!this.navToggler) { return; }

    const isWideWidth = event.offsetWidth > this.smallWidth;
    (this.navToggler._elementRef.nativeElement as HTMLElement).toggleAttribute('hidden', isWideWidth);
  }

}
