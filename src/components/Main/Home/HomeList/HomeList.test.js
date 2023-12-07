import React from "react";
import { shallow } from "enzyme";
import HomeList from "./HomeList";

describe("HomeList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HomeList />);
    expect(wrapper).toMatchSnapshot();
  });
});
