import React, { Component } from 'react';
import generateID from 'uniqid';
import _ from 'lodash';

import MinorComment from './minorComment';

export default class MainComment extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    if (this.state.term !== '') {
      const newListItem = { key: generateID('IDL'), title: this.state.term };
      this.props.todoList.content = { ...this.props.todoList.content, [newListItem.key]: newListItem };
      this.setState({ term: '' });
    }
  }

  renderListItems() {
    return _.map(this.props.todoList.content, item => {
      return <MinorComment item={item} key={item.key} />;
    });
  }

  render() {
    return (
      <div className="list col-md-10">
        <div className="col-md-7">
          <p>{this.props.todoList.title}</p>
        </div>
        <div className="col-md-7">
          {this.renderListItems()}
        </div>
        <form className="input-group col-md-7" onSubmit={this.onFormSubmit.bind(this)}>
          <input
            className="form-control modi"
            type="text"
            value={this.state.term}
            placeholder="input reply"
            onChange={this.onInputChange.bind(this)}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Reply</button>
          </span>
        </form>
      </div>
    );
  }
}
