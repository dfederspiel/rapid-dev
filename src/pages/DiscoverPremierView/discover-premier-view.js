//https://reactstrap.github.io/components/progress/

import React from 'react';
import { Column, Row } from "simple-flexbox";
import { Progress } from 'reactstrap';
import { Link } from 'react-router-dom';

const transactionProps = [{
    title: 'Cash Management Accounts',
    imageClass: 'far fa-image',
    servicesAvailable: 5,
    servicesUsed: 3
},
{
    title: 'Coin & Currency Services',
    imageClass: 'far fa-image',
    servicesAvailable: 2,
    servicesUsed: 2
},
{
    title: 'Domestic Wires',
    imageClass: 'far fa-image',
    servicesAvailable: 1,
    servicesUsed: 1
},
{
    title: 'International Wires',
    imageClass: 'far fa-image',
    servicesAvailable: 1,
    servicesUsed: 1
},
{
    title: 'ACH Receipt',
    imageClass: 'far fa-image',
    servicesAvailable: 4,
    servicesUsed: 3
},
{
    title: 'ACH Origination',
    imageClass: 'far fa-image',
    servicesAvailable: 3,
    servicesUsed: 1
},
{
    title: 'Check Deposit Services',
    imageClass: 'far fa-image',
    servicesAvailable: 9,
    servicesUsed: 4
},
{
    title: 'Other Funds Transfers',
    imageClass: 'far fa-image',
    servicesAvailable: 2,
    servicesUsed: 0
},
{
    title: 'Share Draft Services',
    imageClass: 'far fa-image',
    servicesAvailable: 6,
    servicesUsed: 2
}];

var isTransaction = false;
var isLiquidity = false;
var isInvestments = false;

export default class DiscoverPremierView extends React.Component {
    constructor(props) {
        super(props);
        isTransaction = props.match.params.serviceType === 'transactions';
        isLiquidity = props.match.params.serviceType === 'liquidity';
        isInvestments = props.match.params.serviceType === 'investments';
    }

    render() {
        return (
            <Column flexGrow={1} className="discover-premier-view">
                <label>Discover Premier View</label>
                {isTransaction &&
                    <h1>Transactions</h1>
                }
                {isLiquidity &&
                    <h1>Liquidity</h1>
                }
                {isInvestments &&
                    <h1>Investments</h1>
                }
                <hr />
                <div className="discover-tiles">
                    <div className="discover-tile-row">
                        <div className="tile-card">
                            <div className="transaction-card">
                                <Link to="/discover/transactions">
                                    <Row className="transaction-row">
                                        <div className={!isTransaction ? 'disabled-text' : ''}>Transactions</div>
                                        {isTransaction &&
                                            <i className="fas fa-desktop" />
                                        }
                                    </Row>
                                </Link>
                            </div>
                        </div>
                        <div className="tile-card">
                            <div className="liquidity-card">
                                <Link to="/discover/liquidity">
                                    <Row className="transaction-row">
                                        <div className={!isLiquidity ? 'disabled-text' : ''}>Liquidity</div>
                                        {isLiquidity &&
                                            <i className="fas fa-money-bill-alt" />
                                        }
                                    </Row>
                                </Link>
                            </div>
                        </div>
                        <div className="tile-card">
                            <div className="investments-card">
                                <Link to="/discover/investments">
                                    <Row className="transaction-row">
                                        <div className={!isInvestments ? 'disabled-text' : ''}>Investments</div>
                                        {isInvestments &&
                                            <i className="fas fa-chart-pie" />
                                        }
                                    </Row>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Row className="service-card-row" wrap>
                    {
                        transactionProps.map(function (item, index) {
                            return (<Column className="service-card-container" justifyContent="space-between" key={index}>
                                <div className="service-card">
                                    <Row justifyContent="space-between">
                                        <Column>
                                            <i className={item.imageClass} />
                                            <span>{item.title}</span>
                                        </Column>
                                        <Column>
                                            <div className="service-usage">{item.servicesUsed}/{item.servicesAvailable}</div>
                                        </Column>
                                    </Row>
                                    <Progress value={(item.servicesUsed / item.servicesAvailable) * 100} />
                                </div></Column>);
                        })
                    }
                </Row>
            </Column>
        );
    }
}

