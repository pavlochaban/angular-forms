import { Directive, OnInit, Output, EventEmitter, ElementRef, OnDestroy } from '@angular/core';
import { IResizeObserverOutput } from './resize-observer.model';

@Directive({
  selector: '[resizeObserverDirective]',
  standalone: true,
})
export class ResizeObserverDirective implements OnInit, OnDestroy {

  @Output() resized = new EventEmitter<IResizeObserverOutput>();

  private _observer!: ResizeObserver;

  constructor(
    private _elRef: ElementRef,
  ) { }

  public ngOnInit(): void {
    this._createResizeObserver();
    this._observe();
  }

  public ngOnDestroy(): void {
      this._unobserve();
  }

  private _createResizeObserver(): void {
    this._observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      for (let entry of entries) {
        if (!entry) { return; }

        const element = entry.target as HTMLElement;
        const entryOffsetWidth = element.offsetWidth;
        const entryOffsetHeight = element.offsetHeight;
        this.resized.emit({
          offsetWidth: entryOffsetWidth,
          offsetHeight: entryOffsetHeight,
        });
      }
    });
  }

  private _observe(): void {
    this._observer.observe(this._elRef.nativeElement);
  }

  private _unobserve(): void {
    this._observer.unobserve(this._elRef.nativeElement);
  }

}
