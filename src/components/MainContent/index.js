import React from "react";
import "./mainContent.css";

import BookCard from "../BookCard";

//Declaration of variables used in component state
let books;

export default class MainContent extends React.Component {
  state = {
    books,
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

  async componentDidMount() {
    let response = await fetch("https://shelf-book.herokuapp.com/");
    let data = await response.json();

    this.setState({ books: data.books });
  }

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
