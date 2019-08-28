import React from 'react';
import { shallow } from 'enzyme';
import '../../../tests-setup';
import Notifications from '../notifications';

describe('The Notifications component', () => {
    let _component;

    beforeEach(() => {
        _component = shallow(<Notifications />);
    });

    it("exists", () => {
        expect(_component).toBeDefined();
    });

});