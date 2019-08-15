import React from 'react';
import TopNav from './components/TopNav/top-nav';
import SideNav from './components/SideNav/side-nav';
import Dashboard from './pages/Dashboard/dashboard';
import DiscoverPremierView from './pages/DiscoverPremierView/discover-premier-view';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class AlloyaReactApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sideNavIsOpen: false,
            rightNavIsOpen: false,
        };
    }

    componentWillMount() {
        document.addEventListener("mousedown", this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClick, false);
    }

    handleClick = (e) => {
        if (this.sideNavNode.contains(e.target) || this.headerNode.contains(e.target))
            return;
        this.closeSideNav();
    }

    toggleSideNav = () => {
        this.setState({ sideNavIsOpen: !this.state.sideNavIsOpen });
    }

    toggleRightNav = () => {
        this.setState({ rightNavIsOpen: !this.state.rightNavIsOpen, sideNavIsOpen:false });
    }

    openSideNav = () => {
        this.setState({ sideNavIsOpen: true });
    }

    closeSideNav = () => {
        this.setState({ sideNavIsOpen: false });
    }

    render() {
        const { toggleSideNav, toggleRightNav, openSideNav } = this;
        const { sideNavIsOpen, rightNavIsOpen } = this.state;

        return (
            <div className={`alloya-body 
                            ${sideNavIsOpen ? "side-nav-expanded" : ""}
                            ${rightNavIsOpen ? "right-nav-open" : ""}
                            `}>
                <header ref={node => (this.headerNode = node)}>
                    <TopNav toggleSideNav={toggleSideNav} toggleRightNav={toggleRightNav} />
                </header>
                <main>
                    <div className="side-nav-wrapper" ref={node => (this.sideNavNode = node)}>
                        <SideNav openSideNav={openSideNav} />
                    </div>
                    <div className="alloya-content">
                        <Router>
                            <Route path="/" exact component={Dashboard} />
                            <Route path="/transaction" exact component={DiscoverPremierView} />
                            <Route path="/discover/:serviceType" component={DiscoverPremierView} />
                        </Router>
                    </div>
                </main>
            </div>
        );
    }
}