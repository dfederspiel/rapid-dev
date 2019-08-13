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
        expect(_component.find("SideNav").length).toEqual(1);
    });

    it("has a top navigation that passes a callback to handle side navigation toggling", () => {
        expect(_component.find("TopNav").props().toggleSideNav).toEqual(_component.instance().toggleSideNav);
    });

    describe("when the component will mount", () => {
        it("adds an event listener to handle click events", () => {
            _component.instance().componentWillMount();
            expect(document.addEventListener).toHaveBeenCalledWith("mousedown", _component.instance().handleClick, false);
        });
    });

    describe("when the component will unmount", () => {
        it("removes the event listener to handle click events", () => {
            _component.instance().componentWillUnmount();
            expect(document.removeEventListener).toHaveBeenCalledWith("mousedown", _component.instance().handleClick, false);
        });
    });

    describe("given a call to toggle the side navigation", () => {
        it("toggles the side navigation", () => {
            _component.setState({ sideNavIsOpen: true });
            _component.instance().toggleSideNav();
            expect(_component.state().sideNavIsOpen).toEqual(false);
        });
    });
});