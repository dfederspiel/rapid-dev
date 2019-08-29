import React from 'react';
import FontAwesome from 'react-fontawesome';
import NavLink from '../NavLink/nav-link';
import Notifications from '../Notifications/notifications';
import Icon from '../Icon/icon';
import NavDropdown from '../NavDropdown/nav-dropdown';
import { settingsLinks, infoLinks } from './right-side-nav.links';

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
        const { renderClose, renderMember, renderSignOut } = this;

        return (
            <div className="right-side-nav">
                <Notifications />
                <div className="welcome-message">Hello, Clarise</div>
                <button className="trigger" onClick={toggleRightSideNav}>
                    <Icon name='ellipsis-h' size="lg" />
                </button>
                <div className="right-side-menu">
                    {renderClose()}
                    <NavDropdown className="settings" icon="cog" links={settingsLinks()} />
                    <NavDropdown className="info" icon="book" links={infoLinks()} />
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