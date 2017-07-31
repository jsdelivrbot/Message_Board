import React, { Component } from 'react';
import _ from 'lodash';

import MainComment from './mainComment';

export default class CommentGroup extends Component {

  renderTodoLists() {
    return _.map(this.props.todoLists, list => {
      return (
        <MainComment todoList={list} key={list.key} />
      );
    });
  }

  render() {
    return (
      <div className="col-md-12">
        {this.renderTodoLists()}
      </div>
    );
  }
}
