import React from 'react';
import FontAwesome from 'react-fontawesome';
import HamMenu from '../HamMenu/ham-menu';
import Logo from '../Logo/logo';

export default class TopNav extends React.Component {

constructor(props){
    super(props);
}
  
    render() {
        return (
            <div class="top-nav">
                <HamMenu onClick={this.props.toggleSideNav} />
                <Logo />
                <div class="right-side">
                    <div class="notifications">
                        <div class="trigger">
                            <div class="icon"></div>
                        </div>
                    </div>
                    <div class="more">
                        <div class="trigger">...</div>
                        {/* <div class="right-nav"> 
                            <div class="branch">
                                <ul>
                                    <li>branch</li>
                                    <li>branch</li>
                                </ul>
                            </div>
                            <div class="setup">
                                <ul>
                                    <li>setup</li>
                                    <li>setup</li>
                                </ul>
                            </div>
                        </div>
                        */}
                    </div>
                </div>
            </div>


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
        );
    }
}