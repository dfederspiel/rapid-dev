import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class SideNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            links: [
                { icon: 'bell', href: '/', title: 'Domestic Wire' },
                { icon: 'star', href: '/', title: 'Credit Union Dashboard' },
                { icon: 'star', href: '/', title: 'Transaction Review' },
                { icon: 'star', href: '/', title: 'ACH' },
                { icon: 'star', href: '/', title: 'Coin & Currency Order' },
                { icon: 'star', href: '/', title: 'International Wire' },
                { icon: 'star', href: '/', title: 'Cash Management' }
            ],
        };
    }

    renderFastTrackLinks = () => {
        return (
            this.state.links.map((item, index) =>
                <li key={index}>
                    <a href={item.href}>
                        <div className="icon"><FontAwesome name={item.icon} size="lg" /></div>
                        <div className="link">{item.title}</div></a>
                </li>
            )
        )
    }

    render() {
        return (
            <div className="side-nav">
                <ul className="top">
                    <li><a href="#">
                        <div className="icon"><FontAwesome name='home' size="lg" /></div>
                        <div className="link">Home Overview</div></a></li>
                    <li><a href="#">
                        <div className="icon"><FontAwesome name='laptop' size="lg" /></div>
                        <div className="link">Transaction</div></a></li>
                    <li><a href="#">
                        <div className="icon"><FontAwesome name='money-bill-alt' size="lg" /></div>
                        <div className="link">Liquidity</div></a></li>
                    <li><a href="#">
                        <div className="icon"><FontAwesome name='chart-pie' size="lg" /></div>
                        <div className="link">Investments</div></a></li>
                </ul>
                <ul className="bottom">
                    <label className="heading">FastTrack</label>
                    {this.renderFastTrackLinks()}
                </ul>
            </div>
        );
    }
}