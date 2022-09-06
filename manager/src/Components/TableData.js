import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {

    mappingData = () => this.props.dataValue.map((value, key) =>(
            <TableDataRow id={key} name = {value.name} phone ={value.phone} position={value.position}/>
            ))
    


    render() {
        return (
            <div className="col-9">
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Position</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.mappingData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;