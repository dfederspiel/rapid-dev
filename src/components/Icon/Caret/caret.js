﻿import React from 'react';

export default class Caret extends React.Component {
    render() {
        const{direction} = this.props;
        return (
            <span className={`alloya-caret ${direction ? direction : "down"}`}></span>
        );
    }
}