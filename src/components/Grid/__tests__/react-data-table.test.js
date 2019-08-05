import React from 'react';
import ReactDataTable from '../react-data-table';
import renderer from 'react-test-renderer';

describe('the react data table component', () => {

    const props = {
        data: [
            { action: '', test:'hello'},
            { action: '', test:'world'}
        ],
        columns: [
            {
                name: 'Action',
                selector: 'action',
                cell: row => <input type="button" value="View" />,
                maxWidth: '20px'
            },
            {
                name: 'Test',
                selector: 'test',
                sortable: true
            }
        ]
    };

    it('renders correctly', () => {
        const tree = renderer.create(
            <ReactDataTable
                {...props}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});