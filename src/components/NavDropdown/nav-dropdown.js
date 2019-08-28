import React from 'react';
import Icon from '../Icon/icon';
import NavThirdLevel from '../NavThirdLevel/nav-third-level';

export default class NavDropdown extends React.Component {
    render() {
        return (
            <div className={`nav-dropdown ${this.props.className}`}>
                <button>
                    <Icon name={this.props.icon} size="lg" />
                </button>
                <ul>
                    {
                        this.props.links.map((item, key) =>
                            < NavThirdLevel title={item.title} href={item.href} links={item.sublinks} key={key} />
                        )
                    }
                </ul>
            </div>
        );
    }
}