import React from 'react';
import { Row, Column } from "simple-flexbox";

export default class CreditUnionDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="credit-union-dashboard">
                <Row justifyContent="space-between">
                    <Column>
                        <label>Pending Transactions</label>
                        <a href="">{this.props.pendingTransactions}</a>
                    </Column>
                    <div className="vl"/>
                    <Column>
                        <label>Pending Acknowledgements</label>
                        <a href="">{this.props.pendingAcknowledgements}</a>
                    </Column>
                    <div className="vl" />
                    <Column>
                        <label>Pending Templates</label>
                        <a href="">{this.props.pendingTemplates}</a>
                    </Column>
                </Row>
            </div>
        );
    }
}

