import React from 'react';
import TopNav from '../top-nav';
import { shallow } from 'enzyme';
import '../../../tests-setup';

describe('The top navigation component', () => {
    let _component;
    let _cbValue;
    let _callback = () => { _cbValue = false };

    beforeEach(() => {
        _component = shallow(<TopNav />);
    });

    it("has a logo", () => {
        expect(_component.find("Logo").length).toEqual(1);
    });

    it("has a right side navigation",()=>{
        expect(_component.find("RightSideNav").length).toEqual(1);
    });

    it("has a hamburger menu to toggle left navigation", () => {
        expect(_component.find("HamMenu").length).toEqual(1);
    });

    describe("given a method to toggle the side navigation", () => {
        beforeEach(() => {
            _component = shallow(<TopNav toggleLeftSideNav={_callback} />);
        });
        
        describe("when the hamburger menu is clicked", () => {
            it("toggles the side nav", () => {
                _cbValue = true;
                _component.find("HamMenu").simulate("click");
                expect(_cbValue).toEqual(false);
            });
        });
    });
});