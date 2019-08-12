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
            sideNavIsOpen: true,
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
        this.setState({ sideNavIsOpen: false });
    }

    toggleSideNav = () => {
        this.setState({ sideNavIsOpen: !this.state.sideNavIsOpen });
    }

    render() {
        const { toggleSideNav } = this;
        const { sideNavIsOpen } = this.state;

        return (
            <div className={`alloya-body ${sideNavIsOpen ? "side-nav-expanded" : ""}`}>
                <header ref={node => (this.headerNode = node)}>
                    <TopNav toggleSideNav={toggleSideNav} />
                </header>
                <main>
                    <div ref={node => (this.sideNavNode = node)}>
                        <SideNav />
                    </div>
                    <div className="alloya-content">
                        <Router>
                            <Route path="/" exact component={Dashboard} />
                            <Route path="/discover/:serviceType" component={DiscoverPremierView} />
                            <Route exact path="/home.html" component={Dashboard} />
                        </Router>
                    </div>
                </main>
            </div>
        );
    }
}