import React from 'react';
import NavThirdLevel from '../NavThirdLevel/nav-third-level';

export default class NavSecondLevel extends React.Component {
    render() {
        return (
            <ul className={`nav-second-level`}>
                <li className="nav-heading">{this.props.title}</li>
                {
                    this.props.links.map((item, key) =>
                        <li key={key}>
                            <a href={item.href}>{item.title}</a>
                            {
                                item.sublinks && item.sublinks.length > 0 &&
                                <NavThirdLevel links={item.sublinks} />
                            }
                        </li>)
                }
            </ul>
        );
    }
}