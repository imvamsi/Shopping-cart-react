import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };

  handleIncrement = () => {
    console.log("Increment Clicked", this);
  };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags left</p>;

  //   return this.state.tags.map(t => <li> {t} </li>);
  // }

  render() {
    return;
    // <div>
    //   {this.state.tags.length === 0 && "create new ones"}
    //   {this.renderTags()}
    // </div>
  }
}

export default Counter;
