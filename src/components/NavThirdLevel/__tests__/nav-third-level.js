import React from 'react';
import NavThridLevel from '../nav-third-level';
import { shallow } from 'enzyme';
import '../../../tests-setup';

describe('The third level navigation component', () => {
    let _component;

    beforeEach(() => {
        _component = shallow(<NavThridLevel links={[]} />);
    });

    it("Exists", () => {
        expect(_component).toBeDefined()
    });
});