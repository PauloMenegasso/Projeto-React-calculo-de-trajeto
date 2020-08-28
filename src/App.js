import React, { Component } from 'react';
import Imput from './components/Imput';
import Button from './components/Button';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      distance: 0,
      velocity: 0,
      fuel: 0,
      fuelCost: 0,
      tax: 0,
      time: 0,
      netIncome: 0,
      liquidIncome: 0,
      liquidIncomeBack: 0,
    };
  }

  handleDistanceChange = (newDistance) => {
    this.setState({ distance: newDistance });
  };

  handleVelocityChange = (newVelocity) => {
    this.setState({ velocity: newVelocity });
  };
  handleFuelChange = (newFuel) => {
    this.setState({ fuel: newFuel });
  };
  handleFuelCostChange = (newFuelCost) => {
    this.setState({ fuelCost: newFuelCost });
  };
  handleTaxChange = (newTax) => {
    this.setState({ tax: newTax });
  };

  handleClickApp = (distance, velocity, fuel, fuelCost, tax) => {
    const time = distance / velocity;
    let netIncome = 0;
    if (distance > 6) {
      netIncome = distance * 1.31 + time * 0.2;
    } else {
      netIncome = distance * 1.11 + time * 0.2;
    }
    if (netIncome < 15) {
      netIncome = 15;
    }
    let liquidIncome = netIncome - (distance / fuel) * fuelCost - tax;
    let liquidIncomeBack = netIncome - 2 * ((distance / fuel) * fuelCost - tax);

    this.setState({
      time: 2 * time,
      netIncome,
      liquidIncome,
      fuel,
      fuelCost,
      liquidIncomeBack,
    });
  };

  render() {
    const {
      distance,
      velocity,
      fuel,
      fuelCost,
      tax,
      time,
      netIncome,
      liquidIncome,
      liquidIncomeBack,
    } = this.state;

    return (
      <div>
        <h3> Calcule o valor da sua corrida!</h3>
        <Imput
          text={'Insira aqui a distância entre os pontos:'}
          onChangeValue={this.handleDistanceChange}
        />
        <Imput
          text={'Insira aqui a velocidade média no trajeto:'}
          onChangeValue={this.handleVelocityChange}
        />
        <Imput
          text={'Insira aqui o consumo por km do seu carro:'}
          onChangeValue={this.handleFuelChange}
        />
        <Imput
          text={'Insira aqui o preço por litro do combustível:'}
          onChangeValue={this.handleFuelCostChange}
        />
        <Imput
          text={'Insira aqui o valor dos pedágios no caminho:'}
          onChangeValue={this.handleTaxChange}
        />
        <Button
          distance={distance}
          velocity={velocity}
          fuel={fuel}
          tax={tax}
          fuelCost={fuelCost}
          onClick={this.handleClickApp}
        />
        <p>O tempo total da viagem (ida e volta) é: {time.toFixed(2)} horas</p>
        <p>Você deve cobrar do passageiro: {netIncome.toFixed(2)} reais</p>
        <p>
          Você vai lucrar: {liquidIncome.toFixed(2)} reais. (Somente na ida)
        </p>
        <p>
          Você vai lucrar: {liquidIncomeBack.toFixed(2)} reais. (Volta sem
          passageiro)
        </p>
      </div>
    );
  }
}
