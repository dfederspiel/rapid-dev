import React from 'react';

export default class NavThirdLevel extends React.Component {
    render() {
        return (
            <ul className="nav-third-level">
                {this.props.links.map((link, key) =>
                    <li key={key}>
                        <a href={link.href}>{link.title}</a>
                    </li>
                )}
            </ul>
        )
    }
}