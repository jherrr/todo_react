var React = require('react');
var TodoStore = require('../stores/todo_store.js');
var DoneButton = require('./done_button');

var TodoListItem = React.createClass({
  handleDestroy: function(){
    TodoStore.destroy(this.props.id);
  },

  render: function(){
    return(
      <div>
        <div key='1'><strong>{this.props.title}</strong></div>
        <div key='2'>{this.props.body}</div>
        <button onClick={this.handleDestroy}>Delete</button>
          <DoneButton done={this.props.done} id={this.props.id} />
        <br /><br />
      </div>
    );
  }
});

module.exports = TodoListItem;
