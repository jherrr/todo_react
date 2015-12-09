var React = require('react');
var TodoStore = require('../stores/todo_store');
var TodoForm = React.createClass({
  getInitialState: function() {
    return ({title: "", body: ""});
  },
  updateTitle: function(e) {
    this.setState({title: e.target.value});

  },
  updateBody: function(e) {
    this.setState({body: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();

    TodoStore.create({title: this.state.title, body: this.state.body});
    this.setState({title: "", body: ""});
  },
  render: function ()
  {
    return(<div>
      <form onSubmit={this.handleSubmit} >
        Title
        <input type="text" value={this.state.title} onChange={this.updateTitle} />
        Body
        <input type="text" value={this.state.body} onChange={this.updateBody} />
        <input type="submit" />

      </form>


    </div>);
  }


});

module.exports = TodoForm;
