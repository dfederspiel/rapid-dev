import React from 'react';
import NavFastTrack from '../nav-fasttrack';
import { shallow } from 'enzyme';
import Api from '../../../services/Api';
import { promise, rejected, resolved } from '../../../tests-setup';

describe('The FastTrack Navigation component', () => {
    let _component;
    let spy = () => { return spyOn(Api, "fetch") };

    beforeEach(() => {
        _component = shallow(<NavFastTrack  />, true);
    });

    describe("when the component mounts", () => {
        it('calls the api to get FastTrack links', () => {
            spy().and.returnValue(promise());
            _component = shallow(<NavFastTrack />);
            expect(Api.fetch).toHaveBeenCalledWith("/api/fasttrack");
        });

        describe("given the call returns", () => {
            describe("with a rejected response", () => {
                beforeEach(() => {
                    spy().and.returnValue(rejected());
                    _component = shallow(<NavFastTrack />);
                });

                it("displays an error", () => {
                    expect(_component.find(".error").text()).toEqual("There was an error retrieving FastTrack.");
                });
            });

            describe("with no data", () => {
                beforeEach(() => {
                    spy().and.returnValue(resolved([]));
                    _component = shallow(<NavFastTrack />);
                });

                it("displays a no data found message", () => {
                    expect(_component.find(".no-data-message").text()).toEqual("No FastTrack items found.");
                });
            });

            describe("with data", () => {
                beforeEach(() => {
                    spy().and.returnValue(resolved(mockLinks()));
                    _component = shallow(<NavFastTrack />);
                });

                it("displays as a list of navigation links", () => {
                    let _links = _component.find("NavLink");

                    _links.map((item, index) =>
                        expect(item.props()).toEqual(itemAtPosition(index)))
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