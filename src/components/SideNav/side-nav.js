import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class SideNav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
            minimal: false,
            mobile: props.mobile
        };
    }

    componentWillReceiveProps(props) {
        this.setState({ open: props.open, mobile: props.mobile, minimal: props.minimal });
    }

    getClasses() {
        var classes = ['side-nav'];
        if (this.state.open)
            classes.push('open');
        if (this.state.mobile)
            classes.push('mobile');
        if (this.state.minimal)
            classes.push('minimal');

        return classes.join(' ');
    }

    getUserLinks = () => {
        var links = [
            { icon: 'bell', href: '/', title: 'Domestic Wire' },
            { icon: 'star', href: '/', title: 'Credit Union Dashboard' },
            { icon: 'star', href: '/', title: 'Transaction Review' },
            { icon: 'star', href: '/', title: 'ACH' },
            { icon: 'star', href: '/', title: 'Coin & Currency Order' },
            { icon: 'star', href: '/', title: 'International Wire' },
            { icon: 'star', href: '/', title: 'Cash Management' }
        ];

        let linkHtml = [];
        for (var x = 0; x < links.length; x++) {
            linkHtml.push(<a key={x}><FontAwesome name='star' size="lg" />{!this.state.minimal && <label>{links[x].title}</label>}</a>);
        }

        return linkHtml;
    }

    render() {
        return (
            <div className={this.getClasses()}>
                <div className="side-nav-upper">
                    <a className="active"><FontAwesome style={{ color: 'gray' }} name='home' size="lg" />{!this.state.minimal && <label>Home Overview</label>}</a>
                    <a><FontAwesome style={{ color: 'gray' }} name='laptop' size="lg" />{!this.state.minimal && <label>Transactions</label>}</a>
                    <a><FontAwesome style={{ color: 'gray' }} name='money-bill-alt' size="lg" />{!this.state.minimal && <label>Liquidity</label>}</a>
                    <a><FontAwesome style={{ color: 'gray' }} name='chart-pie' size="lg" />{!this.state.minimal && <label>Investments</label>}</a>
                </div>
                <div className="side-nav-lower">
                    <label className="fast-track-title">FastTrack</label>
                    {this.getUserLinks()}
                </div>
            </div>
        );
    }
}