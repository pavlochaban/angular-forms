"use strict";(self.webpackChunkforms=self.webpackChunkforms||[]).push([[113],{3921:(v,m,o)=>{o.d(m,{R:()=>_,u:()=>f});var t=o(4650),a=o(4006),c=o(210),s=o(1148),i=o(9816);const f={provide:a.gN,useFactory:()=>(0,t.f3M)(a.gN,{skipSelf:!0})};let _=(()=>{class d{constructor(){this.elRef=(0,t.f3M)(t.SBq),this.renderer=(0,t.f3M)(t.Qsj),this.controlData=(0,t.f3M)(c.N),this.controlContainer=(0,t.f3M)(a.gN),this._uniqueEmailValidationService=(0,t.f3M)(s.y,{optional:!0})}ngOnInit(){this._addCustomClass(),this.controlContainer.control instanceof a.Oe?this.controlContainer.control.push(this.abstractControl):this.controlContainer.control instanceof a.cw&&this.controlContainer.control.addControl(this.controlData.controlKey,this.abstractControl)}resolveValidators({validators:n={}}){return Object.keys(n).map(e=>this._getValidatorByKey(e,n))}resolveAsyncValidators({asyncValidators:n={}}){return Object.keys(n).map(e=>this._getAsyncValidatorByKey(e,n)).filter(Boolean)}_getValidatorByKey(n,l={}){const r=l[n];return"required"===n?a.kI.required:"email"===n?a.kI.email:"minLength"===n&&"number"==typeof r?a.kI.minLength(r):"maxLength"===n&&"number"==typeof r?a.kI.maxLength(r):"pattern"===n&&("string"==typeof r||r instanceof RegExp)?a.kI.pattern(r):"passwordMatcher"===n?i.y:a.kI.nullValidator}_getAsyncValidatorByKey(n,l={}){return"uniqueEmail"===n&&this._uniqueEmailValidationService?this._uniqueEmailValidationService.validate.bind(this._uniqueEmailValidationService):null}_addCustomClass(){this.controlData.config.htmlClass&&this.renderer.addClass(this.elRef.nativeElement,this.controlData.config.htmlClass)}}return d.\u0275fac=function(n){return new(n||d)},d.\u0275dir=t.lG2({type:d}),d})()},6113:(v,m,o)=>{o.r(m),o.d(m,{DynamicGroupComponent:()=>u});var t=o(4650),a=o(3921),c=o(4006),s=o(7392),i=o(6895),f=o(5561),_=o(1360);function d(n,l){if(1&n&&(t.ynx(0),t.GkF(1,2),t.ALo(2,"async"),t.ALo(3,"dynamicControlInjectorResolver"),t.BQk()),2&n){const r=l.$implicit,e=t.oxw();t.xp6(1),t.Q6J("ngComponentOutlet",t.lcZ(2,2,e.dynamicControlResolver.resolve(r.value.controlType)))("ngComponentOutletInjector",t.Dn7(3,4,r.key,r.value,e.controlData.config))}}let u=(()=>{class n extends a.R{constructor(){super(...arguments),this.dynamicControlResolver=(0,t.f3M)(f.D),this.abstractControl=new c.cw({},{validators:this.resolveValidators(this.controlData.config)}),this.comparatorFn=(r,e)=>{const y=this.controlData.config.controls[r.key],E=this.controlData.config.controls[e.key];return(y?y.order:-1)-(E?E.order:-1)}}trackBy(r,e){return e.key}}return n.\u0275fac=function(){let l;return function(e){return(l||(l=t.n5z(n)))(e||n)}}(),n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],hostAttrs:[1,"dynamic-form-group","form__fieldset","form-fieldset"],standalone:!0,features:[t._Bn([],[a.u]),t.qOj,t.jDz],decls:5,vars:7,consts:[[3,"formGroupName"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngComponentOutlet","ngComponentOutletInjector"]],template:function(r,e){1&r&&(t.TgZ(0,"fieldset",0)(1,"legend"),t._uU(2),t.qZA(),t.YNc(3,d,4,8,"ng-container",1),t.ALo(4,"keyvalue"),t.qZA()),2&r&&(t.Q6J("formGroupName",e.controlData.controlKey),t.xp6(2),t.Oqu(e.controlData.config.label),t.xp6(1),t.Q6J("ngForOf",t.xi3(4,4,e.controlData.config.controls,e.comparatorFn))("ngForTrackBy",e.trackBy))},dependencies:[i.ez,i.$G,i.sg,i.Ov,i.Nd,s.Ps,c.UX,c.JL,c.x0,_.c],styles:["fieldset[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;padding:15px 20px 0;gap:10px 20px;margin:0;border-radius:4px}fieldset[_ngcontent-%COMP%]    >.form__field{flex:0 0 100%}fieldset[_ngcontent-%COMP%]    >.form__field.two-columns{flex:1 0 calc(50% - 10px)}"]}),n})()},9816:(v,m,o)=>{function t(a){const c=a.get("password"),s=a.get("confirmPassword");if(!c?.value||c?.value===s?.value)return s?.updateValueAndValidity({emitEvent:!1,onlySelf:!0}),null;const i={passwordMatcher:{mismatch:!0}};return s?.setErrors(i),i}o.d(m,{y:()=>t})},1148:(v,m,o)=>{o.d(m,{y:()=>f});var t=o(9646),a=o(8746),c=o(4004),s=o(4650),i=o(362);let f=(()=>{class _{constructor(u,n){this._formsDataService=u,this._cdr=n,this._error={uniqueEmail:{isTaken:!0}}}validate(u){return u.value?this._formsDataService.checkIsEmailUnique(u.value).pipe((0,a.x)(()=>this._cdr.markForCheck()),(0,c.U)(n=>n?null:this._error)):(0,t.of)(null)}}return _.\u0275fac=function(u){return new(u||_)(s.LFG(i.l),s.LFG(s.sBO))},_.\u0275prov=s.Yz7({token:_,factory:_.\u0275fac}),_})()}}]);