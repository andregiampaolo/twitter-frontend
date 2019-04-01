import React, { Component } from 'react';

export default class Login extends Component {

    state = {
        username: '',
    };

    handleInputChange = (e) => {
        this.setState({username: e.target.value});
    }

    render(){
        return(
            <div className="login-wrapper">
                <h1>Login</h1>
                <form>
                    <input 
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        type="text" 
                        placeholder="Nome do usuário" 
                        />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}