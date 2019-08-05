//https://github.com/seal789ie/react-owl-carousel

import React from 'react';
import { Row } from "simple-flexbox";
import OwlCarousel from 'react-owl-carousel';
import {Link} from 'react-router-dom';

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
                <div className="transaction-card">
                    <Link to="/discover/transactions">
                        <Row className="transaction-row">
                            <div>Transactions</div>
                            <i className="fas fa-desktop" />
                        </Row>
                    </Link>
                </div>
                <div className="liquidity-card">
                    <Link to="/discover/liquidity">
                        <Row className="transaction-row">
                            <div>Liquidity</div>
                            <i className="fas fa-money-bill-alt" />
                        </Row>
                    </Link>
                </div>
                <div className="investments-card">
                    <Link to="/discover/investments">
                        <Row className="transaction-row">
                            <div>Investments</div>
                            <i className="fas fa-chart-pie" />
                        </Row>
                    </Link>
                </div>
            </OwlCarousel>
        );
    }
}

