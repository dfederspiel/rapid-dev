import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class NavLink extends React.Component {

    render() {
        const { title, href, icon } = this.props;

        return (
            <li >
                <a href={href}>
                    <div className="icon"><FontAwesome name={icon} size="lg" /></div>
                    <div className="title">{title}</div>
                </a>
            </li>
        )
    }
}