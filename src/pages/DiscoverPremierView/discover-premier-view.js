//https://reactstrap.github.io/components/progress/

import React from 'react';
import { Progress, Collapse } from 'reactstrap';

const fetchServices = (url, callback) => {
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        callback(data);
    });
};

//const transactionProps = [{
//    title: 'Cash Management Accounts',
//    imageClass: 'far fa-image',
//    servicesAvailable: 5,
//    servicesUsed: 3
//},
//{
//    title: 'Coin & Currency Services',
//    imageClass: 'far fa-image',
//    servicesAvailable: 2,
//    servicesUsed: 2
//},
//{
//    title: 'Domestic Wires',
//    imageClass: 'far fa-image',
//    servicesAvailable: 1,
//    servicesUsed: 1
//},
//{
//    title: 'International Wires',
//    imageClass: 'far fa-image',
//    servicesAvailable: 1,
//    servicesUsed: 1
//},
//{
//    title: 'ACH Receipt',
//    imageClass: 'far fa-image',
//    servicesAvailable: 4,
//    servicesUsed: 3
//},
//{
//    title: 'ACH Origination',
//    imageClass: 'far fa-image',
//    servicesAvailable: 3,
//    servicesUsed: 1
//},
//{
//    title: 'Check Deposit Services',
//    imageClass: 'far fa-image',
//    servicesAvailable: 9,
//    servicesUsed: 4
//},
//{
//    title: 'Other Funds Transfers',
//    imageClass: 'far fa-image',
//    servicesAvailable: 2,
//    servicesUsed: 0
//},
//{
//    title: 'Share Draft Services',
//    imageClass: 'far fa-image',
//    servicesAvailable: 6,
//    servicesUsed: 2
//}];

//const serviceDetailsProps = [{
//    title: 'TanzCapture Branch Capture',
//    description: 'Aut dolores fuga tenetur. Tempore minima ut maxime quis. Molestiae laudantium distinctio sed voluptas est. Repellat molestiae amet laboriosam vitae in consequatur quibusdam cumque et. Molestiae sed et dolores dolores soluta et perferendis. Ut dignissimos rerum. Autem sunt recusandae quia dolor sunt maxime id. Fugit aliquam sint.',
//    subscribed: false
//},
//{
//    title: 'TanzCapture Business Capture',
//    description: 'Aut dolores fuga tenetur. Tempore minima ut maxime quis. Molestiae laudantium distinctio sed voluptas est. Repellat molestiae amet laboriosam vitae in consequatur quibusdam cumque et. Molestiae sed et dolores dolores soluta et perferendis. Ut dignissimos rerum. Autem sunt recusandae quia dolor sunt maxime id. Fugit aliquam sint.',
//    subscribed: false
//},
//{
//    title: 'TanzCapture Mobile Capture',
//    description: 'Aut dolores fuga tenetur. Tempore minima ut maxime quis. Molestiae laudantium distinctio sed voluptas est. Repellat molestiae amet laboriosam vitae in consequatur quibusdam cumque et. Molestiae sed et dolores dolores soluta et perferendis. Ut dignissimos rerum. Autem sunt recusandae quia dolor sunt maxime id. Fugit aliquam sint.',
//    subscribed: false
//},
//{
//    title: 'TanzCapture ATM',
//    description: 'Aut dolores fuga tenetur. Tempore minima ut maxime quis. Molestiae laudantium distinctio sed voluptas est. Repellat molestiae amet laboriosam vitae in consequatur quibusdam cumque et. Molestiae sed et dolores dolores soluta et perferendis. Ut dignissimos rerum. Autem sunt recusandae quia dolor sunt maxime id. Fugit aliquam sint.',
//    subscribed: false
//},
//{
//    title: 'TanzCapture ITM',
//    description: 'Aut dolores fuga tenetur. Tempore minima ut maxime quis. Molestiae laudantium distinctio sed voluptas est. Repellat molestiae amet laboriosam vitae in consequatur quibusdam cumque et. Molestiae sed et dolores dolores soluta et perferendis. Ut dignissimos rerum. Autem sunt recusandae quia dolor sunt maxime id. Fugit aliquam sint.',
//    subscribed: false
//},
//{
//    title: 'Image Clear',
//    description: 'Aut dolores fuga tenetur. Tempore minima ut maxime quis. Molestiae laudantium distinctio sed voluptas est. Repellat molestiae amet laboriosam vitae in consequatur quibusdam cumque et. Molestiae sed et dolores dolores soluta et perferendis. Ut dignissimos rerum. Autem sunt recusandae quia dolor sunt maxime id. Fugit aliquam sint.',
//    subscribed: true
//},
//{
//    title: 'Deposit Return Processing',
//    description: 'Aut dolores fuga tenetur. Tempore minima ut maxime quis. Molestiae laudantium distinctio sed voluptas est. Repellat molestiae amet laboriosam vitae in consequatur quibusdam cumque et. Molestiae sed et dolores dolores soluta et perferendis. Ut dignissimos rerum. Autem sunt recusandae quia dolor sunt maxime id. Fugit aliquam sint.',
//    subscribed: true
//},
//{
//    title: 'Deposit Fraud Protection',
//    description: 'Aut dolores fuga tenetur. Tempore minima ut maxime quis. Molestiae laudantium distinctio sed voluptas est. Repellat molestiae amet laboriosam vitae in consequatur quibusdam cumque et. Molestiae sed et dolores dolores soluta et perferendis. Ut dignissimos rerum. Autem sunt recusandae quia dolor sunt maxime id. Fugit aliquam sint.',
//    subscribed: true
//},
//{
//    title: 'Foreign Item Deposit',
//    description: 'Aut dolores fuga tenetur. Tempore minima ut maxime quis. Molestiae laudantium distinctio sed voluptas est. Repellat molestiae amet laboriosam vitae in consequatur quibusdam cumque et. Molestiae sed et dolores dolores soluta et perferendis. Ut dignissimos rerum. Autem sunt recusandae quia dolor sunt maxime id. Fugit aliquam sint.',
//    subscribed: true
//}];

export default class DiscoverPremierView extends React.Component {
    constructor(props) {
        super(props);
        this.switchTiles = this.switchTiles.bind(this);
        this.triggerServiceDetails = this.triggerServiceDetails.bind(this);
        this.triggerServiceCategoryDetails = this.triggerServiceCategoryDetails.bind(this);

        this.state = {
            serviceDetailsOpen: false,
            services: [],
            selectedService: -1,
            serviceCategories: [],
            selectedCategory: -1,
            isTransaction: props.match.params.serviceType === 'transactions',
            isLiquidity: props.match.params.serviceType === 'liquidity',
            isInvestments: props.match.params.serviceType === 'investments'
        };
    }

    componentDidMount() {
        fetchServices('/api/serviceCategories', (data) => {
            this.setState({ serviceCategories: data });
        });
    }

    switchTiles(serviceType) {
        this.setState(() => {
            return {
                isTransaction: serviceType === 'transactions'
            };
        });
        this.setState(() => {
            return {
                isLiquidity: serviceType === 'liquidity'
            };
        });
        this.setState(() => {
            return {
                isInvestments: serviceType === 'investments'
            };
        });
    }

    triggerServiceCategoryDetails(index) {
        if (index === this.state.selectedCategory || index === -1) {
            this.setState({ serviceDetailsOpen: false });
            index = -1;
        }
        else {
            fetchServices('/api/services', (data) => {
                this.setState({ serviceDetailsOpen: true });
                this.setState({ services: data });
            });
        }
        this.setState({ selectedCategory: index });
        this.setState({ selectedService: -1 });
    }

    triggerServiceDetails(index) {
        this.setState({ selectedService: index });
    }

    render() {
        return (
            <div className="discover-premier-view">
                <label>Discover Premier View</label>
                {this.state.isTransaction &&
                    <h1>Transactions</h1>
                }
                {this.state.isLiquidity &&
                    <h1>Liquidity</h1>
                }
                {this.state.isInvestments &&
                    <h1>Investments</h1>
                }
                <hr />
                <div className="discover-tiles">
                    <div className="discover-tile-row">
                        <div className="tile-card">
                            <a href="javascript:void(0)" onClick={() => { this.switchTiles('transactions'); }}>
                                <div className="transaction-card">
                                    <div className="transaction-row">
                                        <div className={!this.state.isTransaction ? 'disabled-text' : ''}>Transactions</div>
                                        {this.state.isTransaction &&
                                            <i className="fas fa-desktop" />
                                        }
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="tile-card">
                            <a href="javascript:void(0)" onClick={() => { this.switchTiles('liquidity'); }}>
                                <div className="liquidity-card">
                                    <div className="transaction-row">
                                        <div className={!this.state.isLiquidity ? 'disabled-text' : ''}>Liquidity</div>
                                        {this.state.isLiquidity &&
                                            <i className="fas fa-money-bill-alt" />
                                        }
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="tile-card">
                            <a href="javascript:void(0)" onClick={() => { this.switchTiles('investments'); }}>
                                <div className="investments-card">
                                    <div className="transaction-row">
                                        <div className={!this.state.isInvestments ? 'disabled-text' : ''}>Investments</div>
                                        {this.state.isInvestments &&
                                            <i className="fas fa-chart-pie" />
                                        }
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="service-card-row">
                    {
                        this.state.serviceCategories.map((item, index) => {
                            return (<><div className="service-card-container" key={index}>
                                <a href="javascript:void(0)" onClick={() => { this.triggerServiceCategoryDetails(index); }}>
                                    <div className={index === this.state.selectedCategory ? 'selected-service-card' : this.state.selectedCategory === -1 ? 'service-card' : 'unselected-service-card'}>
                                        <div className="service-card-top">
                                            <div>
                                                <i className={item.imageClass} />
                                                <span>{item.title}</span>
                                            </div>
                                            <div>
                                                <div className="service-usage">{item.servicesUsed}/{item.servicesAvailable}</div>
                                            </div>
                                        </div>
                                        <Progress value={(item.servicesUsed / item.servicesAvailable) * 100} />
                                    </div>
                                </a>
                            </div>
                                {index === this.state.selectedCategory &&
                                    <div className="service-details">
                                        <Collapse isOpen={this.state.serviceDetailsOpen}>
                                            <div className="service-detail-col">
                                                <div className="service-detail-header">
                                                    <i className={this.state.selectedCategory > -1 ? this.state.serviceCategories[this.state.selectedCategory].imageClass : ''} />
                                                    <h1>{this.state.selectedCategory > -1 ? this.state.serviceCategories[this.state.selectedCategory].title : ''}</h1>
                                                    <a href="javascript:void(0)" onClick={() => { this.triggerServiceCategoryDetails(-1); }}>CLOSE <i className="far fa-times-circle" /></a>
                                                </div>
                                                <div className="flex-row">
                                                    <div className="service-titles">
                                                        {
                                                            this.state.services.map((item, index) => {
                                                                return (<><div key={index} className="service-title-container">
                                                                    <a href="javascript:void(0)" onClick={() => { this.triggerServiceDetails(index); }}>
                                                                        <div className={this.state.selectedService == index ? "service-title-selected" : "service-title"}>
                                                                            {item.subscribed &&
                                                                                <><i className="fas fa-check" /><span> </span></>
                                                                            }
                                                                            {item.title}
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                    {this.state.selectedService == index &&
                                                                        <div className="service-title-description-mobile">
                                                                            <div className="service-description">{item.description}</div>
                                                                            <div className="description-footer">
                                                                                <input type="button" value="Learn More" />
                                                                                {item.subscribed &&
                                                                                    <span><i className="fas fa-check" /> You own this service</span>
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    }</>
                                                            );
                                                        })
                                                    }
                                                    </div>
                                                    <div className="service-title-description">
                                                        <div className="service-description">{this.state.selectedService > -1 ? this.state.services[this.state.selectedService].description : ''}</div>
                                                        <div className="description-footer">
                                                            {this.state.selectedService > -1 &&
                                                                <input type="button" value="Learn More" />
                                                            }
                                                            {this.state.selectedService > -1 && this.state.services[this.state.selectedService].subscribed &&
                                                                <span><i className="fas fa-check" /> You own this service</span>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                            </div>
                                        </Collapse>
                                    </div>
                                }</>);
                        })
                    }
                </div>
            </div>
        );
    }
}

