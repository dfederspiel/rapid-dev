import React from 'react';
import { shallow } from 'enzyme';
import '../../../tests-setup';
import NavLinkWithLevels from '../nav-link-with-levels';

describe('The navigation link with levels component', () => {
    let _component;

    beforeEach(() => {
        _component = shallow(<NavLinkWithLevels title="" icon="" links={[]} />);
    });
    
    it("Exists", () => {
        expect(_component).toBeDefined()
    });

});