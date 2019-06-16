import React from "react";
import "./mainContent.css";

import BookCard from "../BookCard";

export default class MainContent extends React.Component {
  state = {
    cardInfo: {
      bookImg: {
        src: "https://via.placeholder.com/100",
        alt: "Card image cap"
      },
      bookTitle: "12 Rule for Life",
      bookSubtitle: "Antidote to Chaos",
      bookSummary: "This is a quick summary of the book"
    }
  };

  render() {
    return (
      <div className="mainContent">
        <h2 className="main-content-header">On The Shelve</h2>
        <p>Some Content will eventually go here</p>
        <BookCard cardInfo={this.state.cardInfo} />
      </div>
    );
  }
}
