﻿require('es6-promise').polyfill();
require('isomorphic-fetch');
require('@babel/polyfill');

import React from 'react';
import TopNav from './components/TopNav/top-nav';
import LeftSideNav from './components/LeftSideNav/left-side-nav';
import Dashboard from './pages/Dashboard/dashboard';
import DiscoverPremierView from './pages/DiscoverPremierView/discover-premier-view';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class AlloyaReactApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            LeftSideNavIsOpen: false,
            rightNavIsOpen: false,
        };
    }
    toggleLeftSideNav = () => {
        this.setState({ LeftSideNavIsOpen: !this.state.LeftSideNavIsOpen });
    }

    toggleRightSideNav = () => {
        this.setState({ rightNavIsOpen: !this.state.rightNavIsOpen, LeftSideNavIsOpen:false });
    }

    openLeftSideNav = () => {
        this.setState({ LeftSideNavIsOpen: true });
    }

    closeLeftSideNav = () => {
        this.setState({ LeftSideNavIsOpen: false });
    }

    render() {
        const { toggleLeftSideNav, toggleRightSideNav, openLeftSideNav } = this;
        const { LeftSideNavIsOpen, rightNavIsOpen } = this.state;

        return (
            <div className={`alloya-body 
                            ${LeftSideNavIsOpen ? "side-nav-expanded" : ""}
                            ${rightNavIsOpen ? "right-nav-open" : ""}
                            `}>
                <header ref={node => (this.headerNode = node)}>
                    <TopNav toggleLeftSideNav={toggleLeftSideNav} toggleRightSideNav={toggleRightSideNav} />
                </header>
                <div className="main">
                    <div className="side-nav-wrapper" ref={node => (this.LeftSideNavNode = node)}>
                        <LeftSideNav openLeftSideNav={openLeftSideNav} />
                    </div>
                    <div className="alloya-content">
                        <Router>
                            <Route path="/" exact component={Dashboard} />
                            <Route path="/transaction" exact component={DiscoverPremierView} />
                            <Route path="/discover/:serviceType" component={DiscoverPremierView} />
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}