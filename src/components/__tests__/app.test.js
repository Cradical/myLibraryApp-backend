import React from "react";
import { shallow } from "enzyme";
import App from "../../App";
import MainConent from "../MainContent/index";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it("displays a <MainContent /> component", () => {
  expect(wrapper.find(MainConent).length).toEqual(1);
});
