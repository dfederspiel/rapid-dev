import React from 'react';
import SideNav from '../side-nav';
import {shallow} from 'enzyme';
import Api from '../../../services/Api';
import {promise} from '../../../tests-setup';

describe('the side navigation component', () => {
    let _component;
    beforeEach(()=>{
        spyOn(Api,"fetch").and.returnValue(promise());
        _component = shallow(<SideNav />)

    })
    it('calls api', () => {
        expect(Api.fetch).toHaveBeenCalled();
    });

});