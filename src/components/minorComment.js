import React, { Component } from 'react';

export default class MinorComment extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onDeleteClick() {
    this.props.deleteListItem(this.props.item.key);
  }

  render() {
    return (
      <div className="modi item">
        <div className="col-xs-1">
          <input
            type="checkbox"
            className="checkbox-inline"
          />
        </div>
        <div className="col-xs-8">
          <input
            type="text"
            className="form-control"
            placeholder="input item name"
            value={this.state.term}
            onChange={this.onInputChange.bind(this)}
          />
        </div>
        <button
          className="btn btn-danger"
          onClick={this.onDeleteClick.bind(this)}
        >
          X
        </button>
      </div>
    );
  }
}
