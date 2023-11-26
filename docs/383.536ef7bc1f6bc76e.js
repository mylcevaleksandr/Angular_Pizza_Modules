"use strict";(self.webpackChunkItLogia40Module_Angular_Pizza_Modules=self.webpackChunkItLogia40Module_Angular_Pizza_Modules||[]).push([[383],{6460:(x,d,c)=>{c.r(d),c.d(d,{ProductsModule:()=>J});var r=c(6814),s=c(266),v=c(9397),t=c(5879),g=c(7942),m=c(7422),C=c(9862);let a=(()=>{class e{constructor(){this.title=""}toUpper(){return this.title.toUpperCase()}toLower(){return this.title.toLowerCase()}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["custom-title"]],inputs:{title:"title"},decls:2,vars:1,consts:[[1,"product__title"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0),t._uU(1),t.qZA()),2&n&&(t.xp6(1),t.Oqu(i.title))},styles:[".product__title[_ngcontent-%COMP%]{position:relative;font-size:18px;font-family:Muller Bold,sans-serif;color:#382400;z-index:1}"]})}return e})(),_=(()=>{class e{constructor(o){this.cartService=o,this.count=0}static#t=this.\u0275fac=function(n){return new(n||e)(t.LFG(m.N))};static#e=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac})}return e})(),P=(()=>{class e{constructor(o,n){this.templateRef=o,this.viewContainer=n}set isChicken(o){o.toLowerCase().includes("\u043a\u0443\u0440"),this.viewContainer.createEmbeddedView(this.templateRef)}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(t.Rgc),t.Y36(t.s_b))};static#e=this.\u0275dir=t.lG2({type:e,selectors:[["","isChicken",""]],inputs:{isChicken:"isChicken"}})}return e})(),f=(()=>{class e{transform(o,n){let i=o;return n.forEach(p=>{i=i.replace(new RegExp("[\u0410-\u042f\u0430-\u044f]*"+p.slice(1)+"[\u0430-\u044f]*","g"),l=>l.toUpperCase())}),i}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275pipe=t.Yjl({name:"wordUpper",type:e,pure:!0})}return e})();function Z(e,u){1&e&&t._UZ(0,"div")}function T(e,u){if(1&e&&(t.TgZ(0,"div",10),t._UZ(1,"img",11),t.qZA()),2&e){const o=t.oxw(2);t.xp6(1),t.MGl("alt","pizza ",o.i+1,""),t.Q6J("src",o.product.image,t.LSH)}}function M(e,u){if(1&e&&(t.TgZ(0,"div",10),t._UZ(1,"img",12),t.qZA()),2&e){const o=t.oxw(2);t.xp6(1),t.MGl("alt","pizza ",o.i+1,"")}}const y=function(){return["\u0441\u044b\u0440","\u0442\u043e\u043c\u0430\u0442","\u0441\u043e\u0441\u044c","\u0433\u0440\u0438"]},z=function(e){return{product:e}},A=function(e){return["/products",e]};function w(e,u){if(1&e&&(t.TgZ(0,"div",1),t.YNc(1,Z,1,0,"div",2),t.YNc(2,T,2,2,"ng-template",null,3,t.W1O),t.YNc(4,M,2,1,"ng-template",null,4,t.W1O),t._UZ(6,"custom-title",5),t.ALo(7,"uppercase"),t.TgZ(8,"div",6),t._uU(9),t.ALo(10,"wordUpper"),t.ALo(11,"titlecase"),t.qZA(),t.TgZ(12,"div",7)(13,"a",8),t._uU(14,"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),t.qZA(),t.TgZ(15,"a",9),t._uU(16,"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),t.qZA()()()),2&e){const o=t.MAs(3),n=t.MAs(5),i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.product.image)("ngIfThen",o)("ngIfElse",n),t.xp6(5),t.Q6J("title",t.lcZ(7,7,i.product.title)),t.xp6(3),t.Oqu(t.xi3(10,9,t.lcZ(11,12,i.product.description),t.DdM(14,y))),t.xp6(4),t.Q6J("queryParams",t.VKq(15,z,i.product.title)),t.xp6(2),t.Q6J("routerLink",t.VKq(17,A,i.product.id))}}let O=(()=>{class e{constructor(o){this.cartProductService=o,this.i=0,this.addToCartEvent=new t.vpe,this.product={id:0,image:"",title:"",description:"",date:""}}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(_))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["product-card"]],viewQuery:function(n,i){if(1&n&&t.Gf(a,5),2&n){let p;t.iGM(p=t.CRH())&&(i.titleComponent=p.first)}},inputs:{product:"product",i:"i"},outputs:{addToCartEvent:"addToCartEvent"},features:[t._Bn([_])],decls:1,vars:1,consts:[["class","product",4,"isChicken"],[1,"product"],[4,"ngIf","ngIfThen","ngIfElse"],["productImageBlock",""],["defaultImageBlock",""],[3,"title"],[1,"product__text"],[1,"product__action"],["routerLink","/order",1,"btn","product__btn",3,"queryParams"],[1,"btn","product__btn","btn__white",3,"routerLink"],[1,"product__image"],[3,"src","alt"],["src","/src/assets/images/pizzzzza.png",3,"alt"]],template:function(n,i){1&n&&t.YNc(0,w,17,19,"div",0),2&n&&t.Q6J("isChicken",i.product.description)},dependencies:[s.rH,r.O5,a,P,r.gd,r.rS,f],styles:[".product[_ngcontent-%COMP%]{width:282px;text-align:center;background-color:#fff;box-shadow:0 3px 13.8px 1.2px #98989880;padding:15px 20px;box-sizing:border-box;margin-top:24px}.product[_ngcontent-%COMP%]:hover   .product__image[_ngcontent-%COMP%]{transform:scale(1.2);position:relative;z-index:0}.product__image[_ngcontent-%COMP%]{height:180px;display:flex;align-items:center;justify-content:center}.product__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;max-height:100%}.product__text[_ngcontent-%COMP%]{margin:14px 0 15px;font-size:14px;color:#181a1a;line-height:1.286;text-align:center;height:49px}.product__action[_ngcontent-%COMP%]{display:flex;flex-direction:column}.btn__white[_ngcontent-%COMP%]{background:transparent;border:1px solid rgb(255,175,24);color:#ffaf18;margin-top:10px}.product__btn[_ngcontent-%COMP%]{width:242px;height:50px;padding:17px}@media screen and (max-width: 1229px){.product[_ngcontent-%COMP%]{margin:12px}}"]})}return e})();function U(e,u){if(1&e&&t._UZ(0,"product-card",6),2&e){const n=u.index;t.Q6J("product",u.$implicit)("i",n)}}function b(e,u){1&e&&(t.TgZ(0,"div",7),t._UZ(1,"div",8),t.qZA())}function I(e,u){1&e&&t._UZ(0,"div")}function Y(e,u){if(1&e&&(t.TgZ(0,"div",11),t._UZ(1,"img",12),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.MGl("alt","pizza ",o.product.id,""),t.Q6J("src",o.product.image,t.LSH)}}function F(e,u){if(1&e&&(t.TgZ(0,"div",11),t._UZ(1,"img",13),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.MGl("alt","pizza ",o.product.id,"")}}const L=function(){return["\u0441\u044b\u0440","\u0442\u043e\u043c\u0430\u0442","\u0441\u043e\u0441\u044c","\u0433\u0440\u0438"]},B=function(e){return{product:e}},k=[{path:"",component:(()=>{class e{constructor(o,n,i,p){this.productService=o,this.cartService=n,this.router=i,this.http=p,this.products=[],this.loading=!1}ngOnInit(){this.loading=!0,this.productService.getProducts().pipe((0,v.b)(()=>{this.loading=!1})).subscribe({next:o=>{this.products=o},error:o=>{console.log(o),this.router.navigate(["/"])}})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(g.M),t.Y36(m.N),t.Y36(s.F0),t.Y36(C.eN))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-products"]],decls:7,vars:2,consts:[[1,"products"],[1,"container"],["id","productsHeader",1,"products__header"],[1,"products__items"],[3,"product","i",4,"ngFor","ngForOf"],["class","loader-bg",4,"ngIf"],[3,"product","i"],[1,"loader-bg"],[1,"loader"]],template:function(n,i){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),t._uU(3,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0432\u043e\u044e \u043b\u044e\u0431\u0438\u043c\u0443\u044e \u043f\u0438\u0446\u0446\u0443 "),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,U,1,2,"product-card",4),t.YNc(6,b,2,0,"div",5),t.qZA()()()),2&n&&(t.xp6(5),t.Q6J("ngForOf",i.products),t.xp6(1),t.Q6J("ngIf",i.loading))},dependencies:[O,r.sg,r.O5]})}return e})()},{path:":id",component:(()=>{class e{constructor(o,n,i){this.activatedRoute=o,this.productService=n,this.router=i,this.product={id:0,image:"",title:"",description:"",date:""}}ngOnInit(){this.activatedRoute.params.subscribe(o=>{o.id&&this.productService.getProduct(+o.id).subscribe({next:n=>{this.product=n},error:n=>{console.log(n),this.router.navigate(["/"])}})})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(s.gz),t.Y36(g.M),t.Y36(s.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-product"]],decls:19,vars:16,consts:[[1,"products"],[1,"container"],[1,"products__header"],[1,"product__item"],[4,"ngIf","ngIfThen","ngIfElse"],["productImageBlock",""],["defaultImageBlock",""],[3,"title"],[1,"product__text"],[1,"product__action"],["href","#","routerLink","/order",1,"btn","product__btn",3,"queryParams"],[1,"product__image"],[3,"src","alt"],["src","/src/assets/images/pizzzzza.png",3,"alt"]],template:function(n,i){if(1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h2",2),t._uU(3,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u0438\u0446\u0446\u044b "),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,I,1,0,"div",4),t.YNc(6,Y,2,2,"ng-template",null,5,t.W1O),t.YNc(8,F,2,1,"ng-template",null,6,t.W1O),t._UZ(10,"custom-title",7),t.ALo(11,"uppercase"),t.TgZ(12,"div",8),t._uU(13),t.ALo(14,"wordUpper"),t.ALo(15,"titlecase"),t.qZA(),t.TgZ(16,"div",9)(17,"a",10),t._uU(18,"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),t.qZA()()()()()),2&n){const p=t.MAs(7),l=t.MAs(9);t.xp6(5),t.Q6J("ngIf",i.product.image)("ngIfThen",p)("ngIfElse",l),t.xp6(5),t.Q6J("title",t.lcZ(11,6,i.product.title)),t.xp6(3),t.Oqu(t.xi3(14,8,t.lcZ(15,11,i.product.description),t.DdM(13,L))),t.xp6(4),t.Q6J("queryParams",t.VKq(14,B,i.product.title))}},dependencies:[a,r.O5,s.rH,f,r.gd,r.rS],styles:[".product__item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.product__item[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{display:block;margin-top:10px}"]})}return e})()}];let h=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[s.Bz.forChild(k),s.Bz]})}return e})();var q=c(6208);let J=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[q.m,r.ez,s.Bz,h,h]})}return e})()},553:(x,d,c)=>{c.d(d,{N:()=>r});const r={production:!0,apiURL:"https://testologia.site/"}}}]);