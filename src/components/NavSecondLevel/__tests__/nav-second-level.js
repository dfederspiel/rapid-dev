import React from 'react';
import NavSecondLevel from '../nav-second-level';
import { shallow } from 'enzyme';
import '../../../tests-setup';

describe('The  second level navigation component', () => {
    let _component;

    beforeEach(() => {
        _component = shallow(<NavSecondLevel />);
    });

    describe("given no title", () => {
        it("displays nothing", () => {
            expect(_component.html()).toEqual(null);
        })
    })

    describe("given a title", () => {
        let _secondLevelLinks;
        let _secondLevelLinksSelector = ".nav-second-level li:not(.nav-heading)";

        describe("without links", () => {
            it("does not show the links", () => {
                _component = shallow(<NavSecondLevel title="The thing that does the thing" />);
                _secondLevelLinks = _component.find(_secondLevelLinksSelector);

                expect(_secondLevelLinks.length).toEqual(0);
            });
        });

        describe("with links", () => {
            it("shows the links", () => {
                _component = shallow(<NavSecondLevel title="The other thing" links={links()} />);
                _secondLevelLinks = _component.find(_secondLevelLinksSelector);

                expect(_secondLevelLinks.length).toEqual(links().length);
            });
        });
    });

    function links(){
        return [
            {href:"href1", title:"title1"}, 
            {href:"href2", title:"title2"},
            {href:"href3", title:"title3"},
            {href:"href4", title:"title4"},
            {href:"href5", title:"title5"},
        ];
    }
});