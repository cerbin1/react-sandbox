import React, {Component} from 'react';
import './Main.css';
import UserOutput from './components/UserOutput';
import UserInput from './components/UserInput';

class Main extends Component {
    state = {
        username: 'Marian'
    };

    changeUsername = () => {
        this.setState({
            username: 'Ferdek'
        })
    };

    changeUsernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    };

    render() {
        const buttonStyle = {
            margin: 'auto',
            textAlign: 'center',
            cursor: 'pointer'
        };

        return (
            <div>
                <div className="Main">
                    <UserOutput username={this.state.username}/>
                    <UserOutput username={this.state.username}/>
                    <UserOutput username={this.state.username}/>
                    <button style={buttonStyle} onClick={this.changeUsername}>Change username</button>
                    <UserInput changed={this.changeUsernameHandler} username={this.state.username}/>

                </div>
                <div><ol>
                    <li>Create TWO new components: UserInput and UserOutput</li>
                    <li>UserInput should hold an input element, UserOutput two paragraphs</li>
                    <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
                    <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
                    <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
                    <li>Add a method to manipulate the state (=> an event-handler method)</li>
                    <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
                    <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
                    <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
                    <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
                </ol></div>
            </div>
        );
    }
    // 1. Create TWO new components: UserInput and UserOutput
    // 2. UserInput should hold an input element, UserOutput two paragraphs
    // 3. Output multiple UserOutput components in the App component (any paragraph texts of your choice)
    // 4. Pass a username (of your choice) to UserOutput via props and display it there
    // 5. Add state to the App component (=> the username) and pass the username to the UserOutput component
    // 6. Add a method to manipulate the state (=> an event-handler method)
    // 7. Pass the event-handler method reference to the UserInput component and bind it to the input-change event
    // 8. Ensure that the new input entered by the user overwrites the old username passed to UserOutput
    // 9. Add two-way-binding to your input (in UserInput) to also display the starting username
    // 10. Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
}

export default Main;
