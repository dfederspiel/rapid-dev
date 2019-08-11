import React from 'react';
import NavLink from '../nav-link';
import { shallow } from 'enzyme';
import '../../../tests-setup';

describe('The  navigation link component', () => {
    let _component;

    beforeEach(() => {
        _component = shallow(<NavLink title="" href="" icon="" />);
    });
    
    it("Exists", () => {
        expect(_component).toBeDefined()
    });

});