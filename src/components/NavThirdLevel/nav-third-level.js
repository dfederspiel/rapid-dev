import React from 'react';
import FontAwesome from 'react-fontawesome';
import AnimateHeight from 'react-animate-height';
import NavLink from '../NavLink/nav-link';
import Icon from '../Icon/icon';

export default class NavThirdLevel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { height: 0 }
    }

    toggleSublinks = () => {
        this.setState({ height: this.state.height === 0 ? 'auto' : 0 });
    }

    render() {
        const { toggleSublinks } = this;
        const { height } = this.state;
        const { title, links, href } = this.props;

        if (!title)
            return;

        return (
            <li className={`third-level-trigger ${height ? "active" : ""}`}>
                {
                    !links && href &&
                    <a href={href}>
                        <div className="title">{title}</div>
                    </a>

                }

                {
                    links &&
                    <>
                        <a href="javascript:void(0)" onClick={toggleSublinks}>
                            <div className="title">{title}</div>
                            <Icon name="angle-down" />
                        </a>
                        <AnimateHeight duration={500} height={height}>
                            <ul className="nav-third-level">
                                {links.map((link, key) =>
                                    <NavLink href={link.href} title={link.title} key={key} />
                                )}
                            </ul>
                        </AnimateHeight >
                    </>
                }
            </li>
        )
    }
}