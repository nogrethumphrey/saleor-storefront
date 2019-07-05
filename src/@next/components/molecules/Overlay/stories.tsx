import { storiesOf } from "@storybook/react";
import React from "react";

import { Overlay } from ".";

const style = {
  padding: "5rem 4rem",
  "text-align": "center",
};
const Children = () => <div style={style}>Some content</div>;

storiesOf("@components/molecules/Overlay", module)
  .add("Position center", () => (
    <Overlay position="center" show={true}>
      <Children />
    </Overlay>
  ))
  .add("Position left", () => (
    <Overlay position="left" show={true}>
      <Children />
    </Overlay>
  ))
  .add("Position right", () => (
    <Overlay position="right" show={true}>
      <Children />
    </Overlay>
  ));
