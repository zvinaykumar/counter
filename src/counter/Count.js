import React from 'react';
export class Count extends React.Component {
    constructor() {
        super(); // parent class constructor call
        this.counter = 0;
        this.state = { countValue: this.counter };
        this.fn = this.increment.bind(this);
        this.fn1 = this.decrement.bind(this);
    }
    increment() {
        console.log('What is this ', this);
        this.counter++;
        this.setState({ countValue: this.counter }); // IMMUTABLE
        console.log('Counter is ', this.counter);

    }
    decrement() {
        this.counter--;
        this.setState({ countValue: this.counter });
        console.log('de counter is ', this.counter);
    }
    render() {
        console.log('Render Call');
        return (<div class = "container">
            <h1>Count is {this.state.countValue}</h1>
            <button class="btn btn-success" onClick={this.fn}>Plus</button>
            <button class="btn btn-danger" onClick={this.fn1}>Minus</button>
        </div>)
    }
}

