import React from 'react';
import HamMenu from '../HamMenu/ham-menu';
import FontAwesome from 'react-fontawesome';
import Logo from '../Logo/logo';

export default class TopNav extends React.Component {

    constructor(props) {
        super(props);
    }

    renderNotifications = () => {
        return (
            <div className="notifications">
                <div className="trigger">
                    <div className="icon"><FontAwesome name='bell' size="lg" /></div>
                </div>
            </div>
        )
    }

    renderRightNav = () => {
        return (
            <div className="right-side">
                {this.renderNotifications()}
                <div className="more">
                    <button className="trigger" onClick={this.props.toggleRightNav}>
                        <FontAwesome name='ellipsis-h' size="lg" />
                    </button>
                    <div className="more-menu">
                        <button onClick={this.props.toggleRightNav}>X</button>
                        {/* <li><a href="">Test</a></li> */}
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="top-nav">
                <HamMenu onClick={this.props.toggleSideNav} />
                <Logo />
                <div className="right-side">
                    {this.renderNotifications()}
                    <div className="more">
                        <a className="trigger" onClick={this.props.toggleRightNav}>
                            <FontAwesome name='ellipsis-h' size="lg" />
                        </a>
                        <div className="more-menu">
                            <button onClick={this.props.toggleRightNav}>X</button>
                            {/* <li><a href="">Test</a></li> */}
                        </div>
                    </div>
                </div>
            </div >
        );

        {/* <div className="right-nav"> 
                            <div className="branch">
                                <ul>
                                    <li>branch</li>
                                    <li>branch</li>
                                </ul>
                            </div>
                            <div className="setup">
                                <ul>
                                    <li>setup</li>
                                    <li>setup</li>
                                </ul>
                            </div>
                        </div>
                        */}
        // <div className="top-nav">
        //     <HamMenu />
        //     <Logo />
        //     <div className="tools">
        //         <div className="notification-toggle">
        //             {
        //                 this.state.notificationCount > 0 &&
        //                 <div className="notification-count">{this.state.notificationCount > 99 ? '99+' : this.state.notificationCount}</div>
        //             }
        //             <FontAwesome style={{ color: 'gray' }} name='bell' size="lg" /></div>
        //         <div className="sub-menu"><FontAwesome style={{ color: 'gray' }} name='ellipsis-h' size="lg" /></div>
        //     </div>
        // </div>
    }
}