import { render } from "@testing-library/react";
import React, { Component } from "react";

class Addform extends Component {
  state = { content: "" };
  handleChange = (e) => {
    this.setState({ content: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state);
    this.setState({ content: "" });
  };
  render() {
    return (
      <div className="mt-10">
        <form onSubmit={this.handleSubmit}>
          <label className="text-black text-2xl">Add dream item</label>
          <input
            placeholder="Ketikan sesuatu..."
            className="focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md py-3 text-5xl mt-2"
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default Addform;
