import React, { Component } from 'react';

export default class Timeline extends Component {
    state = {
        newTweet: ''
    };

    handleInputChange = (e) => {
        this.setState({newTweet: e.target.value});
    }

    handleKeyDown = (e) => {
        if(e.keyCode !== 13) return;
        const content = this.state.newTweet;
        const author = localStorage.getItem('@Twitter:username');
        console.log(content, author);
    };

    render(){
        return(
            <div className="timeline-wrapper">
                <h1>Timeline</h1>
                <form>
                    <textarea
                        value={this.state.newTweet}
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleKeyDown}
                        placeholder="O que você está pensando?"
                        >

                    </textarea>
                </form>
            </div>
        )
    }
}