import React from 'react';
import Icon from '../Icon/icon';
import NavLink from '../NavLink/nav-link';

export default class Notifications extends React.Component {
    render() {
        let count = 8;
        let countIsOver99 = count > 99;
        return (
            <div className="notifications">
                <div className="trigger">
                    <Icon name="bell" size="lg" />
                    <div className="notification-count">
                        <span className={`count ${countIsOver99 ? "small" : ""}`}>
                            {countIsOver99 ? "99+" : count}</span>
                    </div>
                </div>
                <div className="notifications-menu">
                    <ul>
                        <NavLink title="Link" href="/" />
                    </ul>
                </div>
            </div>
        )
    }
}