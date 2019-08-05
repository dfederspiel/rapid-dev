import React from 'react';
import AccountBalances from '../account-balances';
import renderer from 'react-test-renderer';

describe('the account balances component', () => {
    
    it('renders correctly', () => {
        const tree = renderer.create(
            <AccountBalances />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});