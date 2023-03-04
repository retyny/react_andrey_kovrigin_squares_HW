import React, {Component} from 'react';

class Squares extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ifReturn: false,
            colors: ['red','green','blue','yellow']
        }
    }

    handleGetColorClick = (e) => {
        e.preventDefault();
        console.log(e)
        if(this.state.ifReturn === false) {
            if (e.target.className === 'red-squares') this.getColor('red');
            if (e.target.className === 'green-squares') this.getColor('green');
            if (e.target.className === 'blue-squares') this.getColor('blue');
            if (e.target.className === 'yellow-squares') this.getColor('yellow');
        } else {
            this.getReturn();
        }
    }

    getReturn = () => {
        let tempArr = [...this.state.colors]
        tempArr.splice(0, 4);
        tempArr.push('red','green','blue','yellow');
        this.setState({colors: tempArr, ifReturn: false})
    }

    getColor = (color) => {
        let tempArr = [...this.state.colors]
        tempArr.splice(0, 4);
        tempArr.push(color,color,color,color);
        this.setState({colors: tempArr, ifReturn: true})
    }

    render() {
        return (
            <div className={'squares'} onClick={this.handleGetColorClick}>
                {this.state.colors.map((item) =>
                    <div className={`${item}-squares`} onClick={this.handleGetColorClick}>
                    </div>)}
            </div>
        );
    }
}

export default Squares;