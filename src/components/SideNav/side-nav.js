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
            { icon: 'star', href: '/', title: 'Some Link', active: true },
            { icon: 'star', href: '/', title: 'Some Link' },
            { icon: 'star', href: '/', title: 'Some Link' },
            { icon: 'star', href: '/', title: 'Some Link' },
            { icon: 'star', href: '/', title: 'Some Link' },
            { icon: 'star', href: '/', title: 'Some Link' },
            { icon: 'star', href: '/', title: 'Some Link' }
        ];

        let linkHtml = [];
        for (var x = 0; x < links.length; x++) {
            linkHtml.push(<a className={links[x].active ? 'active' : '' } key={x}><FontAwesome name='star' size="lg" />{!this.state.minimal && <label>TESTING</label>}</a>);
        }

        return linkHtml;
    }

    render() {
        return (
            <div className={this.getClasses()}>
                <div className="side-nav-upper">
                    <a className="active"><FontAwesome style={{ color: 'gray' }} name='star' size="lg" />{!this.state.minimal && <label>Home Overview</label>}</a>
                    <a><FontAwesome style={{ color: 'gray' }} name='bell' size="lg" />{!this.state.minimal && <label>Transactions</label>}</a>
                    <a><FontAwesome style={{ color: 'gray' }} name='bath' size="lg" />{!this.state.minimal && <label>Liquidity</label>}</a>
                    <a><FontAwesome style={{ color: 'gray' }} name='bed' size="lg" />{!this.state.minimal && <label>Investments</label>}</a>
                </div>
                <div className="side-nav-lower">
                    <label>FastTrack</label>
                    {this.getUserLinks()}
                </div>
            </div>
        );
    }
}