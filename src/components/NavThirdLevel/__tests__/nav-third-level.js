import React from 'react';
import NavThirdLevel from '../nav-third-level';
import { shallow } from 'enzyme';
import '../../../tests-setup';

describe('The third level navigation component', () => {
    let _component;

    beforeEach(() => {
        _component = shallow(<NavThirdLevel />);
    });

    describe("when no title is given", () => {
        it("doesn't show anything", () => {
            expect(_component.html()).toEqual(null);
        });
    });

    describe("when no links are given", () => {
        it("doesn't show anything", () => {
            expect(_component.html()).toEqual(null);
        });
    });

    describe("given a title", () => {
        describe("with no links", () => {
            it("doesn't show anything", () => {
                _component = shallow(<NavThirdLevel title="My Page" />);

                expect(_component.html()).toEqual(null);
            });
        });

        describe("with links", () => {
            beforeEach(()=>{
                _component = shallow(<NavThirdLevel title="My Page" links={[{},{},{},{},{}]} />);
            });

            it("shows the title as a toggle link", () => {
                expect(_component.find("a .title").text()).toEqual("My Page");
            });

            it("displays an icon to show it is a toggle ", () => {
                expect(_component.find("a .icon FontAwesome").props().name).toEqual("angle-down");
            });

            it("shows the links as navigation links", ()=>{
                expect(_component.find("NavLink").length).toEqual(5);
            })
        });
    });
});