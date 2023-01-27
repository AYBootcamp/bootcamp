import React from 'react';

class Lifecycle extends React.Component {
    constructor() {
        super()
        this.state = {
            x1: false,
            x2: false,
            x3: false,
            loading: true,
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 3000)
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.x3 === true && nextState.x1 === false && nextState.x2 === false) {
            this.setState({ x3: false })
            return false;
        }
        return true;
    }
    componentDidUpdate() {
        if (this.state.x1 && this.state.x2 && this.state.x3) {
            alert('All marked!')
        }
    }
    componentWillUnmount() {
        alert('Are you sure?')
    }
    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }
        return (
            <>
                Lifecycle methods:
                <table>
                    <tr><td>
                        <button
                            onClick={() => this.setState({ x1: true })}>
                            1
                        </button>
                        {this.state.x1 && 'X'}
                    </td></tr>
                    <tr><td>
                        <button
                            onClick={() => this.setState({ x2: true })}>
                            2
                        </button>
                        {this.state.x2 && 'X'}
                    </td></tr>
                    <tr><td>
                        <button
                            onClick={() => this.setState({ x3: true })}>
                            3
                        </button>
                        {this.state.x3 && 'X'}
                    </td></tr>
                </table>
            </>
        )
    }
}

export default Lifecycle;