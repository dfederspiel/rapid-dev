import React from 'react';
import { Column, Row } from "simple-flexbox";
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
            <Column flexGrow={1} justifyContent="space-between" className="dashboard-container">
                <Row flexGrow={1}>
                    <Column flexGrow={1} className="carousel-col">
                        <label>Discover Premier View</label>
                        <DiscoverTiles />
                    </Column>
                </Row>
                <Row className="flex-wrap-row" justifyContent="space-between" wrap flexGrow={2}>
                    <Column flexGrow={1} className="flex-wrap-column">
                        <label>Account Balances</label>
                        <AccountBalances />
                    </Column>
                    <Column flexGrow={1} className="flex-wrap-column">
                        <Column>
                            <label>Credit Union Dashboard</label>
                            <CreditUnionDashboard
                                {...creditUnionDashboardProps}
                            />
                        </Column>
                        <Column>
                            <label>Learn more about Premier View</label>
                            <div className="dashboard-card">auris pellentesque, leo quis fermentum porttitor, sem nunc vehicula odio, at convallis enim metus quis mauris. Aenean augue lectus, rutrum ut ipsum sed, dignissim venenatis urna. Praesent ut dui nec lorem lobortis accumsan. Donec ornare mauris sit amet magna posuere, eu pharetra nisi cursus. Vivamus sit amet convallis velit. Quisque quis ullamcorper dui. Nunc tempus sodales purus, at dapibus ex ullamcorper vitae. Maecenas pellentesque maximus mollis.
                            </div>
                        </Column>
                    </Column>
                </Row>
                <Row className="flex-wrap-row" flexGrow={1} wrap>
                    <Column flexGrow={1} className="flex-wrap-column">
                        <label>Feature 1</label>
                        <div className="dashboard-card">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu velit nunc. Etiam in orci convallis, congue sem vitae, luctus tortor. Suspendisse massa arcu, aliquam sit amet posuere sit amet, vulputate sit amet dolor. Maecenas porta lacinia aliquet. Vivamus ullamcorper eros ac mauris molestie congue. Pellentesque tempor diam et orci efficitur lobortis. Quisque ultricies interdum consectetur. Nullam ac efficitur mauris. Aliquam ullamcorper id felis at imperdiet. Curabitur id orci vel ligula finibus tincidunt.
                        </div>
                    </Column>
                    <Column flexGrow={2} className="flex-wrap-column">
                        <label>Feature 2</label>
                        <div className="dashboard-card">Integer ante arcu, vulputate nec tristique sed, feugiat commodo mi. Donec et ullamcorper erat. Donec eu lacus eu dui accumsan ultricies. Nulla facilisi. Mauris sodales pulvinar purus, vel finibus elit ultricies sit amet. Vestibulum ut nulla tortor. Sed vitae ex lobortis, volutpat nunc nec, malesuada justo. Ut rhoncus arcu non risus hendrerit porttitor. Ut fringilla lacus diam, et lobortis tellus cursus in. Donec imperdiet malesuada nulla, scelerisque molestie est malesuada eget. Sed sed euismod magna. Morbi porta eleifend augue, et porttitor metus scelerisque cursus.
                        </div>
                    </Column>
                </Row>
            </Column>
        );
    }
}

