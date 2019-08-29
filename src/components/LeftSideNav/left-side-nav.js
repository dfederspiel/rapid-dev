import React from 'react';
import NavLinkWithLevels from '../NavLinkWithLevels/nav-link-with-levels';
import { transactionsLinks, liquidityLinks, investmentsLinks } from './left-side-nav.links';
import NavLink from '../NavLink/nav-link';
import NavFastTrack from '../NavFastTrack/nav-fasttrack';

export default class LeftSideNav extends React.Component {
    render() {
        const { openLeftSideNav } = this.props;

        return (
            <div className="side-nav" >
                <ul className="nav-base-level">

                    {<NavLink title="Home Overview" href="/" icon="home" />}

                    {<NavLinkWithLevels
                        title="Transactions"
                        icon="laptop"
                        openLeftSideNav={openLeftSideNav}
                        links={transactionsLinks()}
                    />}

                    {<NavLinkWithLevels
                        title="Liquidity"
                        icon="money-bill-alt"
                        openLeftSideNav={openLeftSideNav}
                        links={liquidityLinks()}
                    />}

                    {<NavLinkWithLevels
                        title="Investments"
                        icon="chart-pie"
                        openLeftSideNav={openLeftSideNav}
                        links={investmentsLinks()}
                    />}
                </ul>
                <NavFastTrack />
            </div>
        );
    }
}