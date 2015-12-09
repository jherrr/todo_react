var React = require('react');
var TodoStore = require('../stores/todo_store');
var TodoListItem = require('./todo_list_item');


var TodoList = React.createClass({
  getInitialState: function(){
    return({list: TodoStore.all()});
  },
  todosChanged: function() {
    this.setState({list: TodoStore.all()});
  },
  componentDidMount: function() {
    TodoStore.addChangeHandler(this.todosChanged);
    TodoStore.fetch();
  },
  componentWillUnmount: function() {
    TodoStore.removeChangeHandler(this.todosChanged);
  },
  render: function(){
    // console.log(this.state.list);
    return(
      <div>
        {this.state.list.map(function(item, idx){
          return(<TodoListItem key={idx} title={item.title} body={item.body}
            id={item.id} done={item.done} />);
        })}
      </div>
    );
  }
});

module.exports = TodoList;
