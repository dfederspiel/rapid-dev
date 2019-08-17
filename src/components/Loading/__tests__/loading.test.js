import React from 'react';
import { shallow } from 'enzyme';
import '../../../tests-setup';
import Loading from '../loading';

describe('The loading component', () => {
    let _component;

    beforeEach(() => {
        _component = shallow(<Loading />);
    });

    it("has a spinning icon", () => {
        expect(_component.find("Icon").props().name).toEqual("spinner");
        expect(_component.find("Icon").props().spin).toEqual(true);
    });

});