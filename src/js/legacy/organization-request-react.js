import $ from 'jquery';
window.$ = $;

import React from 'react';
import ReactDOM from 'react-dom';

import ReactDataTable from '../../components/Grid/React-Data-Table/react-data-table';

const props = {
    data =[
        { action: '', orgName: 'Catholic & Community CU', rtn: '281076277', changeType: 'Add Organization Authorizations', requestingUser: 'Haiping Yu', requestDate: '4/15/2019 1:08:23 PM' },
        { action: '', orgName: 'One CBI FCU', rtn: '271987130', changeType: 'Add Organization Authorizations', requestingUser: 'Haiping Yu', requestDate: '4/15/2019 1:21:29 PM' }
    ],
    columns =[
        {
            name: 'Action',
            selector: 'action',
            cell: row => <input type="button" value="View" />,
            maxWidth: '20px'
        },
        {
            name: 'Organization Name',
            selector: 'orgName',
            sortable: true
        },
        {
            name: 'RTN',
            selector: 'rtn',
            sortable: true,
            maxWidth: '20px'
        },
        {
            name: 'Change Type',
            selector: 'changeType',
            sortable: true
        },
        {
            name: 'Requesting User',
            selector: 'requestingUser',
            sortable: true
        },
        {
            name: 'Date of Request',
            selector: 'requestDate',
            sortable: true
        }
    ]
};

ReactDOM.render(React.createElement(ReactDataTable, props), document.getElementById('react-data-table'));