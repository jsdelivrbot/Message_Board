import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import generateID from 'uniqid';

import AddBar from './components/addBar';
import CommentGroup from './components/commentGroup';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { todoLists: {} };
  }

  addTodoList(term) {
    const oldTodoLists = this.state.todoLists;
    const newTodoList = {
      key: generateID('IDT'),
      title: term,
      content: {},
    };
    const newTodoLists = { ...oldTodoLists, [newTodoList.key]: newTodoList };
    this.setState({ todoLists: newTodoLists });
  }

  render() {
    return (
      <div>
        <AddBar addTodoList={this.addTodoList.bind(this)} />
        <CommentGroup todoLists={this.state.todoLists} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
