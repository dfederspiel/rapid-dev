import Services from './js/services';
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
            sideNavIsMinimal: false
        };

        window.onresize = this.setViewState;
    }

    componentDidMount() {
        this.setViewState();
    }

    setViewState = () => {
        !this.isMobile() && this.setState({ sideNavIsMinimal: false });
    }

    isMobile = () => {
        return window.innerWidth < 768
    }

    handleSideNavToggle = () => {
        this.isMobile() ? this.toggleSideNav() : this.toggleMinimalSideNav();
    }

    toggleMinimalSideNav = () => {
        this.setState({ sideNavIsMinimal: !this.state.sideNavIsMinimal }, this.toggleSideNav);
    }

    toggleSideNav = () => {
        this.setState({ sideNavIsOpen: !this.state.sideNavIsOpen });
    }

    //not used
    // getNavigationState = () => {
    //     return Services.getAppState().sideNav.expanded;
    // }

    render() {
        const { handleSideNavToggle } = this;
        const { sideNavIsMinimal, sideNavIsOpen } = this.state;

        return (
            <div className="alloya-react-app">
                <header>
                    <TopNav toggleSideNav={handleSideNavToggle} notificationCount={300} />
                </header>
                <main className="alloya-main">
                <SideNav minimal={sideNavIsMinimal} open={sideNavIsOpen} />
                    <Router>
                        <Route path="/" exact component={Dashboard} />
                        <Route path="/discover/:serviceType" component={DiscoverPremierView} />
                        <Route exact path="/home.html" component={Dashboard} />
                    </Router>
                </main>
            </div>
        );
    }
}