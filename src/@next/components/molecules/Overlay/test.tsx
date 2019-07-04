import { shallow } from "enzyme";
import "jest-styled-components";
import React from "react";

import { Overlay } from ".";

describe("<Overlay />", () => {
  // Example test
  it("exists", () => {
    const wrapper = shallow(<Overlay />);

    expect(wrapper.exists()).toEqual(true);
  });
});
