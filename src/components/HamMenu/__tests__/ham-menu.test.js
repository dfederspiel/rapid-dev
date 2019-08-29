import React from 'react';
import { shallow } from 'enzyme';
import '../../../tests-setup';
import HamMenu from '../ham-menu';

describe('The Ham Menu component', () => {
    let _component;
    let _cbValue = 0;
    let _callback = () => { _cbValue = 1 };

    beforeEach(() => {
        _component = shallow(<HamMenu onClick={_callback} />);
    });

    describe("when clicked", () => {
        it("calls the on click callback", () => {
            _component.find(".ham-menu").simulate("click");
            expect(_cbValue).toEqual(1);
        });
    });

});