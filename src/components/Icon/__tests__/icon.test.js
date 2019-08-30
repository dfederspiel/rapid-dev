import React from 'react';
import { shallow } from 'enzyme';
import '../../../tests-setup';
import Icon from '../icon';

describe('The Icon component', () => {
    let _component;

    beforeEach(() => {
        _component = shallow(<Icon />);
    });

    describe("given no name", () => {
        it("shows nothing", () => {
            expect(_component.html()).toEqual(null);
        });
    });

    describe("given a name", () => {
        describe("that is not 'caret'", () => {
            beforeEach(() => {
                _component = shallow(<Icon name="name-that-is-not-caret" />)
            });

            it("does not show a caret component", () => {
                expect(_component.find("Caret").length).toEqual(0);
            });

            it("shows a font awesome icon with that name", () => {
                expect(_component.find("FontAwesome").props().name).toEqual("name-that-is-not-caret");
            });

            describe("given no size", () => {
                it("does not set the size", () => {
                    expect(_component.find("FontAwesome").props().size).not.toBeDefined();
                });
            });

            describe("given a size", () => {
                it("sets the icon size", () => {
                    _component = shallow(<Icon name="name-that-is-not-caret" size="lg" />)
                    expect(_component.find("FontAwesome").props().size).toEqual("lg");
                });
            });

            describe("given no spin", () => {
                it("does not set the icon spin", () => {
                    _component = shallow(<Icon name="name-that-is-not-caret" />)
                    expect(_component.find("FontAwesome").props().spin).not.toBeDefined();
                });
            });

            describe("given a spin", () => {
                it("sets the icon spin", () => {
                    _component = shallow(<Icon name="name-that-is-not-caret" spin={true} />)
                    expect(_component.find("FontAwesome").props().spin).toEqual(true);
                });
            });
        });

        describe("that is 'caret'", () => {
            beforeEach(() => {
                _component = shallow(<Icon name="caret" />)
            });

            it("shows a caret component", () => {
                expect(_component.find("Caret").length).toEqual(1);
            });

            it("does not shows a font awesome icon", () => {
                expect(_component.find("FontAwesome").length).toEqual(0);
            });
        });
    });
});