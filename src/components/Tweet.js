import React, { Component } from 'react';
import api from '../services/api';

import like from '../like.svg'
import './Tweet.css'

export default class Tweet extends Component {

    handleLike = async (e) => {
        const {_id} = this.props.tweet;
        await api.post(`like/${_id}`);
    }

    render(){
        const { tweet } = this.props;
        return(
            <li className="tweet">
                <strong>{tweet.author}</strong>
                <p>{tweet.content}</p>
                <button type="button" onClick={this.handleLike} value={tweet._id}>
                <img src={like} alt='Like'/>
                    {tweet.likes}
                </button>
            </li>
        );
    }
}