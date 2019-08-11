import React from 'react';
import NavLink from '../nav-link';
import { shallow } from 'enzyme';
import '../../../tests-setup';

describe('The  navigation link component', () => {
    let _component;

    describe("given no link address", () => {
        it("displays nothing", () => {
            _component = shallow(<NavLink />);
            expect(_component.html()).toEqual(null);
        });
    });

    describe("given a link address", () => {
        beforeEach(() => {
            _component = shallow(<NavLink href="wahzup.html" />);
        });

        it("displays a link", () => {
            expect(_component.find("a").props().href).toEqual("wahzup.html");
        });

        describe("without an icon", () => {
            it("shows the icon as a star", () => {
                expect(_component.find(".icon FontAwesome").props().name).toEqual("star");
            });
        });

        describe("with an icon", () => {
            it("shows the icon", () => {
                _component = shallow(<NavLink href="wahzup.html" icon="home" />);

                expect(_component.find(".icon FontAwesome").props().name).toEqual("home");
            });
        });

        describe("without a title", () => {
            it("shows the link address as the title", () => {
                expect(_component.find(".title").text()).toEqual("wahzup.html");
            });
        });

        describe("with a title", () => {
            it("displays the title as link text", () => {
                _component = shallow(<NavLink href="wahzup.html" title="Home" />);

                expect(_component.find(".title").text()).toEqual("Home");
            });
        });
    });
});