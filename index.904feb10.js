!function(e){function t(e,t){var i=this;i.model=e,i.view=t,i.view.bind("newTodo",(function(e){i.addItem(e)})),i.view.bind("itemEdit",(function(e){i.editItem(e.id)})),i.view.bind("itemEditDone",(function(e){i.editItemSave(e.id,e.title)})),i.view.bind("itemEditCancel",(function(e){i.editItemCancel(e.id)})),i.view.bind("itemRemove",(function(e){i.removeItem(e.id)})),i.view.bind("itemToggle",(function(e){i.toggleComplete(e.id,e.completed)})),i.view.bind("removeCompleted",(function(){i.removeCompletedItems()})),i.view.bind("toggleAll",(function(e){i.toggleAll(e.completed)}))}t.prototype.setView=function(e){var t=e.split("/")[1]||"";this._updateFilterState(t)},t.prototype.showAll=function(){var e=this;e.model.read((function(t){e.view.render("showEntries",t)}))},t.prototype.showActive=function(){var e=this;e.model.read({completed:!1},(function(t){e.view.render("showEntries",t)}))},t.prototype.showCompleted=function(){var e=this;e.model.read({completed:!0},(function(t){e.view.render("showEntries",t)}))},t.prototype.addItem=function(e){var t=this;""!==e.trim()&&t.model.create(e,(function(){t.view.render("clearNewTodo"),t._filter(!0)}))},t.prototype.editItem=function(e){var t=this;t.model.read(e,(function(i){t.view.render("editItem",{id:e,title:i[0].title})}))},t.prototype.editItemSave=function(e,t){for(var i=this;" "===t[0];)t=t.slice(1);for(;" "===t[t.length-1];)t=t.slice(0,-1);0!==t.length?i.model.update(e,{title:t},(function(){i.view.render("editItemDone",{id:e,title:t})})):i.removeItem(e)},t.prototype.editItemCancel=function(e){var t=this;t.model.read(e,(function(i){t.view.render("editItemDone",{id:e,title:i[0].title})}))},t.prototype.removeItem=function(e){var t,i=this;i.model.read((function(e){t=e})),t.forEach((function(t){t.id===e&&console.log("Element with ID: "+e+" has been removed.")})),i.model.remove(e,(function(){i.view.render("removeItem",e)})),i._filter()},t.prototype.removeCompletedItems=function(){var e=this;e.model.read({completed:!0},(function(t){t.forEach((function(t){e.removeItem(t.id)}))})),e._filter()},t.prototype.toggleComplete=function(e,t,i){var o=this;o.model.update(e,{completed:t},(function(){o.view.render("elementComplete",{id:e,completed:t})})),i||o._filter()},t.prototype.toggleAll=function(e){var t=this;t.model.read({completed:!e},(function(i){i.forEach((function(i){t.toggleComplete(i.id,e,!0)}))})),t._filter()},t.prototype._updateCount=function(){var e=this;e.model.getCount((function(t){e.view.render("updateElementCount",t.active),e.view.render("clearCompletedButton",{completed:t.completed,visible:t.completed>0}),e.view.render("toggleAll",{checked:t.completed===t.total}),e.view.render("contentBlockVisibility",{visible:t.total>0})}))},t.prototype._filter=function(e){var t=this._activeRoute.charAt(0).toUpperCase()+this._activeRoute.substr(1);this._updateCount(),(e||"All"!==this._lastActiveRoute||this._lastActiveRoute!==t)&&this["show"+t](),this._lastActiveRoute=t},t.prototype._updateFilterState=function(e){this._activeRoute=e,""===e&&(this._activeRoute="All"),this._filter(),this.view.render("setFilter",e)},e.app=e.app||{},e.app.Controller=t}(window);
//# sourceMappingURL=index.904feb10.js.map
