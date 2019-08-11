import React from 'react';
import { shallow } from 'enzyme';
import '../../../tests-setup';
import NavLinkWithLevels from '../nav-link-with-levels';

describe('The navigation link with levels component', () => {
    let _component;

    beforeEach(() => {
        spyOn(document, "addEventListener").and.stub();
        spyOn(document, "removeEventListener").and.stub();
        _component = shallow(<NavLinkWithLevels />);
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

    describe("given no title", () => {
        it("displays nothing", () => {
            _component = shallow(<NavLinkWithLevels />);
            expect(_component.html()).toEqual(null);
        });
    });


    describe("given a title", () => {
        beforeEach(() => {
            _component = shallow(<NavLinkWithLevels title="My Page" />);
        });

        it("shows the title as the link text", () => {
            expect(_component.find("a .title").text()).toEqual("My Page");
        });

        describe("without an icon", () => {
            it("shows the icon as a star", () => {
                expect(_component.find(".icon FontAwesome").props().name).toEqual("star");
            });
        });

        describe("with an icon", () => {
            it("shows the icon", () => {
                _component = shallow(<NavLinkWithLevels title="My Page" icon="schnitzel" />);

                expect(_component.find(".icon FontAwesome").props().name).toEqual("schnitzel");
            });
        });

        describe("given no sub links", () => {
            it("does not display the second level navigation", () => {
                expect(_component.find("NavSecondLevel").length).toEqual(0);
            });
        });

        describe("given sub links", () => {
            it("displays the second level navigation", () => {
                _component = shallow(<NavLinkWithLevels  title="My Page" links={[{}, {}]} />);

                expect(_component.find("NavSecondLevel").props().title).toEqual("My Page");
                expect(_component.find("NavSecondLevel").props().links).toEqual([{}, {}]);
            });
        });

        describe("when the link is clicked", ()=>{
            it("toggles the active state", ()=>{
                _component.setState({active:false});
                _component.find("a").simulate("click");

                expect(_component.state().active).toEqual(true);
                
            });
        });
    });
});