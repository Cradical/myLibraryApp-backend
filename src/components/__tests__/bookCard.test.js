import React from "react";
import { shallow } from "enzyme";
import BookCard from "components/BookCard";

let wrapper;

beforeEach(() => {
  let cardInfo = {
    bookImg: {
      src: "https://card-image-url.com",
      alt: "Card image cap"
    },
    bookTitle: "Homo Deus",
    bookSubtitle: "Brief History of Tommorrow",
    bookSummary: "This is a quick summary of the book"
  };

  wrapper = shallow(<BookCard cardInfo={cardInfo} />);

  wrapper.setProps(cardInfo);
});

describe("<BookCard />", () => {
  it("renders with a book image", () => {
    expect(wrapper.find("CardImg").prop("alt")).toBe("Card image cap");
    expect(wrapper.find("CardImg").prop("src")).toBe(
      "https://card-image-url.com"
    );
  });

  it("renders a Book Title", () => {
    expect(
      wrapper
        .find("CardTitle")
        .shallow()
        .text()
    ).toEqual("Homo Deus");
  });

  it("renders a subtitle", () => {
    expect(
      wrapper
        .find("CardSubtitle")
        .dive()
        .text()
    ).toEqual("Brief History of Tommorrow");
  });

  it("renders with a book summary", () => {
    expect(
      wrapper
        .find("CardText")
        .dive()
        .text()
    ).toEqual("This is a quick summary of the book");
  });

  it("has a clickable button", () => {
    expect(wrapper.find("Button").exists()).toEqual(true);
    expect(wrapper.find("Button").simulate("click"));
  });
});
