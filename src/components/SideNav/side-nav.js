import React from 'react';
import Api from '../../services/Api';
import NavLinkWithLevels from '../NavLinkWithLevels/nav-link-with-levels';
import { transactionsLinks, liquidityLinks, investmentsLinks } from './side-nav.links';
import NavLink from '../NavLink/nav-link';
import NavFastTrack from '../NavFastTrack/nav-fasttrack';

export default class SideNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fetching: true,
            error: false,
            fasttrackLinks: [],
        };
    }

    componentDidMount() {
        Api.fetch("/api/fasttrack")
            .then(this.setLinks)
            .catch(this.displayError);
    }

    setLinks = (linksArray) => {
        this.setState({ fasttrackLinks: linksArray, fetching: false });
    }

    displayError = () => {
        this.setState({ error: true, fetching: false });
    }

    hasFastTrackLinks = () => {
        return this.state.fasttrackLinks.length > 0;
    }

    renderFastTrackLinks = () => {
        return (
            this.state.fasttrackLinks.map((item, index) =>
                <NavLink {...item} key={index} />
            )
        )
    }

    render() {
        const { renderFastTrackLinks, hasFastTrackLinks } = this;
        const { error, fetching } = this.state;
        const { openSideNav } = this.props;

        return (
            <div className="side-nav" >
                <ul className="nav-base-level">

                    {<NavLink title="Home Overview" href="/" icon="home" />}

                    {<NavLinkWithLevels
                        title="Transactions"
                        icon="laptop"
                        openSideNav={openSideNav}
                        links={transactionsLinks()}
                    />}

                    {<NavLinkWithLevels
                        title="Liquidity"
                        icon="money-bill-alt"
                        openSideNav={openSideNav}
                        links={liquidityLinks()}
                    />}

                    {<NavLinkWithLevels
                        title="Investments"
                        icon="chart-pie"
                        openSideNav={openSideNav}
                        links={investmentsLinks()}
                    />}
                </ul>
                <NavFastTrack />
            </div>
        );
    }
}