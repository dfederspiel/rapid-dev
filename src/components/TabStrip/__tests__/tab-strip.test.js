import React from 'react';
import TabStrip from '../tab-strip';
import renderer from 'react-test-renderer';

describe('the tab strip component', () => {

    const props = {
        tabs: [
            {
                title: 'Name',
                url: 'testUrl',
                isActive: true
            },
            {
                title: 'Address',
                url: 'anotherUrl',
                isActive: false
            }]
    };

    it('renders correctly', () => {
        const tree = renderer.create(
            <TabStrip
                {...props}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});