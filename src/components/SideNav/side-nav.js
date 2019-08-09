import React from 'react';
import FontAwesome from 'react-fontawesome';
import Api from '../../services/Api';

export default class SideNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fetching: true,
            error: false,
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
        const { renderFastTrackLinks, hasFastTrackLinks, renderNavLink } = this;
        const { error, fetching } = this.state;

        return (
            <div className="side-nav">
                <ul className="nav-base-level">
                    {renderNavLink("Home Overview", "home-link", "/", "home")}

                    <li>
                        <a className="transaction-link">
                            <div className="icon"><FontAwesome name="laptop" size="lg" /></div>
                            <div className="title">Transaction</div>
                        </a>
                        <ul className="nav-second-level">
                            <li className="nav-heading">Transaction</li>
                            <li><a href="">Transaction Review</a></li>
                            <li><a href="">Cash Management Account</a></li>
                            <li><a href="">Domestic Wires</a></li>
                            <li><a href="">International Wires</a></li>
                            <li><a href="">Share Draft Services</a></li>
                            <li><a href="">Check Deposit Services</a></li>
                        </ul>

                    </li>
                    {/* {renderNavLink("Transaction", "transaction-link", "/transaction", "laptop")} */}
                    {renderNavLink("Liquidity", "liquidity-link", "/liquidity", "money-bill-alt")}
                    {renderNavLink("Investments", "investments-link", "/investments", "chart-pie")}
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