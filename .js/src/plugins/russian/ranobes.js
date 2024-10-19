var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,o){function a(t){try{c(r.next(t))}catch(t){o(t)}}function s(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,s)}c((r=r.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(a=0)),a;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){a.label=s[1];break}if(6===s[0]&&a.label<i[1]){a.label=i[1],i=s;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(s);break}i[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}};Object.defineProperty(exports,"__esModule",{value:!0});var n=require("htmlparser2"),r=require("@libs/fetch"),i=function(){function i(){this.id="ranobescom",this.name="Ranobes",this.icon="src/en/ranobes/icon.png",this.site="https://ranobes.com",this.version="2.0.0"}return i.prototype.sleep=function(n){return t(this,void 0,void 0,(function(){return e(this,(function(t){return[2,new Promise((function(t){return setTimeout(t,n)}))]}))}))},i.prototype.parseNovels=function(t){var e=[],r={name:""},i=this.site,o=!1,a=!1,s=!1,c=new n.Parser({onopentag:function(t,n){var c,u;(null===(c=n.class)||void 0===c?void 0:c.includes("short-cont"))&&(o=!0),o&&("h2"===t&&(null===(u=n.class)||void 0===u?void 0:u.includes("title"))&&(a=!0),a&&"a"===t&&(r.path=n.href.slice(i.length),s=!0),"figure"===t&&(r.cover=n.style.replace(/.*url\((.*?)\)./g,"$1")),r.path&&r.cover&&(e.push(r),(r={}).name=""))},ontext:function(t){s&&(r.name+=t)},onclosetag:function(t){"h2"===t&&(s=!1,a=!1),"figure"===t&&(o=!1)}});return c.write(t),c.end(),e},i.prototype.parseChapters=function(t){var e=this,n=[];return t.chapters.map((function(t){n.push({name:t.title,releaseTime:new Date(t.date).toISOString(),path:t.link.slice(e.site.length)})})),n.reverse()},i.prototype.popularNovels=function(n){return t(this,void 0,void 0,(function(){var t,i;return e(this,(function(e){switch(e.label){case 0:return t="".concat(this.site,"/novels/page/").concat(n,"/"),[4,(0,r.fetchApi)(t).then((function(t){return t.text()}))];case 1:return i=e.sent(),[2,this.parseNovels(i)]}}))}))},i.prototype.parseNovel=function(i){return t(this,void 0,void 0,(function(){var t,o,a,s,c,u,l,p,h,f,d,v,w,g,b,m,y,_,x,A,P,N;return e(this,(function(e){switch(e.label){case 0:return t=this.site+i,[4,(0,r.fetchApi)(t)];case 1:return[4,e.sent().text()];case 2:return o=e.sent(),a={path:i,name:"",summary:"",chapters:[],totalPages:1},s=this.site,c=!1,u=!1,l=!1,p=!1,h=!1,f=!1,d=!1,v=[],w="",g=new n.Parser({onopentag:function(t,e){var n;"poster"===e.class&&(c=!0),c&&"img"===t&&(a.name=e.alt,a.cover=s+e.src),"div"===t&&"moreless"===e.class&&(l=!0),"li"===t&&(null===(n=e.title)||void 0===n?void 0:n.includes("Original status"))&&(p=!0),"input"===t&&"newsid"===e.name&&(w=e.value)},onopentagname:function(t){l&&"br"===t&&(a.summary+="/n"),p&&"a"===t&&(h=!0),f&&"a"===t&&(d=!0)},onattribute:function(t,e){"itemprop"===t&&"creator"===e&&(u=!0),"id"===t&&"mc-fs-genre"===e&&(f=!0)},ontext:function(t){u&&(a.author=t),l&&(a.summary+=t),h&&(a.status="Ongoing"===t?"Ongoing":"Completed"),d&&v.push(t)},onclosetag:function(t){"a"===t&&(c=!1,u=!1,h=!1,d=!1,p=!1),"div"===t&&(l=!1,f=!1)}}),g.write(o),g.end(),a.genres=v.join(", "),b=this.site+"/chapters/"+w+"/",[4,(0,r.fetchApi)(b).then((function(t){return t.text()}))];case 3:return m=e.sent(),y={pages_count:"",chapters:[]},_=!1,(x=new n.Parser({ontext:function(t){_&&t.includes("window.__DATA__ =")&&(y=JSON.parse(t.replace("window.__DATA__ =","")))},onclosetag:function(t){"main"===t&&(_=!0),"script"===t&&(_=!1)}})).write(m),x.end(),a.totalPages=Number(y.pages_count),a.chapters=this.parseChapters(y),A=y.chapters[0].link,P=y.chapters[0].title,N=y.chapters[0].date,a.latestChapter=A?{path:A.replace(this.site,""),name:P,releaseTime:new Date(N).toISOString()}:void 0,[2,a]}}))}))},i.prototype.parsePage=function(i,o){return t(this,void 0,void 0,(function(){var t,a,s,c,u,l,p;return e(this,(function(e){switch(e.label){case 0:return t=i.split("-")[0],a=this.site+"/chapters"+t.replace("novels/",""),s=a+"/page/"+o,[4,(0,r.fetchApi)(s).then((function(t){return t.text()}))];case 1:return c=e.sent(),u=!1,l={pages_count:"",chapters:[]},(p=new n.Parser({ontext:function(t){u&&t.includes("window.__DATA__ =")&&(l=JSON.parse(t.replace("window.__DATA__ =","")))},onclosetag:function(t){"main"===t&&(u=!0),"script"===t&&(u=!1)}})).write(c),p.end(),[2,{chapters:this.parseChapters(l)}]}}))}))},i.prototype.parseChapter=function(i){return t(this,void 0,void 0,(function(){var t,o,a,s,c,u;return e(this,(function(e){switch(e.label){case 0:return[4,(0,r.fetchApi)(this.site+i)];case 1:return[4,e.sent().text()];case 2:return t=e.sent(),o="",a=!1,s=!1,c=!1,(u=new n.Parser({onopentag:function(t,e){if(a&&"div"===t){var n=e.style;n?(o+='<div style="'.concat(n,'">'),c=!0):o+="<div>"}if(a&&"table"===t){var r=e.width;o+=r?'<table width="'.concat(r,'">'):"<table>"}if(a&&"tbody"===t&&(o+="<tbody>"),a&&"tr"===t&&(o+="<tr>"),a&&"td"===t){var i=e.width;o+=i?'<td width="'.concat(i,'">'):"<td>"}},onattribute:function(t,e){"id"===t&&"arrticle"===e&&(a=!0),"class"===t&&"category grey ellipses"===e&&(a=!1,s=!1)},onopentagname:function(t){a&&"p"===t&&(o+="<p>",s=!0,c&&(c=!1)),a&&"br"===t&&(o+="<br>")},ontext:function(t){s&&(o+=t),c&&(o+=t)},onclosetag:function(t){"p"===t&&(s=!1,o+="</p>"),a&&"td"===t&&(o+="</td>"),a&&"tr"===t&&(o+="</tr>"),a&&"tbody"===t&&(o+="</tbody>"),a&&"table"===t&&(o+="</table>"),a&&"div"===t&&(c=!1,o+="</div>")}})).write(t),u.end(),[2,o]}}))}))},i.prototype.searchNovels=function(n,i){return t(this,void 0,void 0,(function(){var t,o;return e(this,(function(e){switch(e.label){case 0:return t="".concat(this.site,"/search/").concat(n,"/page/").concat(i),[4,(0,r.fetchApi)(t).then((function(t){return t.text()}))];case 1:return o=e.sent(),[2,this.parseNovels(o)]}}))}))},i}();exports.default=new i;