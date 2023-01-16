import './App.css';
import React from 'react';
import styled from 'styled-components'

const spacing = 50

const Style1 = styled.h1`
  color: red;
  font-size: 30px;
  padding: ${spacing}px;`
const Style2 = styled.div`
  padding: ${spacing}px;
  display: flex;
  justify-content:center`
const Style3 = styled.input`
  background-color: skyblue`
const Style4 = styled.div`
  padding: ${spacing}px;
  display: flex;
  justify-content: center`

class ExerciseOne extends React.Component {
  state = {
    password: '',
    option: ''
  }
  passwordChange = e => {
    this.setState({ password: e.target.value })
  }
  clickChange = () => {
    console.log(this.state.password)
  }
  optionChange = e => {
    this.setState({ option: e.target.value })
  }
  render() {
    return (
      <div>
        <Style1>Hello Exercise!</Style1>
        <Style2>
          Enter your password:
          <input type="password" value={this.state.password}
            placeholder={12345678}
            onChange={this.passwordChange}></input>
          <Style3 type="submit" value={'Submit'}
            onClick={this.clickChange}></Style3>
        </Style2>
        <Style4>
          Choose:
          <select value={this.state.option}
            onChange={this.optionChange}>
            <option value="option1">{this.props.one}</option>
            <option value="option2">{this.props.two}</option>
            <option value="option3">{this.props.three}</option>
          </select>
        </Style4>
      </div>
    )
  }
}

export default ExerciseOne;
