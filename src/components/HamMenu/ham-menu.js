import React from 'react';

export default class HamMenu extends React.Component {


    render() {
        return (
            <button className="ham-menu" onClick={this.props.onClick}>
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
            </button>
        );
    }
}