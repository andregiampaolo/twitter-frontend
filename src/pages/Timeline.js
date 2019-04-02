import React, { Component } from 'react';
import api from '../services/api';

import Tweet from '../components/Tweet';

export default class Timeline extends Component {
    state = {
        tweets : [],
        newTweet: ''
    };

    async componentDidMount(){
        const response = await api.get('tweets');
        this.setState({tweets: response.data});
    }

    handleInputChange = (e) => {
        this.setState({newTweet: e.target.value});
    }

    handleNewTweet = async (e) => {
        if(e.keyCode !== 13) return;
        const content = this.state.newTweet;
        const author = localStorage.getItem('@Twitter:username');
        //api.post('route', data_object);
        await api.post('tweets', {author, content});

        this.setState({newTweet: ''});
    };

    render(){
        return(
            <div className="timeline-wrapper">
                <h1>Timeline</h1>
                <form>
                    <textarea
                        value={this.state.newTweet}
                        onChange={this.handleInputChange}
                        onKeyDown={this.handleNewTweet}
                        placeholder="O que você está pensando?"
                        >

                    </textarea>
                </form>
                <section className="tweets-list">
                    <ul>
                        {this.state.tweets.map(tweet =>(
                           <Tweet key={tweet._id} tweet={tweet} />
                        ))}
                    </ul>
                </section>
            </div>
        )
    }
}