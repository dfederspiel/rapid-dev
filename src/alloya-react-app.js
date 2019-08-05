import Services from './js/services';
import React from 'react';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import TopNav from './components/TopNav/top-nav';
import SideNav from './components/SideNav/side-nav';
import Dashboard from './pages/Dashboard/dashboard';
import DiscoverPremierView from './pages/DiscoverPremierView/discover-premier-view';

export default class AlloyaReactApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            isMobile: false,
            minimal: false
        };
        window.onresize = this.setViewState;
    }

    componentDidMount() {
        this.setViewState();
    }

    getNavigationState = () => {
        return Services.getAppState().sideNav.expanded;
    }

    setViewState = () => {
        console.log(window.innerWidth);
        if (window.innerWidth < 768)
            this.setState({ isMobile: true });
        else
            this.setState({ isMobile: false, minimal: false });
    }

    menuClicked = () => {
        if (this.state.isMobile)
            this.setState({ open: !this.state.open });
        else
            this.setState({ minimal: !this.state.minimal, open: true });
    }

    render() {
        return (
            <Router>
                <header>
                    <TopNav menuClicked={this.menuClicked} notificationCount={300} />
                </header>
                <main>
                    <SideNav minimal={this.state.minimal} open={this.state.open} mobile={this.state.isMobile} />
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/discover/:serviceType" component={DiscoverPremierView} />
                    <Route exact path="/home.html" component={Dashboard} />
                </main>
            </Router>
        );
    }
}