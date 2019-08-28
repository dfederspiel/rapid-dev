//https://github.com/seal789ie/react-owl-carousel

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';
import Icon from '../Icon/icon';

export default class DiscoverTiles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                margin:30,
                responsive: {
                    0: {
                        items: 1,
                    },
                    500: {
                        items: 2,
                    },
                    998: {
                        items: 3,
                    },
                }
            }
        }

    }

    render() {
        return (
            <OwlCarousel className="owl-theme" {...this.state.options}>
                <Link to="/discover/transactions">
                    <div className="tile transaction">
                        <div className="title">Transactions</div>
                        <Icon name="desktop" />
                    </div>
                </Link>
                <Link to="/discover/liquidity">
                    <div className="tile liquidity">
                        <div className="title">Liquidity</div>
                        <Icon name="money-bill-alt" />
                    </div>
                </Link>
                <Link to="/discover/investments">
                    <div className="tile investments">
                        <div className="title">Investments</div>
                        <Icon name="chart-pie" />
                    </div>
                </Link>
            </OwlCarousel>
        );
    }
}

