import { storiesOf } from "@storybook/react";
import React from "react";

import { Overlay } from ".";

const style = {
  background: "#fff",
  height: "100%",
  padding: "5rem 2rem",
  "text-align": "center",
  width: "15rem",
};
const Children = () => <div style={style}>Some content</div>;

storiesOf("@components/molecules/Overlay", module)
  .add("Position center", () => (
    <Overlay position="center">
      <Children />
    </Overlay>
  ))
  .add("Position left", () => (
    <Overlay position="left">
      <Children />
    </Overlay>
  ))
  .add("Position right", () => (
    <Overlay position="right">
      <Children />
    </Overlay>
  ));
