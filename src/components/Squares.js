import React, {Component} from 'react';
import {logDOM} from "@testing-library/react";

class Squares extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ifReturn: false,
            images: ['1','2','3','4','5','6','7','8','9']
        }
    }
    handleGetColorClick = (e) => {
        e.preventDefault();
        console.log(e)
        if(this.state.ifReturn === false) {
            console.log(e.target.id)
            const number = e.target.id
            this.getSize(number);
        } else {
            this.getReturn();
        }
    }
    getReturn = () => {
        let tempArr = [...this.state.images]
        tempArr.splice(0, 1);
        tempArr.push('1','2','3','4','5','6','7','8','9');
        this.setState({images: tempArr, ifReturn: false})
    }
    getSize = (number) => {
        let tempArr = [...this.state.images]
        tempArr.splice(0, 9);
        tempArr.push(number);
        console.log(tempArr)
        this.setState({images: tempArr, ifReturn: true})
    }
    renderBigSize() {
        return (
            <div className={'squares'} onClick={this.handleGetColorClick}>
                {
                    this.state.images.map((item) =>
                        <img id={`${item}`} className={`${item}_img friendImgBigSize`}
                             src={require(`../images/friend${item}.jpg`)}
                             alt="friend"
                             onClick={this.handleGetColorClick}/>)
                }
            </div>
        );
    }
    renderNormalSize() {
        return (
            <div className={'squares'} onClick={this.handleGetColorClick}>
                {
                    this.state.images.map((item) =>
                        <img id={`${item}`}  className={`${item}_img friendImgNormalSize`}
                             src={require(`../images/friend${item}.jpg`)}
                             alt="friend"
                             onClick={this.handleGetColorClick}/>)
                }
            </div>
        );
    }
    render() {
        if(this.state.ifReturn)
            return this.renderBigSize()
        else
            return this.renderNormalSize()
    }
}

export default Squares;