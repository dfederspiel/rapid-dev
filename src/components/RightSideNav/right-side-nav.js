﻿import React from 'react';
import FontAwesome from 'react-fontawesome';

export default class RightSideNav extends React.Component {

    render() {
        const { toggleRightSideNav } = this.props;

        return (
            <div className="right-side-nav">
                <div className="notifications">
                    <div className="trigger">
                        <div className="icon"><FontAwesome name='bell' size="lg" /></div>
                    </div>
                    <div className="notifications-menu">
                        {/* <ul>
                            <li>Suck it</li>
                        </ul> */}

                    </div>
                </div>
                <button className="trigger" onClick={toggleRightSideNav}>
                    <FontAwesome name='ellipsis-h' size="lg" />
                </button>
                <div className="right-side-menu">
                    <button onClick={toggleRightSideNav}>X</button>
                    {/* <li><a href="">Test</a></li> */}
                </div>


            </div>
        );
    }
}