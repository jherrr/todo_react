var React = require('react');
var ReactDOM = require('react-dom');
var TodoList = require('./components/todo_list.jsx');
var TodoForm = require('./components/todo_form');

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(
    <div>
      <TodoList/>
      <TodoForm />
    </div>,
    document.getElementById('root'));
});
