import React, { Component } from 'react';
import _ from 'lodash';

import MainComment from './mainComment';

export default class CommentGroup extends Component {
  constructor(props) {
    super(props);

    this.state = { sum: 0, reRender: false };
  }

  deleteTodoList(key) {
    this.props.deleteTodoList(key);
  }

  reRender() {
    this.setState({ reRender: true, sum: 0 });
  }

  getCount(number) {
    this.setState({ sum: number + this.state.sum });
  }

  renderTodoLists() {
    return _.map(this.props.todoLists, list => {
      return (
        <MainComment
          todoList={list}
          deleteList={this.deleteTodoList.bind(this)}
          sendBack={this.getCount.bind(this)}
          reRender={this.reRender.bind(this)}
          key={list.key}
        />
      );
    });
  }

  render() {
    console.log(this.state.sum);
    return (
      <div>
        <div className="col-md-12">
          <div className="col-md-6 done">Finished:
          </div>
          <div className="col-md-6 undone">Unfinished:
          </div>
        </div>
        <div className="col-md-12">
          {this.renderTodoLists()}
        </div>
      </div>
    );
  }
}
