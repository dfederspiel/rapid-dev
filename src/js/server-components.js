/**
 * This is used to expose components for server side rendering
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

import TopNav from '../components/TopNav/top-nav';
import LeftSideNav from '../components/LeftSideNav/left-side-nav';

global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;

global.TopNav = TopNav;
global.SideNav = LeftSideNav;