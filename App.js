import React from "react";

class Counter extends React.Component{

state = {
    count: 0,
}

increment = () =>{
    this.setState({count: this.state.count + 1 })
}
minus = () =>{
    this.setState({count: this.state.count - 1 })
}
umn = () =>{
    this.setState({count: this.state.count * this.state.count })
}
delen = () =>{
    this.setState({count: this.state.count / this.state.count })
}
nulles = () =>{
    this.setState({count: 0 })
}

render(){
    return(
        <>
        <div>Счетчик: {this.state.count}</div>
    <button onClick={this.increment}>Увеличить</button>
    <button onClick={this.minus}>Уменьшить</button>
    <button onClick={this.umn}>Перемножить</button>
    <button onClick={this.delen}>Разделить</button>
    <button onClick={this.nulles}>Сброс</button>
        </>
    )
}
}
export default Counter