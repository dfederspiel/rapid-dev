import React from 'react';
import Icon from '../Icon/icon';

export default class NavLink extends React.Component {

    render() {
        const { href, icon, title } = this.props;
        if (!href && !title)
            return;

        return (
            <li >
                {
                    href &&
                    <a href={href}>
                        {icon && <Icon name={icon} size="lg" />}
                        <div className="title">{title ? title : href}</div>
                    </a>
                }
                {
                    !href && title &&
                    <a>
                        {icon && <Icon name={icon} size="lg" />}
                        <div className="title">{title}</div>
                    </a>
                }
            </li>
        )
    }
}