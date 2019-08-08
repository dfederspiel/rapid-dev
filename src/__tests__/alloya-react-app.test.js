import React from 'react';
import { shallow } from 'enzyme';
import { fakeWindowObjectProperty } from '../tests-setup';
import AlloyaReactApp from '../alloya-react-app';

describe("The Alloya app", () => {
    let _component;

    fakeWindowObjectProperty('innerWidth', 1200);

    beforeEach(() => {
        _component = shallow(<AlloyaReactApp />, true);
    });

    it("has a top navigation with a callback and notification count", () => {
        expect(_component.find("TopNav").props().toggleSideNav).toEqual(_component.instance().handleSideNavToggle);
        expect(_component.find("TopNav").props().notificationCount).toEqual(300);
    });

    it("has a side navigation with a minimal and open state", () => {
        expect(_component.find("SideNav").props().minimal).toEqual(false);
        expect(_component.find("SideNav").props().open).toEqual(true);
    });

    describe("when in mobile view", () => {
        beforeEach(() => {
            window.innerWidth = 480
        });

        describe("given the component did mount", () => {
            beforeEach(() => {
                _component.setState({ sideNavIsMinimal: true });
                _component.instance().componentDidMount();
            });

            describe("when setting the view state", () => {
                it("does not set the side navigation minimal view", () => {
                    expect(_component.state().sideNavIsMinimal).toEqual(true);
                });
            });

            describe("given a request to toggle the side navigation", () => {
                beforeEach(() => {
                    _component.setState({ sideNavIsOpen: false, sideNavIsMinimal: true });
                    _component.instance().handleSideNavToggle();
                });

                it("toggles the side navigation", () => {
                    expect(_component.state().sideNavIsOpen).toEqual(true);
                });

                it("does not toggle the side navigation minimal view", () => {
                    _component.instance().handleSideNavToggle();
                    expect(_component.state().sideNavIsMinimal).toEqual(true);
                });
            });
        });
    });

    describe("when in desktop view", () => {
        beforeEach(() => {
            window.innerWidth = 1200
        });

        describe("given the component did mount", () => {
            beforeEach(() => {
                _component.setState({ sideNavIsMinimal: true });
                _component.instance().componentDidMount();
            });

            describe("when setting the view state", () => {
                it("sets the side navigation to not be minimal", () => {
                    expect(_component.state().sideNavIsMinimal).toEqual(false);
                });
            });

            describe("given a request to toggle the side navigation", () => {
                beforeEach(() => {
                    _component.setState({ sideNavIsOpen: false, sideNavIsMinimal: true });
                    _component.instance().handleSideNavToggle();
                });

                it("toggles the side navigation", () => {
                    expect(_component.state().sideNavIsOpen).toEqual(true);
                });

                it("toggles the side navigation minimal view", () => {
                    expect(_component.state().sideNavIsMinimal).toEqual(false);
                });
            });
        });
    });
});