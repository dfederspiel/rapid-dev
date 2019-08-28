import React from 'react';
import RightSideNav from '../right-side-nav';
import { shallow } from 'enzyme';
import '../../../tests-setup';

describe('The side navigation component', () => {
    let _component;

    beforeEach(() => {
        _component = shallow(<RightSideNav />, true);
    });

    it("exists", () => {
        expect(_component).toBeDefined();
    });

});