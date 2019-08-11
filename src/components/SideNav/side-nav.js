﻿import React from 'react';
import FontAwesome from 'react-fontawesome';
import Api from '../../services/Api';
import NavLinkWithLevels from '../NavLinkWithLevels/nav-link-with-levels';

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
                this.renderNavLink(item.title, "", item.href, item.icon, index)
            )
        )
    }

    renderNavLink = (title, className, href, icon, key) => {
        return (
            <li key={key && key}>
                <a href={href} className={className}>
                    <div className="icon"><FontAwesome name={icon} size="lg" /></div>
                    <div className="title">{title}</div>
                </a>
            </li>
        )
    }

    render() {
        const { renderFastTrackLinks, hasFastTrackLinks, renderNavLink } = this;
        const { error, fetching } = this.state;
        const { openSideNav } = this.props;

        return (
            <div className="side-nav" >
                <ul className="nav-base-level">
                    {renderNavLink("Home Overview", "home-link", "/", "home")}

                    {<NavLinkWithLevels
                        title="Transactions"
                        icon="laptop"
                        openSideNav={openSideNav}
                        links={[
                            { title: "Transaction Review", href: "" },
                            { title: "Cash Management Account", href: "" },
                            { title: "International Wires", href: "" },
                            {
                                title: "Share Draft Services", href: "",
                                sublinks:
                                    [
                                        { title: "Third Level 1", href: "" },
                                        { title: "Third Level 2", href: "" },
                                        { title: "Third Level 3", href: "" },
                                    ]
                            },
                            { title: "Check Deposit Services", href: "" },
                        ]}
                    />}
                    {<NavLinkWithLevels
                        title="Liquidity"
                        icon="money-bill-alt"
                        openSideNav={openSideNav}
                        links={[
                            { href: "", title: "Liquidity Link 1" },
                            { href: "", title: "Liquidity Link 2" },
                            { href: "", title: "Liquidity Link 3" },
                            { href: "", title: "Liquidity Link 4" },
                            { href: "", title: "Liquidity Link 5" },
                            { href: "", title: "Liquidity Link 6" },
                        ]}
                    />}

                    {<NavLinkWithLevels
                        title="Investments"
                        icon="chart-pie"
                        openSideNav={openSideNav}
                        links={[
                            { href: "", title: "Investments Link 1" },
                            { href: "", title: "Investments Link 2" },
                            { href: "", title: "Investments Link 3" },
                            { href: "", title: "Investments Link 4" },
                            { href: "", title: "Investments Link 5" },
                            { href: "", title: "Investments Link 6" },
                        ]}
                    />}

                </ul>

                <div className="fasttrack">
                    <ul className="nav-base-level">
                        <label className="heading">FastTrack</label>
                        {
                            fetching && !error && !hasFastTrackLinks() &&
                            <div> Loading...</div>
                        }
                        {
                            !fetching && !error && hasFastTrackLinks() &&
                            renderFastTrackLinks()
                        }
                        {
                            !fetching && !error && !hasFastTrackLinks() &&
                            <div className="no-data-message">No FastTrack items found.</div>
                        }
                        {
                            !fetching && error && !hasFastTrackLinks() &&
                            <div className="error">There was an error retrieving FastTrack.</div>
                        }
                    </ul>
                </div>
            </div>
        );
    }
}