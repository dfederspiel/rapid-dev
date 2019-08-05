//https://github.com/jbetancur/react-data-table-component#readme
import React, { Component } from 'react';
import DataTable from 'react-data-table-component';

const paginationPerPage = 15;

export default class ReactDataTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <DataTable
                columns={this.props.columns}
                data={this.props.data}
                pagination={this.props.pagination}
                paginationPerPage={paginationPerPage}
                noHeader
                className="react-data-table"
            />
        );
    }
}