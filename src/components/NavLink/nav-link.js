﻿import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class NavLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { href, icon, title } = this.props;

        if (!this.props.href)
            return null;

        return (
            <li >
                <a href={href}>
                    {
                        icon &&
                        <div className="icon"><FontAwesome name={icon} size="lg" /></div>
                    }
                    <div className="title">{title ? title : href}</div>
                </a>
            </li>
        )
    }
}