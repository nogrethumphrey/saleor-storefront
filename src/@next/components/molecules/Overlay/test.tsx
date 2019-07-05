import { shallow } from "enzyme";
import "jest-styled-components";
import React from "react";

import { Overlay } from ".";
import { IProps, Position } from "./types";

describe("<Overlay />", () => {
  const Children = () => <div>"Some content"</div>;
  const position: Position = "center";

  const DEFAULT_PROPS = {
    children: Children,
    position,
    show: true,
  };

  const renderOverlay = (props: IProps) =>
    shallow(
      <Overlay {...props}>
        <Children />>
      </Overlay>
    );
  it("exists", () => {
    const wrapper = renderOverlay(DEFAULT_PROPS);

    expect(wrapper.exists()).toEqual(true);
  });
});
