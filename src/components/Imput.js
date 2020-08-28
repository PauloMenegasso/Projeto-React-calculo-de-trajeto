import React, { Component } from 'react';

export default class Header extends Component {
  handleInputChange = (event) => {
    const newValue = event.target.value;

    this.props.onChangeValue(newValue);
  };
  render() {
    const { text } = this.props;
    return (
      <div style={{ margin: '10px' }}>
        <span>{text}</span>
        <input
          style={{ width: '50px', margin: '10px' }}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
