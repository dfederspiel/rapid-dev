//https://github.com/seal789ie/react-owl-carousel

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { Link } from 'react-router-dom';

export default class DiscoverTiles extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <OwlCarousel
                className="owl-theme"
                margin={30}
                autoWidth
            >
                <Link to="/discover/transactions">
                    <div className="transaction-card">
                        <div className="transaction-row">
                            <div>Transactions</div>
                            <i className="fas fa-desktop" />
                        </div>
                    </div>
                </Link>
                <Link to="/discover/liquidity">
                    <div className="liquidity-card">
                        <div className="transaction-row">
                            <div>Liquidity</div>
                            <i className="fas fa-money-bill-alt" />
                        </div>
                    </div>
                </Link>
                <Link to="/discover/investments">
                    <div className="investments-card">
                        <div className="transaction-row">
                            <div>Investments</div>
                            <i className="fas fa-chart-pie" />
                        </div>
                    </div>
                </Link>
            </OwlCarousel>
        );
    }
}

