import React from "react";
import { shallow } from "enzyme";
import CardPokemon from "./CardPokemon";

describe("CardPokemon", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CardPokemon />);
    expect(wrapper).toMatchSnapshot();
  });
});
