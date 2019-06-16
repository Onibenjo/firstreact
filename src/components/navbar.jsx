import React, { Component } from "react";

class Navbar extends Component {
  state = {};

  render() {
    const { totalCounters } = this.props;
    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">
          Navbar
          <span className="badge ml-3 badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default Navbar;
