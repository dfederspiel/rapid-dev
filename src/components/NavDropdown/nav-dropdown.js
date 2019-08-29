import React from 'react';
import Icon from '../Icon/icon';
import NavThirdLevel from '../NavThirdLevel/nav-third-level';

export default class NavDropdown extends React.Component {

    hasLinks = () => {
       return this.props.links && this.props.links.length > 0;
    }

    render() {
        const { className, links } = this.props;
        const { hasLinks } = this;

        return (
            <div className={`nav-dropdown ${className && className}`}>
                <button>
                    <Icon name={this.props.icon} size="lg" />
                </button>
                <ul>
                    {
                    hasLinks() && links.map((item, key) =>
                            <NavThirdLevel title={item.title} href={item.href} links={item.sublinks} key={key} />
                    )
                }
                </ul>
            </div>
        );
    }
}