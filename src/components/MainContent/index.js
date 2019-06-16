import React from "react";
import "./mainContent.css";

import BookCard from "../BookCard";

export default class MainContent extends React.Component {
  state = {
    cardImgProps: {
      src: "https://via.placeholder.com/100",
      alt: "Card image cap"
    }
  };

  render() {
    return (
      <div className="mainContent">
        <h2 className="main-content-header">On The Shelve</h2>
        <p>Some Content will eventually go here</p>
        <BookCard cardImgProps={this.state.cardImgProps} />
      </div>
    );
  }
}
