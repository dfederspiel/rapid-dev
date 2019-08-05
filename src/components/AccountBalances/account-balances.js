//https://github.com/reactjs/react-tabs

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactDataTable from "../Grid/react-data-table";
import DropDownButton from "../DropDownButton/drop-down-button";

const dropDownProps = {
    buttonTitle: "Transfer",
    items: [{
        url: '',
        title: 'Share-to-Share'
    },
    {
        url: '',
        title: 'Share-to-Loan'
    },
    {
        url: '',
        title: 'Loan-to-Share'
    }]
};

const gridColumns = [
    {
        cell: row => !row.isTotal ? <DropDownButton {...dropDownProps} /> : '',
        ignoreRowClick: true,
        allowOverflow: true
    },
    {
        name: 'Account Description',
        selector: 'name',
        sortable: true
    },
    {
        name: 'Balance',
        selector: 'balance',
        sortable: true
    }];

var shareProps = {
    data: [{ name: 'Test Account', balance: '$3,000.55' },
        { name: 'Test Account 2', balance: '$30,000.55' },
        { name: 'Test Account 3', balance: '$15,000.55' },
        { name: 'Test Account 4', balance: '$3,045.55' },
        { name: 'Test Account 5', balance: '$6,000.55' },
        { name: 'Test Account 6', balance: '$2,340.55' },
        { name: 'Test Account 7', balance: '$3,230.55' },
        { name: '', balance: '$17,512,654.55', isTotal: true }],
    columns: gridColumns,
    pagination: false
};

var loanProps = {
    data: [{ name: 'Test Loan Account', balance: '$3,000.55' },
    { name: 'Test Loan Account 2', balance: '$30,000.55' },
    { name: 'Test Loan Account 3', balance: '$15,000.55' },
    { name: 'Test Loan Account 4', balance: '$3,045.55' },
    { name: 'Test Loan Account 5', balance: '$6,000.55' },
    { name: 'Test Loan Account 6', balance: '$2,340.55' },
    { name: 'Test Loan Account 7', balance: '$3,230.55' },
        { name: '', balance: '$17,512,654.55', isTotal: true }],
    columns: gridColumns,
    pagination: false
};

var certProps = {
    data: [{ name: 'Test Cert Account', balance: '$3,000.55' },
    { name: 'Test Cert Account 2', balance: '$30,000.55' },
    { name: 'Test Cert Account 3', balance: '$15,000.55' },
    { name: 'Test Cert Account 4', balance: '$3,045.55' },
    { name: 'Test Cert Account 5', balance: '$6,000.55' },
    { name: 'Test Cert Account 6', balance: '$2,340.55' },
    { name: 'Test Cert Account 7', balance: '$3,230.55' },
        { name: '', balance: '$17,512,654.55', isTotal: true }],
    columns: gridColumns,
    pagination: false
};

export default class AccountBalances extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="account-balances">
                <Tabs>
                    <TabList>
                        <Tab>Shares</Tab>
                        <Tab>Loans</Tab>
                        <Tab>Certificates</Tab>
                    </TabList>

                    <TabPanel>
                        <ReactDataTable
                            {...shareProps}
                        />
                    </TabPanel>
                    <TabPanel>
                        <ReactDataTable
                            {...loanProps}
                        />
                    </TabPanel>
                    <TabPanel>
                        <ReactDataTable
                            {...certProps}
                        />
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}

