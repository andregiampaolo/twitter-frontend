import React, { Component } from 'react';

export default class Login extends Component {
    render(){
        return(
            <div className="login-wrapper">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Nome do usuário" />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}