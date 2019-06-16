import React from "react";
import { shallow } from "enzyme";
import MainContent from "components/MainContent";
import BookCard from "components/BookCard";

describe("<MainContent />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MainContent />);
  });

  it("displays a title", () => {
    expect(wrapper.find(".main-content-header").length).toEqual(1);
    expect(wrapper.find(".main-content-header").html()).toContain(
      "On The Shelve"
    );
  });

  it("displays at least one BookCard", () => {
    expect(wrapper.find(BookCard).length).toEqual(1);
  });
});
