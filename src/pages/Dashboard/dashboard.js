import React from 'react';
import DiscoverTiles from "../../components/DiscoverTiles/discover-tiles";
import CreditUnionDashboard from "../../components/CreditUnionDashboard/credit-union-dashboard";
import AccountBalances from "../../components/AccountBalances/account-balances";

const creditUnionDashboardProps = {
    pendingTransactions: 607,
    pendingTemplates: 45,
    pendingAcknowledgements: 13
};

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="dashboard-container">
                <div className="carousel-col">
                    <label>Discover Premier View</label>
                    <DiscoverTiles />
                </div>
                <div className="flex-wrap-row">
                    <div className="flex-wrap-column">
                        <label>Account Balances</label>
                        <AccountBalances />
                    </div>
                    <div className="flex-wrap-column">
                        <div className="flex-col">
                            <label>Credit Union Dashboard</label>
                            <CreditUnionDashboard
                                {...creditUnionDashboardProps}
                            />
                        </div>
                        <div className="flex-col">
                            <label>Learn more about Premier View</label>
                            <div className="dashboard-card">auris pellentesque, leo quis fermentum porttitor, sem nunc vehicula odio, at convallis enim metus quis mauris. Aenean augue lectus, rutrum ut ipsum sed, dignissim venenatis urna. Praesent ut dui nec lorem lobortis accumsan. Donec ornare mauris sit amet magna posuere, eu pharetra nisi cursus. Vivamus sit amet convallis velit. Quisque quis ullamcorper dui. Nunc tempus sodales purus, at dapibus ex ullamcorper vitae. Maecenas pellentesque maximus mollis.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

