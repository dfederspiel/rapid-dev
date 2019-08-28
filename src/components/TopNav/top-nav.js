import React from 'react';
import HamMenu from '../HamMenu/ham-menu';
import Logo from '../Logo/logo';
import RightSideNav from '../RightSideNav/right-side-nav';

export default class TopNav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { toggleLeftSideNav, toggleRightSideNav } = this.props;

        return (
            <div className="top-nav">
                <div className="top-left">
                    <HamMenu onClick={toggleLeftSideNav} />
                    <Logo />
                </div>
                <RightSideNav toggleRightSideNav={toggleRightSideNav} />
            </div >
        );
    }
}