import React from 'react';
import LeftSideNav from '../left-side-nav';
import { shallow } from 'enzyme';
import '../../../tests-setup';

import { transactionsLinks, liquidityLinks, investmentsLinks } from '../left-side-nav.links';

describe('The side navigation component', () => {
    let _component;
    let _callback = () => { return };

    beforeEach(() => {
        _component = shallow(<LeftSideNav openLeftSideNav={_callback} />, true);
    });

    it("has a Home Overview navigation link", () => {
        let _props = _component.find("NavLink").props();

        expect(_props.title).toEqual("Home Overview");
        expect(_props.href).toEqual("/");
        expect(_props.icon).toEqual("home");
    });

    it("has a Transactions navigation link with levels", () => {
        let _props = _component.find("NavLinkWithLevels").at(0).props();

        expect(_props.title).toEqual("Transactions");
        expect(_props.icon).toEqual("laptop");
        expect(_props.openLeftSideNav).toEqual(_callback);
        expect(_props.links).toEqual(transactionsLinks());
    });

     it("has a Liquidity navigation link with levels", () => {
        let _props = _component.find("NavLinkWithLevels").at(1).props();

        expect(_props.title).toEqual("Liquidity");
        expect(_props.icon).toEqual("money-bill-alt");
        expect(_props.openLeftSideNav).toEqual(_callback);
        expect(_props.links).toEqual(liquidityLinks());
    });

    it("has a Investments navigation link with levels", () => {
        let _props = _component.find("NavLinkWithLevels").at(2).props();

        expect(_props.title).toEqual("Investments");
        expect(_props.icon).toEqual("chart-pie");
        expect(_props.openLeftSideNav).toEqual(_callback);
        expect(_props.links).toEqual(investmentsLinks());
    });

    it("has a FastTrack navigation component", ()=>{
        expect(_component.find("NavFastTrack").length).toEqual(1);
    })
});