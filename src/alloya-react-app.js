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

    toggleSideNav = () => {
        this.setState({ sideNavIsOpen: !this.state.sideNavIsOpen });
    }

    render() {
        const { toggleSideNav } = this;
        const { sideNavIsOpen } = this.state;

        return (
            <div class={`alloya-body ${sideNavIsOpen ? "side-nav-expanded" : ""}`}>
                <header>
                    <TopNav toggleSideNav={toggleSideNav} />
                </header>
                <main>
                    <SideNav />
                    <div class="alloya-content">
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