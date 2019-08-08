import React from 'react';
import FontAwesome from 'react-fontawesome';
import HamMenu from '../HamMenu/ham-menu';
import Logo from '../Logo/logo';

export default class TopNav extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            menuClicked: props.menuClicked,
            notificationCount: props.notificationCount
        };
    }

    handleMenuToggle = () => {
        this.state.menuClicked();
    }

    render() {
        return (
            <div className="top-nav">
                <HamMenu />
                <Logo />
                <div className="tools">
                    <div className="notification-toggle">
                        {
                            this.state.notificationCount > 0 &&
                            <div className="notification-count">{this.state.notificationCount > 99 ? '99+' : this.state.notificationCount}</div>
                        }
                        <FontAwesome style={{ color: 'gray' }} name='bell' size="lg" /></div>
                    <div className="sub-menu"><FontAwesome style={{ color: 'gray' }} name='ellipsis-h' size="lg" /></div>
                </div>
            </div>
        );
    }
}