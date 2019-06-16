import React from "react";
import { mount } from "enzyme";
import BookCard from "components/BookCard";

describe("<BookCard />", () => {
  let wrapper;

  it("renders with a card image", () => {
    const cardImgProps = {
      src: "https://card-image-url.com",
      alt: "Card image cap"
    };

    wrapper = mount(<BookCard cardImgProps={cardImgProps} />);

    expect(wrapper.find("CardImg").prop("alt")).toBe("Card image cap");
    expect(wrapper.find("CardImg").prop("src")).toBe(
      "https://card-image-url.com"
    );
  });
});
