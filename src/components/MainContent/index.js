import React from "react";
import "./mainContent.css";

import BookCard from "../BookCard";

export default class MainContent extends React.Component {
  render() {
    return (
      <div className="mainContent">
        <h2 className="main-content-header">On The Shelve</h2>
        <p>Some Content will eventually go here</p>
        <BookCard books={this.props} />
      </div>
    );
  }
}
