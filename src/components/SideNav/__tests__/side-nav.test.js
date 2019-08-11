import React from 'react';
import SideNav from '../side-nav';
import { shallow } from 'enzyme';
import Api from '../../../services/Api';
import { transactionsLinks, liquidityLinks, investmentsLinks } from '../side-nav.links';
import { promise, rejected, resolved } from '../../../tests-setup';

describe('The side navigation component', () => {
    let _component;
    let _callback = () => { return };
    let spy = () => { return spyOn(Api, "fetch") };

    beforeEach(() => {
        _component = shallow(<SideNav openSideNav={_callback} />, true);
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
        expect(_props.openSideNav).toEqual(_callback);
        expect(_props.links).toEqual(transactionsLinks());
    });

     it("has a Liquidity navigation link with levels", () => {
        let _props = _component.find("NavLinkWithLevels").at(1).props();

        expect(_props.title).toEqual("Liquidity");
        expect(_props.icon).toEqual("money-bill-alt");
        expect(_props.openSideNav).toEqual(_callback);
        expect(_props.links).toEqual(liquidityLinks());
    });

    it("has a Investments navigation link with levels", () => {
        let _props = _component.find("NavLinkWithLevels").at(2).props();

        expect(_props.title).toEqual("Investments");
        expect(_props.icon).toEqual("chart-pie");
        expect(_props.openSideNav).toEqual(_callback);
        expect(_props.links).toEqual(investmentsLinks());
    });
    
    describe("when the component mounts", () => {
        it('calls the api to get FastTrack links', () => {
            spy().and.returnValue(promise());
            _component = shallow(<SideNav />);
            expect(Api.fetch).toHaveBeenCalledWith("/api/fasttrack");
        });

        describe("given the call returns", () => {
            describe("with a rejected response", () => {
                beforeEach(() => {
                    spy().and.returnValue(rejected());
                    _component = shallow(<SideNav />);
                });

                it("displays an error", () => {
                    expect(_component.find(".error").text()).toEqual("There was an error retrieving FastTrack.");
                });
            });

            describe("with no data", () => {
                beforeEach(() => {
                    spy().and.returnValue(resolved([]));
                    _component = shallow(<SideNav />);
                });

                it("displays a no data found message", () => {
                    expect(_component.find(".no-data-message").text()).toEqual("No FastTrack items found.");
                });
            });

            describe("with data", () => {
                beforeEach(() => {
                    spy().and.returnValue(resolved(mockLinks()));
                    _component = shallow(<SideNav />);
                });

                it("sets the FastTrack links state", () => {
                    expect(_component.state().fasttrackLinks).toEqual(mockLinks());
                });

                it("sets the href for each link", () => {
                    let _links = _component.find(".fasttrack a");
                    _links.map((item, index) =>
                        expect(item.props().href).toEqual(itemAtPosition(index).href))
                });

                it("sets the icon for each link", () => {
                    let _icons = _component.find(".fasttrack a .icon FontAwesome");
                    _icons.map((item, index) =>
                        expect(item.props().name).toEqual(itemAtPosition(index).icon))
                });

                it("sets the icon for each link", () => {
                    let _icons = _component.find(".fasttrack a .title");
                    _icons.map((item, index) =>
                        expect(item.text()).toEqual(itemAtPosition(index).title))
                });
            });
        });
    });

    function itemAtPosition(index) {
        return mockLinks()[index]
    }

    function mockLinks() {
        return [
            { icon: 'bell', href: '/this.html', title: 'Domestic Wire' },
            { icon: 'star', href: '/that.html', title: 'Credit Union Dashboard' },
            { icon: 'star', href: '/dani.html', title: 'Transaction Review' },
            { icon: 'star', href: '/edu.com.org', title: 'ACH' },
            { icon: 'star', href: '/l/lp', title: 'Coin & Currency Order' },
            { icon: 'star', href: '/3/df/43', title: 'International Wire' },
            { icon: 'star', href: '/90?this=that', title: 'Cash Management' }
        ]
    }
});