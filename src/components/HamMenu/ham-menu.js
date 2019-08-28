import React from 'react';

export default class HamMenu extends React.Component {
    render() {
        const { onClick } = this.props

        return (
            <button className="ham-menu" onClick={onClick}>
                <div className="ham"></div>
                <div className="ham"></div>
                <div className="ham"></div>
            </button>
        );
    }
}