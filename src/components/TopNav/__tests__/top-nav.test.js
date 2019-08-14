import React from 'react';
import TopNav from '../top-nav';
import { shallow } from 'enzyme';
import '../../../tests-setup';

describe('The top navigation component', () => {
    let _component;

    beforeEach(() => {
        _component = shallow(<TopNav/>);
    });

    it("exists", () => {
        expect(_component).toBeDefined();
    });
});