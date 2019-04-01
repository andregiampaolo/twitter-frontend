import React, { Component } from 'react';

export default class Login extends Component {

    state = {
        username: '',
    };

    handleInputChange = (e) => {
        this.setState({username: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        const { username } = this.state;
        if (!username.length) return;
        localStorage.setItem('@Twitter:username', username);
        this.props.history.push('/timeline');
    };

    render(){
        return(
            <div className="login-wrapper">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
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