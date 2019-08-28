import React from 'react';
import FontAwesome from 'react-fontawesome';
import NavLink from '../NavLink/nav-link';
import Notifications from '../Notifications/notifications';
import Icon from '../Icon/icon';
import NavThirdLevel from '../NavThirdLevel/nav-third-level';
import NavDropdown from '../NavDropdown/nav-dropdown';

export default class RightSideNav extends React.Component {
    renderClose = () => {
        return (
            <div className="alloya-close">
                <button onClick={this.props.toggleRightSideNav}>
                    <span className="title">CLOSE</span>
                    <span className="icon"><FontAwesome name="times" /></span>
                </button>
            </div>
        )
    }

    renderSettings = () => {
        return (
            <div className="settings">
                <button>
                    <Icon name="cog" size="lg" />
                </button>
                <ul>
                    <NavThirdLevel title="Administration"
                        links={[{ href: '/', title: "Sub1" }, { href: '/', title: "Sub2" }]}
                    />

                    <NavThirdLevel title="Corporate Tool Box"
                        links={[{ href: '/', title: "Sub1" }, { href: '/', title: "Sub2" }]}
                    />

                    <NavThirdLevel title="Contract Management"
                        links={[{ href: '/', title: "Sub1" }, { href: '/', title: "Sub2" }]}
                    />
                </ul>
            </div>
        )
    }

    renderInfo = () => {
        return (
            <div className="info">
                <button>
                    <Icon name="book" size="lg" />
                </button>
                <ul>
                    <NavLink title="Training and Events" href="/" />
                    <NavLink title="" href="/" />
                    <NavLink title="" href="/" />
                </ul>
            </div>
        )
    }

    renderMember = () => {
        return (
            <div className="member">
                <ul>
                    <NavLink title="Transaction Cutoff Times" href="/" />
                    <NavLink title="Contact Alloya" href="/" />
                    <NavLink title="Member Pay" href="/" />
                    <NavLink title="Alloya Home" href="/" />
                </ul>
            </div>
        )
    }

    renderSignOut = () => {
        return (
            <div>
                <ul>
                    <NavLink title="Sign Out" href="/" />
                </ul>
            </div>
        )
    }

    render() {
        const { toggleRightSideNav } = this.props;
        const {
            renderClose,
            renderSettings,
            renderInfo,
            renderMember,
            renderSignOut
        } = this;

        return (
            <div className="right-side-nav">
                <Notifications />
                <div className="welcome-message">Hello, Clarise</div>
                <button className="trigger" onClick={toggleRightSideNav}>
                    <Icon name='ellipsis-h' size="lg" />
                </button>
                <div className="right-side-menu">
                    {renderClose()}
                    <NavDropdown className="settings" icon="cog"
                        links={[
                            {
                                title: "Administration",
                                sublinks: [{ href: '/', title: "Sub1" }, { href: '/', title: "Sub2" }]
                            },
                            {
                                title: "Corporate Tool Box",
                                sublinks: [{ href: '/', title: "Sub1" }, { href: '/', title: "Sub2" }]
                            },
                            {
                                title: "Contract Management",
                                sublinks: [{ href: '/', title: "Sub1" }, { href: '/', title: "Sub2" }]
                            }
                        ]} />

                    <NavDropdown className="info" icon="book"
                        links={[
                            { title: "Training and Events", href: '/' },
                            { title: "Knowledge Center", href: '/' },
                            { title: "Premier View FAQ's", href: '/' }
                        ]} />

                    {renderMember()}
                    {renderSignOut()}
                    <div>
                        <ul>
                            <NavLink title="BACK TO INDEX" href="/" />
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}