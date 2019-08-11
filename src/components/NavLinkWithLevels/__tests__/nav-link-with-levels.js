import React from 'react';
import NavSecondLevel from '../nav-second-level';
import { shallow } from 'enzyme';
import '../../../tests-setup';

describe('The  second level navigation component', () => {
    let _component;

    beforeEach(() => {
        _component = shallow(<NavSecondLevel links={[]} />);
    });
    
    it("Exists", () => {
        expect(_component).toBeDefined()
    });

});