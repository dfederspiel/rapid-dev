import React from 'react';
import SideNav from '../side-nav';
import { shallow } from 'enzyme';
import Api from '../../../services/Api';
import { promise, rejected, resolved } from '../../../tests-setup';

describe('The side navigation component', () => {
    let _component, _link;
    let spy = () => { return spyOn(Api, "fetch") };

    beforeEach(() => {
        _component = shallow(<SideNav />, true);
    });

    describe("containing the Home Overview link", () => {
        beforeEach(() => {
            _link = _component.find(".home-link");
        });

        it("has a href", () => {
            expect(_link.props().href).toEqual("/")
        });

        it("has an icon", () => {
            expect(_link.find("FontAwesome").props().name).toEqual("home")
        });
    });

    describe("containing Transaction link", () => {
        beforeEach(() => {
            _link = _component.find(".transaction-link");
        });

        // it("has a href", () => {
        //     expect(_link.props().href).toEqual("/transaction")
        // });

        it("has an icon", () => {
            expect(_link.find("FontAwesome").props().name).toEqual("laptop")
        });
    });

    describe("containing Liquidity link", () => {
        beforeEach(() => {
            _link = _component.find(".liquidity-link");
        });

        it("has a href", () => {
            expect(_link.props().href).toEqual("/liquidity")
        });

        it("has an icon", () => {
            expect(_link.find("FontAwesome").props().name).toEqual("money-bill-alt")
        });
    });

    describe("containing Investments link", () => {
        beforeEach(() => {
            _link = _component.find(".investments-link");
        });

        it("has a href", () => {
            expect(_link.props().href).toEqual("/investments")
        });

        it("has an icon", () => {
            expect(_link.find("FontAwesome").props().name).toEqual("chart-pie")
        });
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
                    expect(_component.state().links).toEqual(mockLinks());
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