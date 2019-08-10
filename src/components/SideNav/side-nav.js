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

    render() {
        const { renderFastTrackLinks, hasFastTrackLinks, renderNavLink, toggleLinkActive } = this;
        const { error, fetching, transactionLinkActive, liquidityLinkActive, investmentsLinkActive } = this.state;

        return (
            <div className="side-nav">
                <ul className="nav-base-level">
                    {renderNavLink("Home Overview", "home-link", "/", "home")}

                    <li onClick={() => toggleLinkActive("transactionLinkActive")} className={transactionLinkActive ? "active" : ""}>
                        <a className="transaction-link">
                            <div className="icon"><FontAwesome name="laptop" size="lg" /></div>
                            <div className="title">Transaction</div>
                        </a>
                        <ul className={`nav-second-level`}>
                            <li className="nav-heading">Transaction</li>
                            <li><a href="">Transaction Review</a></li>
                            <li><a href="">Cash Management Account</a></li>
                            <li><a href="">Domestic Wires</a></li>
                            <li><a href="">International Wires</a></li>
                            <li><a href="">Share Draft Services</a></li>
                            <li><a href="">Check Deposit Services</a></li>
                        </ul>
                    </li>

                    <li onClick={() => toggleLinkActive("liquidityLinkActive")} className={liquidityLinkActive ? "active" : ""}>
                        <a className="liquidity-link">
                            <div className="icon"><FontAwesome name="money-bill-alt" size="lg" /></div>
                            <div className="title">Liquidity</div>
                        </a>
                        <ul className={`nav-second-level`}>
                            <li className="nav-heading">Liquidity</li>
                            <li><a href="">Cash Management Account</a></li>
                            <li><a href="">Domestic Wires</a></li>
                        </ul>
                    </li>

                    <li onClick={() => toggleLinkActive("investmentsLinkActive")} className={investmentsLinkActive ? "active" : ""}>
                        <a className="investments-link">
                            <div className="icon"><FontAwesome name="chart-pie" size="lg" /></div>
                            <div className="title">Investments</div>
                        </a>
                        <ul className={`nav-second-level`}>
                            <li className="nav-heading">Investments</li>
                            <li><a href="">Cash Management Account</a></li>
                            <li><a href="">Domestic Wires</a></li>
                        </ul>
                    </li>
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