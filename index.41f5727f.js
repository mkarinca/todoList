!function(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},l=function(e){return t[e]},o=/[&<>"'`]/g,c=new RegExp(o.source);function p(){this.defaultTemplate='<li data-id="{{id}}" class="{{completed}}"><div class="view"><input id="item{{id}}" class="toggle" type="checkbox" {{checked}}><label for="item{{id}}">{{title}}</label><button class="destroy"></button></div></li>'}p.prototype.show=function(e){var t,p,i,r="";for(t=0,p=e.length;t<p;t++){var a=this.defaultTemplate,n="",d="";e[t].completed&&(n="completed",d="checked"),r+=a=(a=(a=(a=a.replaceAll("{{id}}",e[t].id)).replaceAll("{{title}}",(i=e[t].title)&&c.test(i)?i.replace(o,l):i)).replaceAll("{{completed}}",n)).replaceAll("{{checked}}",d)}return r},p.prototype.itemCounter=function(e){return"<strong>"+e+"</strong> item"+(1===e?"":"s")+" left"},p.prototype.clearCompletedButton=function(e){return e>0?"Clear completed":""},e.app=e.app||{},e.app.Template=p}(window);
//# sourceMappingURL=index.41f5727f.js.map