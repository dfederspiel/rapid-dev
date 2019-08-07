import React from 'react';
import { shallow } from 'enzyme';
import Setup from '../tests-setup';
import AlloyaReactApp from '../alloya-react-app';


describe("The Alloya app", () => {
    let _component;
    beforeEach(() => {
        _component = shallow(<AlloyaReactApp />);
    });
    
    it("exists", () => {
        expect(_component).toBeDefined();
    })
})