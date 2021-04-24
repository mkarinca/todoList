!function(e){function t(e){this.template=e,this.ENTER_KEY=13,this.ESCAPE_KEY=27,this.$todoList=qs(".todo-list"),this.$todoItemCounter=qs(".todo-count"),this.$clearCompleted=qs(".clear-completed"),this.$main=qs(".main"),this.$footer=qs(".footer"),this.$toggleAll=qs(".toggle-all"),this.$newTodo=qs(".new-todo")}t.prototype._removeItem=function(e){var t=qs('[data-id="'+e+'"]');t&&this.$todoList.removeChild(t)},t.prototype._clearCompletedButton=function(e,t){this.$clearCompleted.innerHTML=this.template.clearCompletedButton(e),this.$clearCompleted.style.display=t?"block":"none"},t.prototype._setFilter=function(e){qs(".filters .selected").className="",qs('.filters [href="#/'+e+'"]').className="selected"},t.prototype._elementComplete=function(e,t){var i=qs('[data-id="'+e+'"]');i&&(i.className=t?"completed":"",qs("input",i).checked=t)},t.prototype._editItem=function(e,t){var i=qs('[data-id="'+e+'"]');if(i){i.className=i.className+" editing";var o=document.createElement("input");o.className="edit",i.appendChild(o),o.focus(),o.value=t}},t.prototype._editItemDone=function(e,t){var i=qs('[data-id="'+e+'"]');if(i){var o=qs("input.edit",i);i.removeChild(o),i.className=i.className.replace("editing",""),qsa("label",i).forEach((function(e){e.textContent=t}))}},t.prototype.render=function(e,t){var i=this;({showEntries:function(){i.$todoList.innerHTML=i.template.show(t)},removeItem:function(){i._removeItem(t)},updateElementCount:function(){i.$todoItemCounter.innerHTML=i.template.itemCounter(t)},clearCompletedButton:function(){i._clearCompletedButton(t.completed,t.visible)},contentBlockVisibility:function(){i.$main.style.display=i.$footer.style.display=t.visible?"block":"none"},toggleAll:function(){i.$toggleAll.checked=t.checked},setFilter:function(){i._setFilter(t)},clearNewTodo:function(){i.$newTodo.value=""},elementComplete:function(){i._elementComplete(t.id,t.completed)},editItem:function(){i._editItem(t.id,t.title)},editItemDone:function(){i._editItemDone(t.id,t.title)}})[e]()},t.prototype._itemId=function(e){var t=$parent(e,"li");return parseInt(t.dataset.id,10)},t.prototype._bindItemEditDone=function(e){var t=this;$delegate(t.$todoList,"li .edit","blur",(function(){this.dataset.iscanceled||e({id:t._itemId(this),title:this.value})})),$delegate(t.$todoList,"li .edit","keypress",(function(e){e.keyCode===t.ENTER_KEY&&this.blur()}))},t.prototype._bindItemEditCancel=function(e){var t=this;$delegate(t.$todoList,"li .edit","keyup",(function(i){i.keyCode===t.ESCAPE_KEY&&(this.dataset.iscanceled=!0,this.blur(),e({id:t._itemId(this)}))}))},t.prototype.bind=function(e,t){var i=this;"newTodo"===e?$on(i.$newTodo,"change",(function(){t(i.$newTodo.value)})):"removeCompleted"===e?$on(i.$clearCompleted,"click",(function(){t()})):"toggleAll"===e?$on(i.$toggleAll,"click",(function(){t({completed:this.checked})})):"itemEdit"===e?$delegate(i.$todoList,"li label","dblclick",(function(){t({id:i._itemId(this)})})):"itemRemove"===e?$delegate(i.$todoList,".destroy","click",(function(){t({id:i._itemId(this)})})):"itemToggle"===e?$delegate(i.$todoList,".toggle","click",(function(){t({id:i._itemId(this),completed:this.checked})})):"itemEditDone"===e?i._bindItemEditDone(t):"itemEditCancel"===e&&i._bindItemEditCancel(t)},e.app=e.app||{},e.app.View=t}(window);
//# sourceMappingURL=index.1687f74c.js.map
