import React from 'react';
import NavDropdown from '../nav-dropdown';
import { shallow } from 'enzyme';
import '../../../tests-setup';

describe('The navigation dropdown component', () => {
    let _component;

    beforeEach(() => {
        _component = shallow(<NavDropdown />, true);
    });

    it("exists", () => {
        expect(_component).toBeDefined();
    });

});