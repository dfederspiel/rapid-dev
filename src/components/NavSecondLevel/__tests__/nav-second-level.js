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
        let _secondLevelLinksSelector = ".nav-second-level li a";

        describe("without links", () => {
            it("does not show the links", () => {
                _component = componentWithTitle(null);
                _secondLevelLinks = _component.find(_secondLevelLinksSelector);

                expect(_secondLevelLinks.length).toEqual(0);
            });
        });

        describe("with links", () => {
            beforeEach(() => {
                _component = componentWithTitle(linksWithoutHrefNorSublinks());
                _secondLevelLinks = _component.find(_secondLevelLinksSelector);
            });

            it("shows a navigation header", () => {
                expect(_component.find(".nav-heading").text()).toEqual("The other thing")
            })

            describe("given an item does not have a href link", () => {
                describe("and it does not have sublinks", () => {
                    it("does not show the title", () => {
                        expect(_secondLevelLinks.length).toEqual(0);
                    });

                    it("does not display the third level navigation", () => {
                        expect(_component.find("NavThirdLevel").length).toEqual(0);
                    });
                });

                describe("and it does have sublinks", () => {
                    let sublinksLength;

                    beforeEach(() => {
                        sublinksLength = linksWithoutHrefWithSublinks().length - 1;
                        _component = componentWithTitle(linksWithoutHrefWithSublinks());
                        _secondLevelLinks = _component.find(_secondLevelLinksSelector);
                    });

                    it("shows the third level navigation", () => {
                        expect(_component.find("NavThirdLevel").length).toEqual(sublinksLength);
                    });
                });
            });

            describe("given an item has a href link", () => {
                it("shows the link", () => {
                    _component = componentWithTitle(linksWithoutSublinks());
                    _secondLevelLinks = _component.find(_secondLevelLinksSelector);

                    expect(_secondLevelLinks.length).toEqual(5);
                });

                describe("and has sublinks", () => {
                    let linkWithHrefAndSublinks;

                    beforeEach(() => {
                        linkWithHrefAndSublinks = linksWithoutSublinks()[0];
                        linkWithHrefAndSublinks.sublinks = linksWithoutSublinks();
                        _component = componentWithTitle([linkWithHrefAndSublinks]);
                        _secondLevelLinks = _component.find(_secondLevelLinksSelector);
                    });

                    it("does not show the link title", () => {
                        expect(_secondLevelLinks.length).toEqual(0);
                    });

                    it("shows the third level navigation", () => {
                        expect(_component.find("NavThirdLevel").length).toEqual(1);
                    });
                });
            });
        });
    });

    function componentWithTitle(links) {
        return shallow(<NavSecondLevel title="The other thing" links={links} />);
    }

    function linksWithoutSublinks() {
        return [
            { href: "href1", title: "title1" },
            { href: "href2", title: "title2" },
            { href: "href3", title: "title3" },
            { href: "href4", title: "title4" },
            { href: "href5", title: "title5" },
        ];
    }

    function linksWithoutHrefNorSublinks() {
        return [
            { href: "", title: "title1" },
            { href: "", title: "title2" },
            { href: "", title: "title3" },
            { href: "", title: "title4" },
            { href: "", title: "title5" },
        ];
    }

    function linksWithoutHrefWithSublinks() {
        return [
            { href: "", title: "title1", sublinks: [] },
            { href: "", title: "title2", sublinks: [{ href: "http//www.weehaw.com", title: "the" }, { href: "http//www.weehaw2.com", title: "At" }] },
            { href: "", title: "title3", sublinks: linksWithoutSublinks() },
            { href: "", title: "title4", sublinks: linksWithoutSublinks() },
            { href: "", title: "title5", sublinks: linksWithoutSublinks() },
        ];
    }
});