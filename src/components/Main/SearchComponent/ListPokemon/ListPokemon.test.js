import React from "react";
import { shallow } from "enzyme";
import ListPokemon from "./ListPokemon";

describe("ListPokemon", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListPokemon />);
    expect(wrapper).toMatchSnapshot();
  });
});
