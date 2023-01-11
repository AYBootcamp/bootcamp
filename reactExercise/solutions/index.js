import React from 'react';
import ReactDOM from 'react-dom';

const spacing = 10
class ExerciseOne extends React.Component {
    state = {
        password: '',
        option:''
    }
    passwordChange = e => {
        this.setState({password: e.target.value})
    }
    clickChange = () => {
        console.log (this.state.password)
    }
    optionChange = e => {
        this.setState({option: e.target.value})
    }
    render() {
        return (
            <div>
                <h1 style={{fontSize: 30, padding:spacing}}>Hello Exercise!</h1>
                <div style={{padding: spacing, display: 'flex', justifyContent: 'center'}}>
                    Enter your password:
                    <input type = "password" value = {this.state.password}
                    placeholder = {12345678}
                    onChange = {this.passwordChange}></input>
                    <input style={{backgroundColor: "skyblue"}} type = "submit" value={'Submit'}
                    onClick = {this.clickChange}></input>
                </div>
                <div style={{padding: spacing, display: 'flex', justifyContent: 'center'}}>
                    Choose:
                    <select value = {this.state.option}
                    onChange={this.optionChange}>
                        <option value = "option1">{this.props.one}</option>
                        <option value = "option2">{this.props.two}</option>
                        <option value = "option3">{this.props.three}</option>
                    </select>
                </div>
            </div>
        )
    }
}
/* ReactDOM.render(<App one = "A" two = "B" three = "C"/>, document.getElementById('root')) */ 
ReactDOM.render(<ExerciseOne one = "1" two = "2" three = "3"/>, document.getElementById('root'))