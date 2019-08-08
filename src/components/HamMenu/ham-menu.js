import React from 'react';

export default class HamMenu extends React.Component {
    render() {
        return (
            <div className="menu">
                    <div className="menu-toggle" onClick={this.handleMenuToggle}>
                        <div className="menu-handle"></div>
                        <div className="menu-handle"></div>
                        <div className="menu-handle"></div>
                    </div>
                </div>
        );
    }
}