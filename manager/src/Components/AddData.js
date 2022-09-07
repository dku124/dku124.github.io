import React, { Component } from 'react';
import DataUser from './Data.json';


class AddData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: true,
            data: DataUser,
        }
    }
    
    showButton = () =>{
        if(this.state.status){
            return <button type="button" className="btn btn-outline-secondary mb-3"  style={{width: '100%'}} onClick={()=>this.changeStatus()}>Close</button>
        }
        else return <button type="button" className="btn btn-outline-primary mb-3"  style={{width: '100%'}} onClick={()=>this.changeStatus()}>Add</button>
    }

    changeStatus = () => {
        this.setState({
            status: !this.state.status
        });
    }

    showForm = () =>{
        if(this.state.status){
            return <div className="card border-secondary mb-3" >
            <div className="card-header text-center">Info user</div>
            <div className="card-body text-secondary">
            <form className="row g-3 needs-validation" noValidate>
                <div className="mb-3">
                <input type="text" className="form-control" id="usesNameAdd" placeholder="Name" />
                </div>
                <div className="mb-3">
                <input type="text" className="form-control" id="userPhoneAdd" placeholder="Phone" />
                </div>
                <div className="mb-3">
                <select className="form-select mb-3" defaultValue={'0'}>
                    <option value='0'>Position</option>
                    <option value='1'>Admin</option>
                    <option value='2'>User</option>
                    <option value='3'>Customer</option>
                </select>
                </div>
                <div className="col-12 text-center">
                <button className="btn btn-primary" type="submit">Submit</button>
                <button className="btn btn-danger ml-3" type="reset">Delete</button>
                </div>
            </form>
            </div>
        </div>
        }
    }
    render() {
        return (
            <div className="col-3">
                {this.showButton()}
                {this.showForm()}
            </div>
        );
    }
}

export default AddData;