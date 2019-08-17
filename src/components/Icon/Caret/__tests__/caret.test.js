import React from 'react';
import { shallow } from 'enzyme';
import '../../../../tests-setup';
import Caret from '../caret';

describe('The Caret component', () => {
    let _component;

    beforeEach(() => {
        _component = shallow(<Caret />);
    });

    describe("given no direction", () => {
        it("shows the caret down", () => {
            expect(_component.props().className).toEqual("alloya-caret down");
        });
    });

    describe("given a direction", () => {
        it("shows the caret in that direction", () => {
            _component = shallow(<Caret direction="notdefined" />);
            expect(_component.props().className).toEqual("alloya-caret notdefined");
        });
    });

});