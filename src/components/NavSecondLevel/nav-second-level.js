import React from 'react';
import NavThirdLevel from '../NavThirdLevel/nav-third-level';
import NavLink from '../NavLink/nav-link';

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
                        <React.Fragment key={key}>
                            {
                                item.href && !item.sublinks &&
                                <NavLink href={item.href} title={item.title} key={key} />
                            }
                            {
                                item.sublinks && item.sublinks.length > 0 &&
                                <NavThirdLevel title={item.title} links={item.sublinks} />
                            }
                        </React.Fragment>
                    )
                }
            </ul>
        );
    }
}