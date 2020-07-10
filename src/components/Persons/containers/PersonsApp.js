import React, {Component} from "react";
import Persons from "../Persons";
import Cockpit from '../../Cockpit/Cockpit'
import classes from './PersonsApp.css'
import asd from '../../Cockpit/Cockpit.css'

class PersonsApp extends Component {
    state = {
        persons: [
            {id: 'asfa1', name: 'Max', age: 28},
            {id: 'vasdf1', name: 'Manu', age: 29},
            {id: 'asdf11', name: 'Stephanie', age: 26}
        ],
        otherState: 'some other value',
        showPersons: false
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                />
            );
        }
console.log(classes)
console.log(asd)
        return (
            <div className={classes.PersonsApp}>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}/>
                {persons}
            </div>
        );
    }
}

export default PersonsApp;