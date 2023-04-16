import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: 'reactive.component.html',
  styleUrls: ['reactive.component.less'],
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveComponent{ }
