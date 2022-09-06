
import React, { Component } from 'react';

class TableDataRow extends Component {

    positionShow = () =>{
        if(this.props.position === 1) return "admin"
        else if(this.props.position === 2) return "user"
        else return "customer"
    }

    render() {
        return (
            <tr>
            <th scope="row">{this.props.id}</th>
            <td>{this.props.name}</td>
            <td>{this.props.phone}</td>
            <td>{this.positionShow()}</td>
            <td>
            <div className="btn-group">
                <button type="button" className="btn btn-primary"><i className="fa fa-edit" aria-hidden="true" /> Edit</button>
                <button type="button" className="btn btn-danger">Delete</button>
            </div>
            </td>
        </tr>
        );
    }
}

export default TableDataRow;