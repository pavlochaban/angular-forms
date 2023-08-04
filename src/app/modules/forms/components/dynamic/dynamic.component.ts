import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormGroup, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { DynamicControlInjectorResolverPipe } from '@common/components/controls/dynamic-control/dynamic-control-injector-resolver.pipe';
import { DynamicFormConfig } from '@common/components/controls/dynamic-control/dynamic-control.model';
import { DynamicControlResolver } from '@common/components/controls/dynamic-control/dynamic-control.resolver';
import { FormsDataService } from '@modules/forms/services/forms-data.service';
import { EMPTY, Observable, tap } from 'rxjs';

@Component({
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.less', '../../../../common/styles/forms/forms.less'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    DynamicControlInjectorResolverPipe,
  ],
  providers: [
    DynamicControlResolver,
  ],
  host: {
    class: 'dynamic-form'
  }
})
export class DynamicComponent implements OnInit {

  @ViewChild(FormGroupDirective) public formGroupDirective!: FormGroupDirective;

  public formConfig$: Observable<DynamicFormConfig> = EMPTY;
  public formGroup: FormGroup = new FormGroup({});

  protected dynamicControlResolver = inject(DynamicControlResolver);

  private _formsDataService = inject(FormsDataService);

  public ngOnInit(): void {
    this.formConfig$ = this._formsDataService.getFormConfig().pipe(tap(() => this.formGroup = new FormGroup({})));
  }

  public onSubmit(event: SubmitEvent): void {
    console.log(this.formGroupDirective);
  }

  public onReset(event: Event): void {
    event.preventDefault();
    this.formGroupDirective.resetForm();
  }

}
