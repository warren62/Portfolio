(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[592],{7519:(t,e,n)=>{"use strict";n.d(e,{A:()=>d});var i=n(8861),c=n(9247),r=n(5366),o=n(2797),s=n(5965),a=n(2888);const u=["*"];let d=(()=>{class t{constructor(){this.cardModel=new c.Z,this.loading=!1,this.products=[{name:"Product A",description:"some description",picture:{uri:"https://dummyimage.com/600x150/000/fff"}},{name:"Product B",description:"some description",picture:{uri:"https://dummyimage.com/300x300/000/fff"}},{name:"Product C",description:"some description",picture:{uri:"https://dummyimage.com/300x400/000/fff"}},{name:"Product D",description:"some description",picture:{uri:"https://dummyimage.com/600x500/000/fff"}}]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-card"]],inputs:{cardModel:"cardModel",loading:"loading"},ngContentSelectors:u,decls:12,vars:5,consts:[["fxFlex","",1,"example-card"],["mat-card-image","","alt","Error Photo",1,"image",3,"src"],[3,"innerHTML"],[3,"url"]],template:function(t,e){1&t&&(r.F$t(),r.TgZ(0,"mat-card",0),r.TgZ(1,"mat-card-header"),r.TgZ(2,"mat-card-title"),r._uU(3),r.qZA(),r.TgZ(4,"mat-card-subtitle"),r._uU(5),r.qZA(),r.qZA(),r._UZ(6,"img",1),r.Hsn(7),r.TgZ(8,"mat-card-content"),r._UZ(9,"p",2),r.qZA(),r.TgZ(10,"mat-card-actions"),r._UZ(11,"app-share-button",3),r.qZA(),r.qZA()),2&t&&(r.xp6(3),r.Oqu(e.cardModel.title),r.xp6(2),r.Oqu(e.cardModel.subTitle),r.xp6(1),r.s9C("src",e.cardModel.url,r.LSH),r.xp6(3),r.Q6J("innerHTML",e.cardModel.description,r.oJD),r.xp6(2),r.Q6J("url",e.cardModel.shareUrl||""))},directives:[o.a8,s.yH,o.dk,o.n5,o.$j,o.G2,o.dn,o.hq,a.x],styles:[".example-card[_ngcontent-%COMP%]{min-width:250px}.image[_ngcontent-%COMP%]{height:250px;object-fit:contain}mat-card[_ngcontent-%COMP%]{margin-bottom:10px}.mr-10[_ngcontent-%COMP%]{margin-right:10px}.ml-10[_ngcontent-%COMP%]{margin-left:10px}"],data:{animation:[i.J]}}),t})()},9247:(t,e,n)=>{"use strict";n.d(e,{Z:()=>i});class i{constructor(){this.title="",this.subTitle="",this.description="",this.url="",this.thumbnailUrl="",this.shareUrl=this.url,this.type="image"}}},2888:(t,e,n)=>{"use strict";n.d(e,{x:()=>u});var i=n(5366),c=n(1116),r=n(4369),o=n(7307);function s(t,e){if(1&t){const t=i.EpF();i.ynx(0),i.TgZ(1,"button",2),i.NdJ("click",function(){i.CHM(t);const e=i.oxw();return e.shareButtonActive=!e.shareButtonActive}),i._uU(2," SHARE "),i.qZA(),i.BQk()}}function a(t,e){if(1&t){const t=i.EpF();i.TgZ(0,"button",3),i.NdJ("click",function(){return i.CHM(t),i.oxw().shareButtonActive=!0}),i.TgZ(1,"mat-icon"),i._uU(2,"undo"),i.qZA(),i.qZA()}}let u=(()=>{class t{constructor(){this.url="",this.theme="modern-light",this.shareButtonActive=!0}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["app-share-button"]],inputs:{url:"url",theme:"theme"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["shareButtons",""],["mat-button","",3,"click"],["mat-icon-button","",3,"click"]],template:function(t,e){if(1&t&&(i.YNc(0,s,3,0,"ng-container",0),i.YNc(1,a,3,0,"ng-template",null,1,i.W1O)),2&t){const t=i.MAs(2);i.Q6J("ngIf",e.shareButtonActive)("ngIfElse",t)}},directives:[c.O5,r.lW,o.Hw],styles:[""]}),t})()}}]);