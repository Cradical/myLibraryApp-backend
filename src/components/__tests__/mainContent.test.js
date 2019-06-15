import React from "react";
import MainContent from "components/MainContent";
import { shallow } from "enzyme";

let wrapper;

describe("the MainContent Component", () => {
  beforeEach(() => {
    wrapper = shallow(<MainContent />);
  });

  it("displays a title", () => {
    expect(wrapper.find(".main-content-header")).toBe("On The Shelve");
  });

  context("in rendering the BookCards", () => {
    it("renders three BookCards", () => {
      expect(wrapper.find("BookCard")).toHaveLength(3);
    });
  });
});
