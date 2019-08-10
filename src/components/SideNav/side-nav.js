import React from 'react';
import FontAwesome from 'react-fontawesome';
import Api from '../../services/Api';

export default class SideNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fetching: true,
            error: false,
            transactionLinkActive: false,
            liquidityLinkActive: false,
            investmentsLinkActive: false,
            links: [],
        };
    }

    componentDidMount() {
        Api.fetch("/api/fasttrack")
            .then(this.setLinks)
            .catch(this.displayError);
    }

    setLinks = (linksArray) => {
        this.setState({ links: linksArray, fetching: false });
    }

    displayError = () => {
        this.setState({ error: true, fetching: false });
    }

    hasFastTrackLinks = () => {
        return this.state.links.length > 0;
    }

    toggleLinkActive = (ref) => {
        this.closeAllActiveLinks();
        this.setState({ [ref]: !this.state[ref] }, this.props.openSideNav);
    }

    closeAllActiveLinks = (ref) => {
        let links = [
            "transactionLinkActive",
            "liquidityLinkActive",
            "investmentsLinkActive"
        ]

        links.map((item, key) =>
            this.setState({ [item]: false })
        )
    }

    renderFastTrackLinks = () => {
        return (
            this.state.links.map((item, index) =>
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

    renderNavLinkWithLevels = (title, className, icon, linkIsActive, navSecondLevelLinks) => {
        return (
            <li onClick={() => this.toggleLinkActive(linkIsActive)} className={this.state[linkIsActive] ? "active" : ""}>
                <a className={className}>
                    <div className="icon"><FontAwesome name={icon} size="lg" /></div>
                    <div className="title">{title}</div>
                </a>
                <ul className={`nav-second-level`}>
                    <li className="nav-heading">{title}</li>
                    {navSecondLevelLinks.map((item, key) =>
                        <li key={key}>
                            <a href={item.href}>{item.title}</a>
                            {
                                item.sublinks && item.sublinks.length > 0 &&
                                <ul className="nav-third-level">
                                    {item.sublinks.map((subItem, key) =>
                                        <li key={key}>
                                            <a href={subItem.href}>{subItem.title}</a>
                                        </li>
                                    )}
                                </ul>
                            }
                        </li>)}
                </ul>
            </li>
        )
    }

    render() {
        const { renderFastTrackLinks, renderNavLinkWithLevels, hasFastTrackLinks, renderNavLink } = this;
        const { error, fetching } = this.state;

        return (
            <div className="side-nav">
                <ul className="nav-base-level">
                    {renderNavLink("Home Overview", "home-link", "/", "home")}

                    {renderNavLinkWithLevels("Transactions", "transaction-link", "laptop", "transactionLinkActive",
                        [
                            { href: "", title: "Transaction Review" },
                            { href: "", title: "Cash Management Account" },
                            { href: "", title: "International Wires" },
                            {
                                href: "", title: "Share Draft Services",
                                sublinks:
                                    [
                                        { href: "", title: "Transaction Review" },
                                        { href: "", title: "Cash Management Account" },
                                        { href: "", title: "International Wires" },
                                    ]
                            },
                            { href: "", title: "Check Deposit Services" },
                        ]
                    )}

                    {renderNavLinkWithLevels("Liquidity", "liquidity-link", "money-bill-alt", "liquidityLinkActive",
                        [
                            { href: "", title: "Liquidity Link 1" },
                            { href: "", title: "Liquidity Link 2" },
                            { href: "", title: "Liquidity Link 3" },
                            { href: "", title: "Liquidity Link 4" },
                            { href: "", title: "Liquidity Link 5" },
                            { href: "", title: "Liquidity Link 6" },
                        ]
                    )}

                    {renderNavLinkWithLevels("Investments", "investments-link", "chart-pie", "investmentsLinkActive",
                        [
                            { href: "", title: "Investments Link 1" },
                            { href: "", title: "Investments Link 2" },
                            { href: "", title: "Investments Link 3" },
                            { href: "", title: "Investments Link 4" },
                            { href: "", title: "Investments Link 5" },
                            { href: "", title: "Investments Link 6" },
                        ]
                    )}
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