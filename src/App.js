import React, {Component} from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
    state = {
        persons: [
            {name: 'Max', age: 15},
            {name: 'Kenny', age: 123},
            {name: 'John', age: 23}
        ],
        otherState: 'otherState'
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 15},
                {name: 'Manu', age: 76},
                {name: 'John', age: 43}
            ]
        })
    };

    onNameChangedHandler = (event) => {
        this.setState({
            persons: [
                {name: 'Max', age: 15},
                {name: event.target.value, age: 76},
                {name: 'John', age: 43}
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <button onClick={() => this.switchNameHandler('andriej')}>Click</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
                        changed={this.onNameChangedHandler}/>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}
                        click={() => this.switchNameHandler('malgożata')}/>
            </div>
        );
    }
}

export default App;
