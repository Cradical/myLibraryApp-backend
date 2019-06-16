import React from "react";
import { shallow } from "enzyme";
import App from "../../App";
import MainConent from "components/MainContent";
import SideBar from "components/SideBar";
import NavBar from "components/NavBar";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it("displays a <MainContent /> component", () => {
  expect(wrapper.find(MainConent).length).toEqual(1);
});

it("displays a <SideBar /> component", () => {
  expect(wrapper.find(SideBar).length).toEqual(1);
});

it("displays a <NavBar /> component", () => {
  expect(wrapper.find(NavBar).length).toEqual(1);
});
