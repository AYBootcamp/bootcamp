import React from 'react';

class ClassApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num1: 0,
            num2: 0,
            total: 0
        }
    }
    MultiplyOrPlus = (props) => {
        if (props === "Multiply") {
            return (this.state.num1 * this.state.num2)
        } else if (props === "Add") {
            return (this.state.num1 - (-this.state.num2))
        } else {
            return 0
        }
    }

    render() {
        return (
            <div>
                Class Component Way:
                <input value={this.state.num1} type='number'
                    onChange={(e) => this.setState({ num1: e.target.value })} />
                <input value={this.state.num2} type='number'
                    onChange={(e) => this.setState({ num2: e.target.value })} />
                <button value={this.state.total} type='number'
                    onClick={() => {
                        this.setState({ total: this.MultiplyOrPlus(this.props.choose) })
                    }}>
                    {this.props.choose}
                </button>
                Result: {this.state.total}
            </div >
        )
    }
}
export default ClassApp;