"use strict";(self.webpackChunkforms=self.webpackChunkforms||[]).push([[271],{5271:(tt,p,a)=>{a.r(p),a.d(p,{ReactiveComponent:()=>z});var s=a(6895),m=a(9549),d=a(4144),_=a(2350),O=a(3238),g=a(4859),u=a(7392),C=a(6709),i=a(4006),P=a(515),k=a(7579),h=a(8505),x=a(2722),y=a(1148),b=a(9816),M=a(7166),t=a(4650);let I=(()=>{class e{transform(n){if(!n||n instanceof i.NI||n instanceof i.Oe||n instanceof i.nm)throw"There is no nested controls";return n.controls}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"nestedGroupControls",type:e,pure:!0,standalone:!0}),e})();const A=e=>(r,n)=>{const o=e[r.key],l=e[n.key];return(o?o.order:-1)-(l?l.order:-1)};let S=(()=>{class e{transform(n){if(!n||n instanceof i.cw||n instanceof i.Oe||n instanceof i.nm)throw"Value is not FormControl";return n}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275pipe=t.Yjl({name:"guardControlInstance",type:e,pure:!0,standalone:!0}),e})();const F={firstName:{controlType:"input",type:"text",label:"First Name",placeholder:"Enter your name",autocomplete:"username",order:0},lastName:{controlType:"input",type:"text",label:"Last Name",placeholder:"Enter your last name",order:1},nickname:{controlType:"input",type:"text",label:"Nickname",placeholder:"Enter your nickname",order:2},email:{controlType:"input",type:"email",label:"Email",placeholder:"Enter your email",order:3},birthday:{controlType:"date",label:"Choose a date",order:4},address:{controlType:"group",label:"Address",htmlClass:"td-form__address-fieldset",order:5,controls:{fullAddress:{controlType:"input",type:"text",label:"Full Address",placeholder:"Street name and house number",htmlClass:"td-form__full-address",order:0},city:{controlType:"input",type:"text",label:"City",placeholder:"Enter city",htmlClass:"td-form__city",order:1},postalCode:{controlType:"input",type:"number",label:"Post Code",placeholder:"Enter postal code",htmlClass:"td-form__postal-code",order:2}}},phones:{controlType:"custom_phones",label:"Phones",htmlClass:"td-form__phones-fieldset",order:6},skills:{controlType:"custom_skills",label:"Skills",htmlClass:"td-form__skills-fieldset",order:7},credentials:{controlType:"group",label:"Credentials",htmlClass:"td-form__password-fieldset",order:8,controls:{password:{controlType:"input",type:"password",label:"Password",placeholder:"Password",autocomplete:"new-password",order:0},confirmPassword:{controlType:"input",type:"password",label:"Confirm Password",placeholder:"Confirm Password",order:1}}}};var R=a(362);function Z(e,r){1&e&&t.GkF(0)}const v=function(e,r){return{$implicit:e,controlConfig:r}};function Q(e,r){if(1&e&&(t.ynx(0),t.YNc(1,Z,1,0,"ng-container",13),t.BQk()),2&e){const n=t.oxw().ngIf,o=t.oxw().$implicit;t.oxw();const l=t.MAs(9);t.xp6(1),t.Q6J("ngTemplateOutlet",l)("ngTemplateOutletContext",t.WLB(2,v,o,n))}}function J(e,r){if(1&e&&(t.TgZ(0,"mat-form-field",14)(1,"mat-label"),t._uU(2),t.qZA(),t._UZ(3,"input",15)(4,"mat-datepicker-toggle",16)(5,"mat-datepicker",null,17),t.qZA()),2&e){const n=t.MAs(6),o=t.oxw().ngIf,l=t.oxw().$implicit;t.xp6(2),t.Oqu(o.label),t.xp6(1),t.Q6J("formControlName",l.key)("matDatepicker",n),t.xp6(1),t.Q6J("for",n)}}function G(e,r){1&e&&t.GkF(0)}function Y(e,r){if(1&e&&(t.ynx(0),t.YNc(1,G,1,0,"ng-container",13),t.BQk()),2&e){const n=r.ngIf,o=t.oxw().$implicit;t.oxw(4);const l=t.MAs(9);t.xp6(1),t.Q6J("ngTemplateOutlet",l)("ngTemplateOutletContext",t.WLB(2,v,o,n))}}function E(e,r){if(1&e&&(t.ynx(0),t.YNc(1,Y,2,5,"ng-container",7),t.BQk()),2&e){const n=r.$implicit,o=t.oxw(2).ngIf;t.xp6(1),t.Q6J("ngIf",null==o.controls?null:o.controls[n.key])}}function L(e,r){if(1&e&&(t.TgZ(0,"fieldset",18)(1,"legend"),t._uU(2),t.qZA(),t.YNc(3,E,2,1,"ng-container",1),t.ALo(4,"keyvalue"),t.ALo(5,"nestedGroupControls"),t.qZA()),2&e){const n=t.oxw().ngIf,o=t.oxw().$implicit,l=t.oxw();t.Tol(n.htmlClass),t.Q6J("formGroupName",o.key),t.xp6(2),t.Oqu(n.label),t.xp6(1),t.Q6J("ngForOf",t.xi3(4,5,t.lcZ(5,8,o.value),l.comparatorFn(n.controls)))}}function $(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"mat-icon",22),t.NdJ("click",function(l){t.CHM(n);const c=t.oxw(4);return t.KtG(c.onAddPhone(l))}),t._uU(1,"add"),t.qZA()}}function D(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"mat-icon",25),t.NdJ("click",function(l){t.CHM(n);const c=t.oxw().index,f=t.oxw(4);return t.KtG(f.onDeletePhone(l,c))}),t._uU(1,"delete"),t.qZA()}}function U(e,r){if(1&e&&(t.TgZ(0,"mat-form-field",14)(1,"mat-label"),t._uU(2),t.qZA(),t._UZ(3,"input",23),t.YNc(4,D,2,0,"mat-icon",24),t.qZA()),2&e){const n=r.index,o=t.oxw(4);t.xp6(2),t.hij("Phone #",n+1,""),t.xp6(1),t.Q6J("formControlName",n),t.xp6(1),t.Q6J("ngIf",o.form.controls.phones.length>1)}}function V(e,r){if(1&e&&(t.TgZ(0,"fieldset",19)(1,"legend"),t._uU(2),t.YNc(3,$,2,0,"mat-icon",20),t.qZA(),t.YNc(4,U,5,3,"mat-form-field",21),t.qZA()),2&e){const n=t.oxw().ngIf,o=t.oxw().$implicit,l=t.oxw();t.Tol(n.htmlClass),t.Q6J("formArrayName",o.key),t.xp6(2),t.hij("",n.label," "),t.xp6(1),t.Q6J("ngIf",l.form.controls.phones.length<5),t.xp6(1),t.Q6J("ngForOf",l.form.controls.phones.controls)}}function B(e,r){if(1&e&&(t.TgZ(0,"mat-checkbox",28),t._uU(1),t.ALo(2,"titlecase"),t.qZA()),2&e){const n=r.$implicit;t.Q6J("formControlName",n),t.xp6(1),t.hij(" ",t.lcZ(2,2,n)," ")}}function q(e,r){if(1&e&&(t.ynx(0),t.YNc(1,B,3,4,"mat-checkbox",27),t.BQk()),2&e){const n=r.ngIf;t.xp6(1),t.Q6J("ngForOf",n)}}function j(e,r){if(1&e&&(t.TgZ(0,"fieldset",18)(1,"legend"),t._uU(2),t.qZA(),t.YNc(3,q,2,1,"ng-container",26),t.ALo(4,"async"),t.qZA()),2&e){const n=t.oxw().ngIf,o=t.oxw().$implicit,l=t.oxw(),c=t.MAs(11);t.Tol(n.htmlClass),t.Q6J("formGroupName",o.key),t.xp6(2),t.Oqu(n.label),t.xp6(1),t.Q6J("ngIf",t.lcZ(4,6,l.skills$))("ngIfElse",c)}}function W(e,r){if(1&e&&(t.ynx(0)(1,8),t.YNc(2,Q,2,5,"ng-container",9),t.YNc(3,J,7,4,"mat-form-field",10),t.YNc(4,L,6,10,"fieldset",11),t.YNc(5,V,5,6,"fieldset",12),t.YNc(6,j,5,8,"fieldset",11),t.BQk()()),2&e){const n=r.ngIf;t.xp6(1),t.Q6J("ngSwitch",n.controlType),t.xp6(1),t.Q6J("ngSwitchCase","input"),t.xp6(1),t.Q6J("ngSwitchCase","date"),t.xp6(1),t.Q6J("ngSwitchCase","group"),t.xp6(1),t.Q6J("ngSwitchCase","custom_phones"),t.xp6(1),t.Q6J("ngSwitchCase","custom_skills")}}function H(e,r){if(1&e&&(t.ynx(0),t.YNc(1,W,7,6,"ng-container",7),t.BQk()),2&e){const n=r.$implicit,o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.formConfig[n.key])}}function K(e,r){if(1&e&&(t._UZ(0,"input-form-control",29),t.ALo(1,"guardControlInstance")),2&e){const o=r.controlConfig;t.Q6J("formControl",t.lcZ(1,5,r.$implicit.value))("placeholder",o.placeholder)("autocomplete",o.autocomplete)("label",o.label)("type",o.type)}}function X(e,r){1&e&&(t.TgZ(0,"span",30),t._uU(1,"Skills is loading ..."),t.qZA(),t.TgZ(2,"mat-icon",31),t._uU(3,"autorenew"),t.qZA())}let z=(()=>{class e{constructor(n,o,l){this._fb=n,this._uniqueEmailValidationService=o,this._formsDataService=l,this.form=this._fb.group({firstName:["",[i.kI.required,i.kI.minLength(6)]],lastName:["",[i.kI.minLength(6)]],nickname:["",[i.kI.required,i.kI.minLength(1),i.kI.maxLength(25),i.kI.pattern(/^[\w.]+$/)]],email:["",{validators:[i.kI.required,i.kI.email,i.kI.minLength(4)],asyncValidators:[this._uniqueEmailValidationService.validate.bind(this._uniqueEmailValidationService)],updateOn:"blur"}],birthday:"",address:this._fb.group({fullAddress:"",city:"",postalCode:""}),phones:this._fb.array([""]),skills:this._fb.group({}),credentials:this._fb.group({password:["",[i.kI.required,i.kI.minLength(8)]],confirmPassword:["",[i.kI.minLength(8)]]},{validators:[b.y]})}),this.formConfig=F,this.comparatorFn=A,this.skills$=P.E,this._onDestroy$=new k.x}ngOnInit(){this._loadSkills(),this._firstNameControlSubscribe(),this._addValidators()}ngAfterViewInit(){setTimeout(()=>{this._initialFormValues=this.form.value})}ngOnDestroy(){this._onDestroy$.next(),this._onDestroy$.complete()}onSubmit(n){this.form.invalid||this.form.pending||(this._initialFormValues=this.form.value,this.formGroupDirective.resetForm(this._initialFormValues))}onReset(n){n.preventDefault(),this.formGroupDirective.resetForm(this._initialFormValues)}onAddPhone(n){n.stopPropagation(),this.form.controls.phones.insert(this.form.controls.phones.length,new i.NI)}onDeletePhone(n,o){n.stopPropagation(),this.form.controls.phones.removeAt(o)}_firstNameControlSubscribe(){this.form.controls.firstName.valueChanges.pipe((0,h.b)(()=>{this.form.controls.nickname.updateValueAndValidity()}),(0,x.R)(this._onDestroy$)).subscribe()}_addValidators(){this.form.controls.nickname.addValidators(function T(e,r){const n=Array.isArray(e)?e:[e];return o=>function N(e,r,n){return n?.value?r.value?.toLowerCase()===n.value?.toLowerCase():!!e.find(o=>r.value?.toLowerCase()===o?.toLowerCase())}(n,o,r)?function w(e,r){return r?.value?{wordsBlacklist:{bannedWords:r.value}}:e?.length?{wordsBlacklist:{bannedWords:e.join(", ")}}:null}(n,r):null}([],this.form.controls.firstName))}_loadSkills(){this.skills$=this._formsDataService.getSkills().pipe((0,h.b)(n=>{this._buildSkillsForm(n)}),(0,x.R)(this._onDestroy$))}_buildSkillsForm(n){n.forEach(o=>{this.form.controls.skills.addControl(o,new i.NI(!1,{nonNullable:!0}))})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(i.qu),t.Y36(y.y),t.Y36(R.l))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],viewQuery:function(n,o){if(1&n&&t.Gf(i.sg,5),2&n){let l;t.iGM(l=t.CRH())&&(o.formGroupDirective=l.first)}},standalone:!0,features:[t._Bn([y.y]),t.jDz],decls:12,vars:5,consts:[[1,"td-form","autofill-corrections",3,"formGroup","ngSubmit","reset"],[4,"ngFor","ngForOf"],[1,"td-form__footer"],["type","reset","mat-raised-button",""],["type","submit","mat-raised-button","","color","primary"],["inputControlTemplate",""],["skillsLoadingTemplate",""],[4,"ngIf"],[3,"ngSwitch"],[4,"ngSwitchCase"],["appearance","outline",4,"ngSwitchCase"],[3,"formGroupName","class",4,"ngSwitchCase"],[3,"formArrayName","class",4,"ngSwitchCase"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["appearance","outline"],["matInput","",3,"formControlName","matDatepicker"],["matIconSuffix","",3,"for"],["picker",""],[3,"formGroupName"],[3,"formArrayName"],["matSuffix","","color","accent",3,"click",4,"ngIf"],["appearance","outline",4,"ngFor","ngForOf"],["matSuffix","","color","accent",3,"click"],["matInput","","placeholder","Enter your phone",3,"formControlName"],["matSuffix","","color","warn",3,"click",4,"ngIf"],["matSuffix","","color","warn",3,"click"],[4,"ngIf","ngIfElse"],["color","primary",3,"formControlName",4,"ngFor","ngForOf"],["color","primary",3,"formControlName"],[3,"formControl","placeholder","autocomplete","label","type"],[1,"color-accent"],["matSuffix","","color","accent",1,"animate-icon-circle-loader"]],template:function(n,o){1&n&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(c){return o.onSubmit(c)})("reset",function(c){return o.onReset(c)}),t.YNc(1,H,2,1,"ng-container",1),t.ALo(2,"keyvalue"),t.TgZ(3,"div",2)(4,"button",3),t._uU(5,"Reset"),t.qZA(),t.TgZ(6,"button",4),t._uU(7,"Submit"),t.qZA()()(),t.YNc(8,K,2,7,"ng-template",null,5,t.W1O),t.YNc(10,X,4,0,"ng-template",null,6,t.W1O)),2&n&&(t.Q6J("formGroup",o.form),t.xp6(1),t.Q6J("ngForOf",t.xi3(2,2,o.form.controls,o.comparatorFn(o.formConfig))))},dependencies:[s.ez,s.sg,s.O5,s.tP,s.RF,s.n9,s.Ov,s.rS,s.Nd,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.oH,i.sg,i.u,i.x0,i.CE,m.lN,m.KE,m.hX,m.R9,u.Ps,u.Hw,d.c,d.Nt,_.FA,_.Mq,_.hl,_.nW,O.XK,g.ot,g.lW,C.p9,C.oG,M.Y,I,S],styles:[".td-form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;max-width:600px;margin:0 auto;padding-top:20px}.td-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], .td-form[_ngcontent-%COMP%]   input-form-control[_ngcontent-%COMP%]{flex:1 0 calc(50% - 10px)}.td-form[_ngcontent-%COMP%]   mat-error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}.td-form[_ngcontent-%COMP%]   .td-form__skills-fieldset[_ngcontent-%COMP%], .td-form[_ngcontent-%COMP%]   .td-form__phones-fieldset[_ngcontent-%COMP%], .td-form[_ngcontent-%COMP%]   .td-form__password-fieldset[_ngcontent-%COMP%], .td-form[_ngcontent-%COMP%]   .td-form__address-fieldset[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;flex:0 0 calc(100% - 44px);padding:15px 20px 0;gap:10px 20px;margin:0;border-radius:4px}.td-form[_ngcontent-%COMP%]   .td-form__phones-fieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%]{display:flex;align-items:center;line-height:1}.td-form[_ngcontent-%COMP%]   .td-form__phones-fieldset[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], .td-form[_ngcontent-%COMP%]   .td-form__phones-fieldset[_ngcontent-%COMP%]   input-form-control[_ngcontent-%COMP%]{flex:0 0 100%}.td-form[_ngcontent-%COMP%]   .td-form__phones-fieldset[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{cursor:pointer}.td-form[_ngcontent-%COMP%]   .td-form__skills-fieldset[_ngcontent-%COMP%]{padding:5px 20px 10px}.td-form[_ngcontent-%COMP%]   .td-form__skills-fieldset[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%]{flex:0 0 calc(25% - 15px)}.td-form[_ngcontent-%COMP%]   .td-form__full-address[_ngcontent-%COMP%]{flex:0 0 100%}.td-form[_ngcontent-%COMP%]   .td-form__city[_ngcontent-%COMP%], .td-form[_ngcontent-%COMP%]   .td-form__postal-code[_ngcontent-%COMP%]{flex:0 0 calc(50% - 10px)}.td-form[_ngcontent-%COMP%]   .td-form__footer[_ngcontent-%COMP%]{flex:1;display:flex;justify-content:flex-end;gap:20px}.color-accent[_ngcontent-%COMP%]{color:#69f0ae}"],changeDetection:0}),e})()}}]);