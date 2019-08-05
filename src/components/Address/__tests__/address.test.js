import React from 'react';
import Address from '../address';
import renderer from 'react-test-renderer';

describe('the address component', () => {

    const props = {
        type: 2,
        address1: '100 N Main',
        address2: 'PO Box 123',
        address3: 'Apt 999',
        city: 'Lima',
        state: 'OH',
        zip: '45801',
        zip4: '1234'
    };

    it('renders correctly', () => {
        const tree = renderer.create(
            <Address
                {...props}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});