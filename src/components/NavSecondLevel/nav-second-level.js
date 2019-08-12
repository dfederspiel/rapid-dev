﻿import React from 'react';
import NavThirdLevel from '../NavThirdLevel/nav-third-level';

export default class NavSecondLevel extends React.Component {
    render() {
        const { title, links } = this.props;

        if (!this.props.title)
            return null;

        return (
            <ul className={`nav-second-level`}>
                <li className="nav-heading">{title}</li>
                {
                    links && links.map((item, key) =>
                        <li key={key}>
                            {
                                item.href && !item.sublinks &&
                                <a href={item.href}>{item.title}</a>
                            }
                            {
                                item.sublinks && item.sublinks.length > 0 &&
                                <NavThirdLevel title={item.title} links={item.sublinks} />
                            }
                        </li>)
                }
            </ul>
        );
    }
}