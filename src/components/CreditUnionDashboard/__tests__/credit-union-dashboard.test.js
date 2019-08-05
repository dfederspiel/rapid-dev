import React from 'react';
import CreditUnionDashboard from '../credit-union-dashboard';
import renderer from 'react-test-renderer';

const creditUnionDashboardProps = {
    pendingTransactions: 607,
    pendingTemplates: 45,
    pendingAcknowledgements: 13
};

describe('the credit union component', () => {
    
    it('renders correctly', () => {
        const tree = renderer.create(
            <CreditUnionDashboard
                {...creditUnionDashboardProps}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});