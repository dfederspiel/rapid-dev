import React, { Component } from 'react';

class TabStrip extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="nav nav-tabs mb-4">
                {
                    this.props.tabs.map(function (tab) {
                        return <li className='nav-item' key={tab.title}> <a className={tab.isActive ? 'nav-link active' : 'nav-link'} href="{tab.url}">{tab.title}</a></li>;
                    })
                }
            </ul>
        );
    }
}

export default TabStrip;