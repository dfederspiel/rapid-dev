import React from 'react';
import FontAwesome from 'react-fontawesome';
import NavLink from '../NavLink/nav-link';
import NavLinkWithLevels from '../NavLinkWithLevels/nav-link-with-levels';
import Notifications from '../Notifications/notifications';
import Icon from '../Icon/icon';

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
            <ul className="settings">
                <NavLinkWithLevels
                    title="Administration"
                    showCaret={true}
                    links={[{ href: '/', title: "Admin Level 2" }, { href: '/', title: "Admin Level 2" }]}
                />
                <NavLinkWithLevels
                    title="Corporate Tool Box"
                    showCaret={true}
                    links={[{ href: '/', title: "Corporate Level 2" }, { href: '/', title: "Corporate Level 2" }]}
                />
                <NavLinkWithLevels
                    title="Contract Management"
                    showCaret={true}
                    links={[{ href: '/', title: "Contract Level 2" }, { href: '/', title: "Contract Level 2" }, { href: '/', title: "Contract Level 2" }, { href: '/', title: "Contract Level 2" }]}
                />
            </ul>
        )
    }

    renderInfo = () => {
        return (
            <ul className="info">
                <NavLink title="Training and Events" href="/" />
                <NavLink title="KnowledgeCenter" href="/" />
                <NavLink title="Premier View FAQ's" href="/" />
            </ul>
        )
    }

    renderMember = () => {
        return (
            <ul className="member">
                <NavLink title="Transaction Cutoff Times" href="/" />
                <NavLink title="Contact Alloya" href="/" />
                <NavLink title="Member Pay" href="/" />
                <NavLink title="Alloya Home" href="/" />
            </ul>
        )
    }

    renderSignOut = () => {
        return (
            <ul>
                <NavLink title="Sign Out" href="/" />
            </ul>
        )
    }

    render() {
        const { toggleRightSideNav } = this.props;
        const {
            renderNotifications,
            renderClose,
            renderSettings,
            renderInfo,
            renderMember,
            renderSignOut
        } = this;

        return (
            <div className="right-side-nav">
                 <Notifications />
                <button className="trigger" onClick={toggleRightSideNav}>
                    <Icon name='ellipsis-h' size="lg" />
                </button>
                <div className="right-side-menu">
                    {renderClose()}
                    {renderSettings()}
                    {renderInfo()}
                    {renderMember()}
                    {renderSignOut()}
                    <ul>
                        <NavLink title="BACK TO INDEX" href="/" />
                    </ul>
                </div>
            </div>
        );
    }
}