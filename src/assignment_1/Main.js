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
            <div className="Main">
                <UserOutput username={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <button style={buttonStyle} onClick={this.changeUsername}>Change username</button>
                <UserInput changed={this.changeUsernameHandler} username={this.state.username}/>
            </div>
        );
    }
}

export default Main;
