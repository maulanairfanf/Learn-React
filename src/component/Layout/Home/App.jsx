import React, { Component } from "react";
import Item from "./Items";
import Data from "../../../store/Data.json";
import Addform from "./Addform";
class App extends Component {
  state = {
    items: Data,
  };
  deleteItem = (id) => {
    const items = this.state.items.filter((item) => {
      return item.id !== id;
    });
    // console.log(items);

    this.setState({
      items,
    });
  };
  addItem = (item) => {
    item.id = Math.random();
    let items = [...this.state.items, item];
    this.setState({ items });
  };

  render() {
    return (
      <div className="App">
        <h1 className="text-5xl mb-10 text-center">Dream List</h1>
        <Item items={this.state.items} deleteItem={this.deleteItem} />
        <Addform addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
