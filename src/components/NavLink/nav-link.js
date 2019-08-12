import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class NavLink extends React.Component {
    constructor(props) {
        super(props);
    }

    renderIcon = (icon) => {
        return (
            <div className="icon">
                <FontAwesome name={icon} size="lg" />
            </div>
        )
    }
    render() {
        const { href, icon, title } = this.props;
        const { renderIcon } = this;

        if(!href && !title)
            return;

        return (
            <li >
                {
                    href &&
                    <a href={href}>
                        {icon && renderIcon(icon)}
                        <div className="title">{title ? title : href}</div>
                    </a>
                }
                {
                    !href && title &&
                    <a>
                        {icon && renderIcon(icon)}
                        <div className="title">{title}</div>
                    </a>
                }
            </li>
        )
    }
}