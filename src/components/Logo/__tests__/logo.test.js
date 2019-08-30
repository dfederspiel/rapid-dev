import React from 'react';
import { shallow } from 'enzyme';
import '../../../tests-setup';
import Logo from '../logo';

describe('The logo component', () => {
    let _component;

    beforeEach(() => {
        _component = shallow(<Logo />);
    });

    it("exists", () => {
        expect(_component).toBeDefined();
    });

});