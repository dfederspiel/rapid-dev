import React from 'react';
import FontAwesome from 'react-fontawesome';
import NavLink from '../NavLink/nav-link';
import NavLinkWithLevels from '../NavLinkWithLevels/nav-link-with-levels';
import NavSecondLevel from '../NavSecondLevel/nav-second-level';

export default class RightSideNav extends React.Component {

    render() {
        const { toggleRightSideNav } = this.props;

        return (
            <div className="right-side-nav">
                <div className="notifications">
                    <div className="trigger">
                        <div className="icon"><FontAwesome name='bell' size="lg" /></div>
                    </div>
                    <div className="notifications-menu">

                    </div>
                </div>
                <button className="trigger" onClick={toggleRightSideNav}>
                    <FontAwesome name='ellipsis-h' size="lg" />
                </button>
                <div className="right-side-menu">
                    <div className="close-right-nav">
                        <button onClick={toggleRightSideNav}>
                            <span className="title">CLOSE</span>
                            <span className="icon"><FontAwesome name="times" /></span>
                        </button>
                    </div>
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
                    <ul className="info">
                        <NavLink title="Training and Events" href="/" />
                        <NavLink title="KnowledgeCenter" href="/" />
                        <NavLink title="Premier View FAQ's" href="/" />
                    </ul>
                    <ul className="member">
                        <NavLink title="Transaction Cutoff Times" href="/" />
                        <NavLink title="Contact Alloya" href="/" />
                        <NavLink title="Member Pay" href="/" />
                        <NavLink title="Alloya Home" href="/" />
                    </ul>
                    <ul>
                        <NavLink title="Sign Out" href="/" />
                    </ul>
                    <ul>
                        <NavLink title="BACK TO INDEX" href="/" />
                    </ul>
                </div>
            </div>
        );
    }
}