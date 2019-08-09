import React from 'react';
import HamMenu from '../HamMenu/ham-menu';
import Logo from '../Logo/logo';

export default class TopNav extends React.Component {

constructor(props){
    super(props);
}
  
    render() {
        return (
            <div className="top-nav">
                <HamMenu onClick={this.props.toggleSideNav} />
                <Logo />
                <div className="right-side">
                    <div className="notifications">
                        <div className="trigger">
                            <div className="icon"></div>
                        </div>
                    </div>
                    <div className="more">
                        <div className="trigger">...</div>
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