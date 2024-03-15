"use strict";(self.webpackChunkcountryApp=self.webpackChunkcountryApp||[]).push([[821],{4821:(ht,Z,a)=>{a.r(Z),a.d(Z,{CountriesModule:()=>lt});var c=a(6814),g=a(600),t=a(4946),v=a(6306),C=a(2096),u=a(9397),S=a(7398),q=a(9862);let p=(()=>{class n{constructor(e){this.httpClient=e,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountry:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadToLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStorage",JSON.stringify(this.cacheStore))}loadToLocalStorage(){localStorage.getItem("cacheStorage")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStorage")))}getCountriesRequest(e){return this.httpClient.get(e).pipe((0,v.K)(()=>(0,C.of)([])))}searchCapital(e){return this.getCountriesRequest(`${this.apiUrl}/capital/${e}`).pipe((0,u.b)(s=>this.cacheStore.byCapital={term:e,countries:s}),(0,u.b)(()=>this.saveToLocalStorage()))}searchCountry(e){return this.getCountriesRequest(`${this.apiUrl}/name/${e}`).pipe((0,u.b)(s=>this.cacheStore.byCountry={term:e,countries:s}),(0,u.b)(()=>this.saveToLocalStorage()))}searchRegion(e){return this.getCountriesRequest(`${this.apiUrl}/region/${e}`).pipe((0,u.b)(s=>this.cacheStore.byRegion={region:e,countries:s}),(0,u.b)(()=>this.saveToLocalStorage()))}searchByCode(e){return this.httpClient.get(`${this.apiUrl}/alpha/${e}`).pipe((0,S.U)(s=>s.length>0?s[0]:null),(0,v.K)(s=>(0,C.of)(null)))}static#t=this.\u0275fac=function(i){return new(i||n)(t.LFG(q.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var I=a(8645),w=a(7394);class O extends w.w0{constructor(o,e){super()}schedule(o,e=0){return this}}const m={setInterval(n,o,...e){const{delegate:i}=m;return i?.setInterval?i.setInterval(n,o,...e):setInterval(n,o,...e)},clearInterval(n){const{delegate:o}=m;return(o?.clearInterval||clearInterval)(n)},delegate:void 0};var P=a(9039);const b={now:()=>(b.delegate||Date).now(),delegate:void 0};class d{constructor(o,e=d.now){this.schedulerActionCtor=o,this.now=e}schedule(o,e=0,i){return new this.schedulerActionCtor(this,o).schedule(i,e)}}d.now=b.now;const F=new class B extends d{constructor(o,e=d.now){super(o,e),this.actions=[],this._active=!1}flush(o){const{actions:e}=this;if(this._active)return void e.push(o);let i;this._active=!0;do{if(i=o.execute(o.state,o.delay))break}while(o=e.shift());if(this._active=!1,i){for(;o=e.shift();)o.unsubscribe();throw i}}}(class J extends O{constructor(o,e){super(o,e),this.scheduler=o,this.work=e,this.pending=!1}schedule(o,e=0){var i;if(this.closed)return this;this.state=o;const s=this.id,r=this.scheduler;return null!=s&&(this.id=this.recycleAsyncId(r,s,e)),this.pending=!0,this.delay=e,this.id=null!==(i=this.id)&&void 0!==i?i:this.requestAsyncId(r,this.id,e),this}requestAsyncId(o,e,i=0){return m.setInterval(o.flush.bind(o,this),i)}recycleAsyncId(o,e,i=0){if(null!=i&&this.delay===i&&!1===this.pending)return e;null!=e&&m.clearInterval(e)}execute(o,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(o,e);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,e){let s,i=!1;try{this.work(o)}catch(r){i=!0,s=r||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),s}unsubscribe(){if(!this.closed){const{id:o,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,P.P)(i,this),null!=o&&(this.id=this.recycleAsyncId(e,o,null)),this.delay=null,super.unsubscribe()}}});var L=a(9360),R=a(8251);let T=(()=>{class n{constructor(){this.debouncer=new I.x,this.placeholder="",this.onDebounce=new t.vpe,this.initialValue=""}ngOnInit(){this.debouncerSubscription=this.debouncer.pipe(function N(n,o=F){return(0,L.e)((e,i)=>{let s=null,r=null,l=null;const y=()=>{if(s){s.unsubscribe(),s=null;const h=r;r=null,i.next(h)}};function ut(){const h=l+n,U=o.now();if(U<h)return s=this.schedule(void 0,h-U),void i.add(s);y()}e.subscribe((0,R.x)(i,h=>{r=h,l=o.now(),s||(s=o.schedule(ut,n),i.add(s))},()=>{y(),i.complete()},void 0,()=>{r=s=null}))})}(1e3)).subscribe(e=>{this.onDebounce.emit(e)})}ngOnDestroy(){this.debouncerSubscription?.unsubscribe()}onKeyPress(e){return this.debouncer.next(e)}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["shared-search-box"]],inputs:{placeholder:"placeholder",initialValue:"initialValue"},outputs:{onDebounce:"onDebounce"},decls:2,vars:2,consts:[["type","text",1,"form-control",3,"value","placeholder","keyup"],["txtInput",""]],template:function(i,s){if(1&i){const r=t.EpF();t.TgZ(0,"input",0,1),t.NdJ("keyup",function(){t.CHM(r);const y=t.MAs(1);return t.KtG(s.onKeyPress(y.value))}),t.qZA()}2&i&&t.Q6J("value",s.initialValue)("placeholder",s.placeholder)}})}return n})(),f=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["shared-loading-spiner"]],decls:4,vars:0,consts:[[1,"spiner-container","bg-dark"],["src","assets/loader.svg",1,"mt-3","loader"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"span"),t._uU(2,"Wait a second..."),t.qZA(),t._UZ(3,"img",1),t.qZA())},styles:[".spiner-container[_ngcontent-%COMP%]{display:flex;position:fixed;bottom:15px;right:15px;padding:5px 10px;align-items:center;background-color:#000;color:#fff;border-radius:20px;box-shadow:0 0 5px #00000080}span[_ngcontent-%COMP%]{margin-left:10px}.loader[_ngcontent-%COMP%]{width:50px;height:50px}"]})}return n})();function Q(n,o){1&n&&t._UZ(0,"img",4)}function Y(n,o){1&n&&(t.TgZ(0,"div",5),t._uU(1," The Country does not have a Coat of arms... "),t.qZA())}const V=function(n){return{display:n}};let x=(()=>{class n{constructor(){this.title="",this.height="",this.width="",this.hasLoaded=!1,this.noImage=!1}ngOnInit(){this.url||(this.noImage=!0)}onLoad(){this.hasLoaded=!0}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["shared-lazy-image"]],inputs:{url:"url",title:"title",height:"height",width:"width"},decls:4,vars:9,consts:[[1,"d-flex","justify-content-center","lazy-container","align-items-center"],[1,"marco","animate__animated","animate__fadeIn",3,"src","alt","ngStyle","height","width","load"],["src","assets/loader.svg","class","mt-3 loader",4,"ngIf"],["class","alert alert-info text-center",4,"ngIf"],["src","assets/loader.svg",1,"mt-3","loader"],[1,"alert","alert-info","text-center"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"img",1),t.NdJ("load",function(){return s.onLoad()}),t.qZA(),t.YNc(2,Q,1,0,"img",2),t.YNc(3,Y,2,0,"div",3),t.qZA()),2&i&&(t.xp6(1),t.Q6J("src",s.url,t.LSH)("alt",s.title)("ngStyle",t.VKq(7,V,s.hasLoaded?"":"none"))("height",s.height)("width",s.width),t.xp6(1),t.Q6J("ngIf",!s.hasLoaded&&!s.noImage),t.xp6(1),t.Q6J("ngIf",s.noImage))},dependencies:[c.O5,c.PC],styles:[".loader[_ngcontent-%COMP%]{background-color:#494c4f;border-radius:50%;color:#000;width:100%}.marco[_ngcontent-%COMP%]{padding:.25rem;background-color:var(--bs-body-bg);border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);max-width:100%}"]})}return n})();function M(n,o){1&n&&(t.TgZ(0,"div",2),t._uU(1," There are no countries to show...\n"),t.qZA())}const j=function(n){return["/countries/by",n]};function z(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td",4),t._UZ(6,"shared-lazy-image",6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"number"),t.qZA(),t.TgZ(14,"td")(15,"a",7),t._uU(16,"See more..."),t.qZA()()()),2&n){const e=o.$implicit,i=o.index;t.xp6(2),t.Oqu(i+1),t.xp6(2),t.hij(" ",e.flag," "),t.xp6(2),t.Q6J("url",e.flags.svg)("title",e.name.common),t.xp6(2),t.Oqu(e.capital),t.xp6(2),t.Oqu(e.name.common),t.xp6(2),t.Oqu(t.lcZ(13,8,e.population)),t.xp6(3),t.Q6J("routerLink",t.VKq(10,j,e.cca3))}}function $(n,o){if(1&n&&(t.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Icon"),t.qZA(),t.TgZ(7,"th",4),t._uU(8,"Flag"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Capital Name"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Country Name"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Population"),t.qZA(),t._UZ(15,"th"),t.qZA()(),t.TgZ(16,"tbody"),t.YNc(17,z,17,12,"tr",5),t.qZA()()),2&n){const e=t.oxw();t.xp6(17),t.Q6J("ngForOf",e.countries)}}let _=(()=>{class n{constructor(){this.countries=[]}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[1,"text-center"],[4,"ngFor","ngForOf"],["width","50","height","40",3,"url","title"],[3,"routerLink"]],template:function(i,s){if(1&i&&(t.YNc(0,M,2,0,"div",0),t.YNc(1,$,18,1,"ng-template",null,1,t.W1O)),2&i){const r=t.MAs(2);t.Q6J("ngIf",0===s.countries.length)("ngIfElse",r)}},dependencies:[c.sg,c.O5,g.rH,x,c.JJ],styles:[".loader[_ngcontent-%COMP%]{background-color:#494c4f;border-radius:50%;color:#000;width:160px;height:160px}"]})}return n})();function k(n,o){1&n&&t._UZ(0,"shared-loading-spiner")}let A=(()=>{class n{constructor(e){this.countriesServices=e,this.countries=[],this.isloading=!1,this.initialValue=""}ngOnInit(){this.initialValue=this.countriesServices.cacheStore.byCapital.term,this.countries=this.countriesServices.cacheStore.byCapital.countries}searchByCapital(e){this.isloading=!0,this.countriesServices.searchCapital(e).subscribe(i=>{setTimeout(()=>{this.countries=i,this.isloading=!1},500)})}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(p))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Search by Capital....",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(i,s){1&i&&(t.TgZ(0,"h2"),t._uU(1,"By Capital"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onDebounce",function(l){return s.searchByCapital(l)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr"),t.YNc(9,k,1,0,"shared-loading-spiner",3),t._UZ(10,"countries-table",4),t.qZA()()),2&i&&(t.xp6(5),t.Q6J("initialValue",s.initialValue),t.xp6(4),t.Q6J("ngIf",s.isloading),t.xp6(1),t.Q6J("countries",s.countries))},dependencies:[c.O5,T,f,_]})}return n})();function D(n,o){1&n&&t._UZ(0,"shared-loading-spiner")}let E=(()=>{class n{constructor(e){this.countriesServices=e,this.countries=[],this.isloading=!1,this.initialValue=""}ngOnInit(){this.initialValue=this.countriesServices.cacheStore.byCountry.term,this.countries=this.countriesServices.cacheStore.byCountry.countries}searchByCountry(e){this.isloading=!0,this.countriesServices.searchCountry(e).subscribe(i=>{setTimeout(()=>{this.countries=i,this.isloading=!1},500)})}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(p))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Search by Country....",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(i,s){1&i&&(t.TgZ(0,"h2"),t._uU(1,"By Country"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),t.NdJ("onDebounce",function(l){return s.searchByCountry(l)}),t.qZA()()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr"),t.YNc(9,D,1,0,"shared-loading-spiner",3),t._UZ(10,"countries-table",4),t.qZA()()),2&i&&(t.xp6(5),t.Q6J("initialValue",s.initialValue),t.xp6(4),t.Q6J("ngIf",s.isloading),t.xp6(1),t.Q6J("countries",s.countries))},dependencies:[c.O5,T,f,_]})}return n})();const K=function(n){return{"btn-outline-primary":n}};function X(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",5),t.NdJ("click",function(){const r=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.searchByRegion(r))}),t._uU(1),t.qZA()}if(2&n){const e=o.$implicit,i=t.oxw();t.Q6J("ngClass",t.VKq(2,K,i.selectecRegion===e)),t.xp6(1),t.hij(" ",e," ")}}function H(n,o){1&n&&t._UZ(0,"shared-loading-spiner")}let W=(()=>{class n{constructor(e){this.countriesServices=e,this.countries=[],this.regions=["Americas","Africa","Asia","Europe","Oceania"],this.isloading=!1,this.initialValue=""}ngOnInit(){this.selectecRegion=this.countriesServices.cacheStore.byRegion.region,this.countries=this.countriesServices.cacheStore.byRegion.countries}searchByRegion(e){this.selectecRegion=e,this.isloading=!0,this.countriesServices.searchRegion(e).subscribe(i=>{setTimeout(()=>{this.countries=i,this.isloading=!1},500)})}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(p))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-by-region-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["class","text-center btn btn-light mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"countries"],[1,"text-center","btn","btn-light","mx-2",3,"ngClass","click"]],template:function(i,s){1&i&&(t.TgZ(0,"h2"),t._uU(1,"By Region"),t.qZA(),t._UZ(2,"hr"),t.TgZ(3,"div",0)(4,"div",1),t.YNc(5,X,2,4,"button",2),t.qZA()(),t.TgZ(6,"div",0)(7,"div",1),t._UZ(8,"hr"),t.YNc(9,H,1,0,"shared-loading-spiner",3),t._UZ(10,"countries-table",4),t.qZA()()),2&i&&(t.xp6(5),t.Q6J("ngForOf",s.regions),t.xp6(4),t.Q6J("ngIf",s.isloading),t.xp6(1),t.Q6J("countries",s.countries))},dependencies:[c.mk,c.sg,c.O5,f,_]})}return n})();var G=a(4664);function tt(n,o){1&n&&(t.TgZ(0,"div",2),t._UZ(1,"shared-loading-spiner"),t.qZA())}function et(n,o){if(1&n&&(t.TgZ(0,"li",12)(1,"strong"),t._uU(2,"Languages: "),t.qZA(),t._uU(3),t.qZA()),2&n){const e=o.$implicit;t.xp6(3),t.hij("",e," ")}}function nt(n,o){if(1&n&&(t.TgZ(0,"li",12)(1,"strong"),t._uU(2,"Currencies: "),t.qZA(),t._uU(3),t.qZA()),2&n){const e=o.$implicit;t.xp6(3),t.AsE(" ",e.name," (",e.symbol,") ")}}function it(n,o){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.hij("",e,", ")}}function ot(n,o){if(1&n&&(t.TgZ(0,"span",19),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.AsE(" ",e.key,": ",e.value.common," ")}}function st(n,o){if(1&n&&(t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"h2"),t._uU(4,"Pais: "),t.TgZ(5,"strong"),t._uU(6),t.qZA()(),t._UZ(7,"hr"),t.qZA()(),t.TgZ(8,"div",4)(9,"div",6)(10,"div",7)(11,"h3"),t._uU(12,"Flag"),t.qZA(),t._UZ(13,"shared-lazy-image",8),t.qZA(),t.TgZ(14,"div",9)(15,"h3"),t._uU(16,"Coat Of Arms"),t.qZA(),t._UZ(17,"shared-lazy-image",10),t.qZA()(),t.TgZ(18,"div",7)(19,"h3"),t._uU(20,"Details"),t.qZA(),t.TgZ(21,"ul",11)(22,"li",12)(23,"strong"),t._uU(24,"Capital: "),t.qZA(),t._uU(25),t.qZA(),t.TgZ(26,"li",12)(27,"strong"),t._uU(28,"Region: "),t.qZA(),t._uU(29),t.qZA(),t.TgZ(30,"li",12)(31,"strong"),t._uU(32,"Sub Region: "),t.qZA(),t._uU(33),t.qZA(),t.YNc(34,et,4,1,"li",13),t.TgZ(35,"li",12)(36,"strong"),t._uU(37,"Population: "),t.qZA(),t._uU(38),t.ALo(39,"number"),t.qZA(),t.TgZ(40,"li",12)(41,"strong"),t._uU(42,"Country Code: "),t.qZA(),t._uU(43),t.qZA(),t.YNc(44,nt,4,2,"li",13),t.TgZ(45,"li",12)(46,"strong"),t._uU(47,"Borders: "),t.qZA(),t.YNc(48,it,2,1,"span",14),t.qZA()(),t.TgZ(49,"div",15)(50,"h3"),t._uU(51,"Translations"),t.qZA(),t.TgZ(52,"div",16),t.YNc(53,ot,2,2,"span",17),t.ALo(54,"keyvalue"),t.qZA()()()(),t._UZ(55,"div",18),t.qZA()),2&n){const e=t.oxw();t.xp6(6),t.hij(" ",e.country.name.common," "),t.xp6(7),t.Q6J("url",e.country.flags.svg)("title",e.country.name.common),t.xp6(4),t.Q6J("url",e.country.coatOfArms.svg)("title",e.country.name.common),t.xp6(8),t.hij("",e.country.capital," "),t.xp6(4),t.hij("",e.country.region," "),t.xp6(4),t.hij("",e.country.subregion," "),t.xp6(1),t.Q6J("ngForOf",e.getLanguages(e.country.languages)),t.xp6(4),t.hij("",t.lcZ(39,14,e.country.population)," "),t.xp6(5),t.hij("",e.country.cca3," "),t.xp6(1),t.Q6J("ngForOf",e.getCurrencies(e.country.currencies)),t.xp6(4),t.Q6J("ngForOf",e.country.borders),t.xp6(5),t.Q6J("ngForOf",t.lcZ(54,16,null==e.country?null:e.country.translations))}}const rt=[{path:"",component:A},{path:"by-capital",component:A},{path:"by-country",component:E},{path:"by-region",component:W},{path:"by/:id",component:(()=>{class n{constructor(e,i,s){this.activateRoute=e,this.countriesService=i,this.router=s}ngOnInit(){this.activateRoute.params.pipe((0,G.w)(({id:e})=>this.countriesService.searchByCode(e))).subscribe(e=>e?(console.log(e),this.country=e):this.router.navigateByUrl("home"))}getCurrencies(e){return Object.values(e)}getLanguages(e){return Object.values(e)}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(g.gz),t.Y36(p),t.Y36(g.F0))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],["class","",4,"ngIf","ngIfElse"],[1,"d-flex","flex-column","align-items-center"],[1,""],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"col"],["height","200","width","300",3,"url","title"],[1,"col","mt-2"],["height","300","width","250",3,"url","title"],[1,"list-group"],[1,"list-group-item"],["class","list-group-item",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[1,"col","mt-4"],[1,"d-flex","flex-wrap"],["class","badge m-1",4,"ngFor","ngForOf"],[1,"row","mt-2"],[1,"badge","m-1"]],template:function(i,s){if(1&i&&(t.YNc(0,tt,2,0,"ng-template",null,0,t.W1O),t.YNc(2,st,56,18,"div",1)),2&i){const r=t.MAs(1);t.xp6(2),t.Q6J("ngIf",s.country)("ngIfElse",r)}},dependencies:[c.sg,c.O5,f,x,c.JJ,c.Nd],styles:[".loader[_ngcontent-%COMP%]{background-color:#494c4f;border-radius:50%;color:#000;width:160px;height:160px}.badge[_ngcontent-%COMP%]{background-color:#494c4f;color:#d7d7d7}"]})}return n})()},{path:"**",redirectTo:""}];let at=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[g.Bz.forChild(rt),g.Bz]})}return n})();var ct=a(8524);let lt=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[c.ez,at,ct.m]})}return n})()}}]);