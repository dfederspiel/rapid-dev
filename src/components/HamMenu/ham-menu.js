import React from 'react';

export default class HamMenu extends React.Component {


    render() {
        return (
            <div class="ham-menu" onClick={this.props.onClick}>
                <div class="ham"></div>
                <div class="ham"></div>
                <div class="ham"></div>
            </div>
        );
    }
}