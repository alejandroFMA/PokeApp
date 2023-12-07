import React from "react";
import { shallow } from "enzyme";
import HomeCard from "./HomeCard";

describe("HomeCard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<HomeCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
