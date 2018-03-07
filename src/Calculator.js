import React, { Component } from 'react';
import './App.css';

class Calculator extends Component {

  constructor(props) {
    super()
    this.state = {
      addOne: 0,
      addTwo: 0,
      result: 0,
    }
    this.handleChangeOne = this.handleChangeOne.bind(this);
    this.handleChangeTwo = this.handleChangeTwo.bind(this);
  }

  sum(a, b) {
    this.setState({result: a + b})
  }

  subtract(a, b) {
    this.setState({result: a - b})
  }

  multiply(a, b) {
    this.setState({result: a * b})
  }

  divide(a, b) {
    this.setState({result: a / b})
  }

  handleChangeOne(e) {
      this.setState({
        addOne: parseInt(e.target.value),
      })
    }

  handleChangeTwo(e) {
      this.setState({
        addTwo: parseInt(e.target.value),
      })
    }




  render() {

    const {addOne, addTwo, result} = this.props


    return(

      <div className="container">
        <h1>Add with React!</h1>

        <div className="add">
          <input type="text" value={this.state.value} onChange={this.handleChangeOne}/>
          <input type="text" value={this.state.value} onChange={this.handleChangeTwo}/>

          <button onClick={(e) => this.sum(this.state.addOne, this.state.addTwo)}>ADD</button>
          <button onClick={(e) => this.subtract(this.state.addOne, this.state.addTwo)}>SUBTRACT</button>
          <button onClick={(e) => this.multiply(this.state.addOne, this.state.addTwo)}>MULTIPLY</button>
          <button onClick={(e) => this.divide(this.state.addOne, this.state.addTwo)}>DIVIDE</button>

          <h2>{this.state.result}</h2>

        </div>

      </div>
    )

  }
}

export default Calculator;
