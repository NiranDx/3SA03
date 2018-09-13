import React, { Component } from 'react';
import './App.css';

export default class CharacterCard extends Component {
    render() {
        return (
            <div class= 'card'>{this.props.value}</div>

        )
    }
}