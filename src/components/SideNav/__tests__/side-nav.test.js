import React from 'react';
import SideNav from '../side-nav';
import renderer from 'react-test-renderer';
import shallow from 'enzyme';

describe('the side navigation component', () => {
    it('renders correctly', () => {
        const tree = renderer.create(
            <SideNav />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe("in mobile", () => {
        const nav = shallow(<SideNav open={false} />);
        expect(nav.contains(<div></div>)).toBe(true);
    });
});