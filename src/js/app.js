import Services from './services';

import $ from 'jquery';
window.$ = $;

//require('expose-loader');

import React from 'react';
import ReactDOM from 'react-dom';

import AlloyaReactApp from '../alloya-react-app';

import ReactDataTable from '../components/Grid/react-data-table';
import TabStrip from '../components/TabStrip/tab-strip';
import Address from '../components/Address/address';
import ReactDatePicker from '../components/DatePicker/date-picker';

// Render global react components here
import TopNav from '../components/TopNav/top-nav';
import LeftSideNav from '../components/LeftSideNav/left-side-nav';

//const Components = require("expose-loader?Components!{}");
window.Components = require('./component-index.js');

renderReactComponents();
var appState = Services.getAppState();

// expose variable to window object for client side access
window.appState = appState;

// Get instances of react components so that we can access state and setState props/methods
var topNav = tryRenderReactComponent(TopNav, { menuClicked: handleTopNavClick, notificationCount: 8 }, 'react-top-nav');
var sideNav = tryRenderReactComponent(LeftSideNav, { expanded: appState.sideNav.expanded }, 'react-side-nav');
window['showGrid'] = showGrid;

function showGrid(id) {
    $('.sub-grid').hide();
    $(id).show();
}



function renderReactComponents() {
    tryRenderReactComponent(AlloyaReactApp, {}, 'react-app');
    tryRenderReactComponent(ReactDataTable, createDemoGridProps(), 'react-data-table');
    tryRenderReactComponent(ReactDataTable, createDemoUserProps(), 'react-user-data-table');
    tryRenderReactComponent(TabStrip, createDemoTabProps(), 'react-tab-strip');
    tryRenderReactComponent(ReactDataTable, createDemoDashboardProps(), 'react-dashboard-grid');
    tryRenderReactComponent(Address, createDemoAddressProps(), 'react-address-component');
    tryRenderReactComponent(ReactDatePicker, {}, 'react-date-picker');
}

function handleTopNavClick() {
    // Here we would also hook to the local storage object, or at least persist the value for page refreshes
    sideNav.setState({ expanded: !sideNav.state.expanded });
}

function tryRenderReactComponent(component, props, elementId) {
    var element = document.getElementById(elementId);
    if (element)
        return ReactDOM.render(React.createElement(component, props), element);
}

function createDemoGridProps() {
    return {
        data: [
            { action: '', orgName: 'Catholic & Community CU', rtn: '281076277', changeType: 'Add Organization Authorizations', requestingUser: 'Haiping Yu', requestDate: '4/15/2019 1:08:23 PM' },
            { action: '', orgName: 'One CBI FCU', rtn: '271987130', changeType: 'Add Organization Authorizations', requestingUser: 'Haiping Yu', requestDate: '4/15/2019 1:21:29 PM' }
        ],
        columns: [
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
}

function createDemoUserProps() {
    return {
        data: [
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' },
            { selected: false, action: '', firstName: 'Test', lastName: 'User', loginName: 'tuser', emailAddress: 'tuser@alloyacorp.org' }
        ],
        columns: [
            {
                name: '',
                selector: 'selected',
                cell: row => <input type="checkbox" />
            },
            {
                name: 'Action',
                selector: 'action',
                cell: row => <input type="button" value="Edit" />
            },
            {
                name: 'First Name',
                selector: 'firstName',
                sortable: true
            },
            {
                name: 'Last Name',
                selector: 'lastName',
                sortable: true
            },
            {
                name: 'Login Name',
                selector: 'loginName',
                sortable: true
            },
            {
                name: 'Email Address',
                selector: 'emailAddress',
                sortable: true
            }
        ]
    };
}

function createDemoTabProps() {
    return {
        tabs: [
            {
                title: 'Name',
                url: 'http://localhost:45122/Admin/Org/Update/Name.aspx',
                isActive: true
            },
            {
                title: 'Address',
                url: 'http://localhost:45122/Admin/Org/Update/Address.aspx',
                isActive: false
            },
            {
                title: 'Phone',
                url: 'http://localhost:45122/Admin/Org/Update/Address.aspx',
                isActive: false
            },
            {
                title: 'Notes',
                url: 'http://localhost:45122/Admin/Org/Update/Address.aspx',
                isActive: false
            },
            {
                title: 'Branches',
                url: 'http://localhost:45122/Admin/Org/Update/Address.aspx',
                isActive: false
            },
            {
                title: 'Users',
                url: 'http://localhost:45122/Admin/Org/Update/Address.aspx',
                isActive: false
            },
            {
                title: 'Authorizations',
                url: 'http://localhost:45122/Admin/Org/Update/Address.aspx',
                isActive: false
            },
            {
                title: 'Executives',
                url: 'http://localhost:45122/Admin/Org/Update/Address.aspx',
                isActive: false
            },
            {
                title: 'Success Team',
                url: 'http://localhost:45122/Admin/Org/Update/Address.aspx',
                isActive: false
            },
            {
                title: 'IP Lockdown',
                url: 'http://localhost:45122/Admin/Org/Update/Address.aspx',
                isActive: false
            }]
    };
}

function createDemoDashboardProps() {
    return {
        data: [
            { category: 'Cash Concentration Transfer', corpReview: 38, failed: null, ofacReview: null, pendingCallback: 10, reject: null }
        ],
        columns: [
            {
                name: '',
                selector: 'category',
                cell: row => <span className="dashboard-category">{row.category}</span>
            },
            {
                name: 'Corporate Review',
                selector: 'corpReview',
                ignoreRowClick: true,
                cell: row => row.corpReview ? <a href="javascript:showGrid('#react-wire-out-corp-review')">{row.corpReview}</a> : 'N/A'
            },
            {
                name: 'Failed',
                selector: 'failed',
                ignoreRowClick: true,
                cell: row => row.failed ? <a href="javascript:showGrid('#react-wire-out-corp-review')">{row.failed}</a> : 'N/A'
            },
            {
                name: 'OFAC Review',
                selector: 'ofacReview',
                ignoreRowClick: true,
                cell: row => row.ofacReview ? <a href="javascript:showGrid('#react-wire-out-corp-review')">{row.ofacReview}</a> : 'N/A'
            },
            {
                name: 'Pending Callback',
                selector: 'pendingCallback',
                ignoreRowClick: true,
                cell: row => row.pendingCallback ? <a href="javascript:showGrid('#react-wire-out-corp-review')">{row.pendingCallback}</a> : 'N/A'
            },
            {
                name: 'Pending Reject',
                selector: 'reject',
                ignoreRowClick: true,
                cell: row => row.reject ? <a href="javascript:showGrid('#react-wire-out-corp-review')">{row.reject}</a> : 'N/A'
            }
        ]
    };
}

function createDemoAddressProps() {
    return {
        type: 2,
        address1: '100 N Main',
        address2: 'PO Box 123',
        address3: 'Apt 999',
        city: 'Lima',
        state: 'OH',
        zip: '45801',
        zip4: '1234'
    };
}