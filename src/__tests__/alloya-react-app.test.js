import React from 'react';
import { shallow } from 'enzyme';
import {} from '../tests-setup';
import AlloyaReactApp from '../alloya-react-app';
describe("The Alloya app", () => {
    let _component;

    beforeEach(() => {
        spyOn(document, "addEventListener").and.stub();
        spyOn(document, "removeEventListener").and.stub();
        _component = shallow(<AlloyaReactApp />, true);
    });
    
    it("has a side navigation", () => {
        expect(_component.find("LeftSideNav").length).toEqual(1);
    });

    it("has a top navigation that passes a callback to handle side navigation toggling", () => {
        expect(_component.find("TopNav").props().toggleLeftSideNav).toEqual(_component.instance().toggleLeftSideNav);
    });

    describe("given a call to toggle the side navigation", () => {
        it("toggles the side navigation", () => {
            _component.setState({ LeftSideNavIsOpen: true });
            _component.instance().toggleLeftSideNav();
            expect(_component.state().LeftSideNavIsOpen).toEqual(false);
        });
    });
    
    describe("given a call to toggle the right navigation", () => {
        it("toggles the right navigation", () => {
            _component.setState({ rightNavIsOpen: true });
            _component.instance().toggleRightSideNav();
            expect(_component.state().rightNavIsOpen).toEqual(false);
        });
    });
});