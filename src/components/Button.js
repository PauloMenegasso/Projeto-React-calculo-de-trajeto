import React, { Component } from 'react';

export default class Button extends Component {
  handleClick = () => {
    const { distance, velocity, fuel, fuelCost, tax } = this.props;
    this.props.onClick(distance, velocity, fuel, fuelCost, tax);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Calcular</button>
      </div>
    );
  }
}
