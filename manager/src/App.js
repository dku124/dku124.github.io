import "./App.css";
import AddData from "./Components/AddData";
import Header from "./Components/Header";
import Search from "./Components/Search";
import TableData from "./Components/TableData";
import DataUser from "./Components/Data.json";

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DataUser,
    };
  }

  getTextSearch = (dl) => {
    console.log(dl);
  };
  render() {
    return (
      <div>
        <Header />
        <main>
          <div className="containe-fluid container-lg">
            <div className="row">
              <Search checkConnectProp={(dl) => this.getTextSearch(dl)} />
              <TableData dataValue={this.state.data} />
              <AddData />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
