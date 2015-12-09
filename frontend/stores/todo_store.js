
var TodoStore = {};
var _todos = [];
var _callbacks =[];


TodoStore.changed = function() {
  _callbacks.forEach(function(callback) {
    callback();
  });
};

TodoStore.addChangeHandler = function(handler) {
  _callbacks.push(handler);
};

TodoStore.removeChangeHandler = function(handler) {
  var index = _callbacks.indexOf(handler);
  _callbacks.splice(index, 1);
};

TodoStore.all = function(){
  return _todos;
};

TodoStore.fetch = function(){
  $.ajax({
    type: "GET",
    url: 'api/todos',
    dataType: 'json',
    success: function(data){
      _todos = data;
      TodoStore.changed();
    }
  });
};

TodoStore.create = function(todo) {
  $.ajax({
    type: "POST",
    url: 'api/todos',
    dataType: 'json',
    data: todo,
    success: function(data){
      _todos.push(data);
      TodoStore.changed();
    },
    error: function() {
      console.log("create failure");
    }
  });
};

TodoStore.destroy = function(id) {
  $.ajax({
    type: "DELETE",
    url: "api/todos/" + id,
    dataType: 'json',
    success: function(data) {
      var index = TodoStore.find(id);
      _todos.splice(index,1);
      TodoStore.changed();
    }
  });
};

TodoStore.toggleDone = function(id) {
  var idx = TodoStore.find(id);
  var updateObj = _todos[idx];
  updateObj.done = !updateObj.done;

  $.ajax({
    type: "PATCH",
    url: "api/todos/" + id,
    dataType: 'json',
    data: updateObj,
    success: function(data) {
      _todos[idx] = data;
      TodoStore.changed();
    }
  });

};

TodoStore.find = function(id) {
  var result = -1;
  _todos.forEach( function(_todo, idx) {
    if ( _todo.id === id ) {
      result = idx;
    }
  });

  return result;
};



module.exports = TodoStore;
