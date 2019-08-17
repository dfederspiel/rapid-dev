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
            it("does not shows the icon", () => {
                expect(_component.find(".icon FontAwesome").length).toEqual(0);
            });
        });

        describe("with an icon", () => {
            it("shows the icon", () => {
                _component = shallow(<NavLinkWithLevels title="My Page" icon="spinnyThang" />);

                expect(_component.find("Icon").props().name).toEqual("spinnyThang");
            });
        });

        describe("given no sub links", () => {
            it("does not display the second level navigation", () => {
                expect(_component.find("NavSecondLevel").length).toEqual(0);
            });
        });

        describe("given sub links", () => {
            it("displays the second level navigation", () => {
                _component = shallow(<NavLinkWithLevels title="My Page" links={links()}/>);

                expect(_component.find("NavSecondLevel").props().title).toEqual("My Page");
                expect(_component.find("NavSecondLevel").props().links).toEqual(links());
            });
        });

        describe("when the link is clicked", () => {
            it("toggles the active state", () => {
                _component.setState({ active: false });
                _component.find("a.link").simulate("click");

                expect(_component.state().active).toEqual(true);
            });
        });

        describe("when the trigger is clicked", () => {
            it("toggles the active state", () => {
                _component = shallow(<NavLinkWithLevels title="My Page" links={links()} icon="spinnyThang" />);
                _component.setState({ active: false });
                _component.find("a.active-trigger").simulate("click");

                expect(_component.state().active).toEqual(true);
            });
        });


        describe("when clicking the second level of the link", () => {
            it("keeps the link active", () => {
                _component = shallow(<NavLinkWithLevels title="My Page" links={links()} />);
                _component.setState({ active: true });
                _component.find("NavSecondLevel").simulate("click");

                expect(_component.state().active).toEqual(true);
            });
        });
    });

    function links() {
        return [{ href: "href1", title: "title1" }, { href: "href2", title: "title2" }];
    }
});