var React = require('react');
var TodoStore = require('../stores/todo_store');

var DoneButton = React.createClass({
  getInitialState: function() {
    return {text: ""};
  },
  componentDidMount: function() {
    if( this.props.done ) {
      this.state.text = "Undo";
    } else if ( !this.prop.done ) {
      this.state.text = "Done";
    }
  },
  handleClick: function() {
    TodoStore.toggleDone(this.props.id);
  },
  render: function() {
    return (<button onClick={this.handleClick}>{this.state.text}</button>);
  }
});

module.exports = DoneButton;
