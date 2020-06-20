(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{zrcO:function(e,t,r){"use strict";r.r(t),r.d(t,"UsersModule",(function(){return A}));var s=r("3Pt+"),i=r("ofXK"),n=r("tyNb"),b=r("fXoL");let o=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.Db({type:e,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(e,t){1&e&&(b.Mb(0,"div",0),b.Mb(1,"div",1),b.Kb(2,"router-outlet"),b.Lb(),b.Lb())},directives:[n.e],encapsulation:2}),e})();var c=r("SxV6"),a=r("J9tS");function d(e,t){1&e&&b.Kb(0,"span",10)}function u(e,t){1&e&&(b.Mb(0,"span"),b.fc(1,"Delete"),b.Lb())}function f(e,t){if(1&e){const e=b.Nb();b.Mb(0,"tr"),b.Mb(1,"td"),b.fc(2),b.Lb(),b.Mb(3,"td"),b.fc(4),b.Lb(),b.Mb(5,"td"),b.fc(6),b.Lb(),b.Mb(7,"td",6),b.Mb(8,"a",7),b.fc(9,"Edit"),b.Lb(),b.Mb(10,"button",8),b.Ub("click",(function(){b.bc(e);const r=t.$implicit;return b.Wb().deleteUser(r.id)})),b.ec(11,d,1,0,"span",9),b.ec(12,u,2,0,"span",5),b.Lb(),b.Lb(),b.Lb()}if(2&e){const e=t.$implicit;b.zb(2),b.gc(e.firstName),b.zb(2),b.gc(e.lastName),b.zb(2),b.gc(e.username),b.zb(2),b.Yb("routerLink","edit/",e.id,""),b.zb(2),b.Xb("disabled",e.isDeleting),b.zb(1),b.Xb("ngIf",e.isDeleting),b.zb(1),b.Xb("ngIf",!e.isDeleting)}}function l(e,t){1&e&&(b.Mb(0,"tr"),b.Mb(1,"td",11),b.Kb(2,"span",12),b.Lb(),b.Lb())}let m=(()=>{class e{constructor(e){this.accountService=e,this.users=null}ngOnInit(){this.accountService.getAll().pipe(Object(c.a)()).subscribe(e=>this.users=e)}deleteUser(e){this.users.find(t=>t.id===e).isDeleting=!0,this.accountService.delete(e).pipe(Object(c.a)()).subscribe(()=>{this.users=this.users.filter(t=>t.id!==e)})}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(a.a))},e.\u0275cmp=b.Db({type:e,selectors:[["ng-component"]],decls:17,vars:2,consts:[["routerLink","add",1,"btn","btn-sm","btn-success","mb-2"],[1,"table","table-striped"],[2,"width","30%"],[2,"width","10%"],[4,"ngFor","ngForOf"],[4,"ngIf"],[2,"white-space","nowrap"],[1,"btn","btn-sm","btn-primary","mr-1",3,"routerLink"],[1,"btn","btn-sm","btn-danger","btn-delete-user",3,"disabled","click"],["class","spinner-border spinner-border-sm",4,"ngIf"],[1,"spinner-border","spinner-border-sm"],["colspan","4",1,"text-center"],[1,"spinner-border","spinner-border-lg","align-center"]],template:function(e,t){1&e&&(b.Mb(0,"h1"),b.fc(1,"Users"),b.Lb(),b.Mb(2,"a",0),b.fc(3,"Add User"),b.Lb(),b.Mb(4,"table",1),b.Mb(5,"thead"),b.Mb(6,"tr"),b.Mb(7,"th",2),b.fc(8,"First Name"),b.Lb(),b.Mb(9,"th",2),b.fc(10,"Last Name"),b.Lb(),b.Mb(11,"th",2),b.fc(12,"Username"),b.Lb(),b.Kb(13,"th",3),b.Lb(),b.Lb(),b.Mb(14,"tbody"),b.ec(15,f,13,7,"tr",4),b.ec(16,l,3,0,"tr",5),b.Lb(),b.Lb()),2&e&&(b.zb(15),b.Xb("ngForOf",t.users),b.zb(1),b.Xb("ngIf",!t.users))},directives:[n.c,i.i,i.j],encapsulation:2}),e})();function p(e,t){1&e&&(b.Mb(0,"h1"),b.fc(1,"Add User"),b.Lb())}function h(e,t){1&e&&(b.Mb(0,"h1"),b.fc(1,"Edit User"),b.Lb())}function g(e,t){1&e&&(b.Mb(0,"div"),b.fc(1,"First Name is required"),b.Lb())}function v(e,t){if(1&e&&(b.Mb(0,"div",17),b.ec(1,g,2,0,"div",0),b.Lb()),2&e){const e=b.Wb();b.zb(1),b.Xb("ngIf",e.f.firstName.errors.required)}}function L(e,t){1&e&&(b.Mb(0,"div"),b.fc(1,"Last Name is required"),b.Lb())}function M(e,t){if(1&e&&(b.Mb(0,"div",17),b.ec(1,L,2,0,"div",0),b.Lb()),2&e){const e=b.Wb();b.zb(1),b.Xb("ngIf",e.f.lastName.errors.required)}}function N(e,t){1&e&&(b.Mb(0,"div"),b.fc(1,"Username is required"),b.Lb())}function w(e,t){if(1&e&&(b.Mb(0,"div",17),b.ec(1,N,2,0,"div",0),b.Lb()),2&e){const e=b.Wb();b.zb(1),b.Xb("ngIf",e.f.username.errors.required)}}function z(e,t){1&e&&(b.Mb(0,"em"),b.fc(1,"(Leave blank to keep the same password)"),b.Lb())}function X(e,t){1&e&&(b.Mb(0,"div"),b.fc(1,"Password is required"),b.Lb())}function I(e,t){1&e&&(b.Mb(0,"div"),b.fc(1,"Password must be at least 6 characters"),b.Lb())}function S(e,t){if(1&e&&(b.Mb(0,"div",17),b.ec(1,X,2,0,"div",0),b.ec(2,I,2,0,"div",0),b.Lb()),2&e){const e=b.Wb();b.zb(1),b.Xb("ngIf",e.f.password.errors.required),b.zb(1),b.Xb("ngIf",e.f.password.errors.minlength)}}function U(e,t){1&e&&b.Kb(0,"span",18)}const y=function(e){return{"is-invalid":e}};let C=(()=>{class e{constructor(e,t,r,s,i){this.formBuilder=e,this.route=t,this.router=r,this.accountService=s,this.alertService=i,this.loading=!1,this.submitted=!1}ngOnInit(){this.id=this.route.snapshot.params.id,this.isAddMode=!this.id;const e=[s.h.minLength(6)];this.isAddMode&&e.push(s.h.required),this.form=this.formBuilder.group({firstName:["",s.h.required],lastName:["",s.h.required],username:["",s.h.required],password:["",e]}),this.isAddMode||this.accountService.getById(this.id).pipe(Object(c.a)()).subscribe(e=>{this.f.firstName.setValue(e.firstName),this.f.lastName.setValue(e.lastName),this.f.username.setValue(e.username)})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.isAddMode?this.createUser():this.updateUser())}createUser(){this.accountService.register(this.form.value).pipe(Object(c.a)()).subscribe(e=>{this.alertService.success("User added successfully",{keepAfterRouteChange:!0}),this.router.navigate([".",{relativeTo:this.route}])},e=>{this.alertService.error(e),this.loading=!1})}updateUser(){this.accountService.update(this.id,this.form.value).pipe(Object(c.a)()).subscribe(e=>{this.alertService.success("Update successful",{keepAfterRouteChange:!0}),this.router.navigate(["..",{relativeTo:this.route}])},e=>{this.alertService.error(e),this.loading=!1})}}return e.\u0275fac=function(t){return new(t||e)(b.Jb(s.b),b.Jb(n.a),b.Jb(n.b),b.Jb(a.a),b.Jb(a.b))},e.\u0275cmp=b.Db({type:e,selectors:[["ng-component"]],decls:32,vars:22,consts:[[4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col"],["for","firstName"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","lastName"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],["for","username"],["type","text","formControlName","username",1,"form-control",3,"ngClass"],["for","password"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],[1,"form-group"],[1,"btn","btn-primary",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["routerLink","/users",1,"btn","btn-link"],[1,"invalid-feedback"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,t){1&e&&(b.ec(0,p,2,0,"h1",0),b.ec(1,h,2,0,"h1",0),b.Mb(2,"form",1),b.Ub("ngSubmit",(function(){return t.onSubmit()})),b.Mb(3,"div",2),b.Mb(4,"div",3),b.Mb(5,"label",4),b.fc(6,"First Name"),b.Lb(),b.Kb(7,"input",5),b.ec(8,v,2,1,"div",6),b.Lb(),b.Mb(9,"div",3),b.Mb(10,"label",7),b.fc(11,"Last Name"),b.Lb(),b.Kb(12,"input",8),b.ec(13,M,2,1,"div",6),b.Lb(),b.Lb(),b.Mb(14,"div",2),b.Mb(15,"div",3),b.Mb(16,"label",9),b.fc(17,"Username"),b.Lb(),b.Kb(18,"input",10),b.ec(19,w,2,1,"div",6),b.Lb(),b.Mb(20,"div",3),b.Mb(21,"label",11),b.fc(22," Password "),b.ec(23,z,2,0,"em",0),b.Lb(),b.Kb(24,"input",12),b.ec(25,S,3,2,"div",6),b.Lb(),b.Lb(),b.Mb(26,"div",13),b.Mb(27,"button",14),b.ec(28,U,1,0,"span",15),b.fc(29," Save "),b.Lb(),b.Mb(30,"a",16),b.fc(31,"Cancel"),b.Lb(),b.Lb(),b.Lb()),2&e&&(b.Xb("ngIf",t.isAddMode),b.zb(1),b.Xb("ngIf",!t.isAddMode),b.zb(1),b.Xb("formGroup",t.form),b.zb(5),b.Xb("ngClass",b.Zb(14,y,t.submitted&&t.f.firstName.errors)),b.zb(1),b.Xb("ngIf",t.submitted&&t.f.firstName.errors),b.zb(4),b.Xb("ngClass",b.Zb(16,y,t.submitted&&t.f.lastName.errors)),b.zb(1),b.Xb("ngIf",t.submitted&&t.f.lastName.errors),b.zb(5),b.Xb("ngClass",b.Zb(18,y,t.submitted&&t.f.username.errors)),b.zb(1),b.Xb("ngIf",t.submitted&&t.f.username.errors),b.zb(4),b.Xb("ngIf",!t.isAddMode),b.zb(1),b.Xb("ngClass",b.Zb(20,y,t.submitted&&t.f.password.errors)),b.zb(1),b.Xb("ngIf",t.submitted&&t.f.password.errors),b.zb(2),b.Xb("disabled",t.loading),b.zb(1),b.Xb("ngIf",t.loading))},directives:[i.j,s.i,s.f,s.d,s.a,s.e,s.c,i.h,n.c],encapsulation:2}),e})();const k=[{path:"",component:o,children:[{path:"",component:m},{path:"add",component:C},{path:"edit/:id",component:C}]}];let q=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(t){return new(t||e)},imports:[[n.d.forChild(k)],n.d]}),e})(),A=(()=>{class e{}return e.\u0275mod=b.Hb({type:e}),e.\u0275inj=b.Gb({factory:function(t){return new(t||e)},imports:[[i.b,s.g,q]]}),e})()}}]);