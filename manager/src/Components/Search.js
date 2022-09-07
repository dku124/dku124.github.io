import React, { Component, startTransition } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: "",
    };
  }

  isChange = (e) => {
    this.setState({
      tempValue: e.target.value,
    });
  };

  render() {
    return (
      <div className="col-12">
        <div className="input-group my-3 search-box">
          <input type="text" className="form-control" placeholder="Search..." onChange={(e) => this.isChange(e)} />
          <button className="btn btn-outline-secondary" type="button" onClick={(dl) => this.props.checkConnectProp(this.state.tempValue)}>
            <i className="fa fa-search" />
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
