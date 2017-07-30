import React, { Component } from 'react';

export default class AddBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onFormSubmit(event) {
    event.preventDefault();
    if (this.state.term !== '') {
      this.props.addTodoList(this.state.term);
      this.setState({ term: '' });
    }
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <header>
        <div className="col-md-12 title">TODOS</div>
        <div className="col-md-12">
          <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
            <input
              type="text"
              className="form-control"
              value={this.state.term}
              onChange={this.onInputChange.bind(this)}
              placeholder="input todo-list title"
            />
            <span className="input-group-btn">
              <button type="submit" className="btn btn-primary">Add List</button>
            </span>
          </form>
        </div>
      </header>
    );
  }
}
