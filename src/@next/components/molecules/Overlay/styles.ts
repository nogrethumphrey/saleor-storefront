import { styled } from "@styles";
import { Position } from "./types";

const justify = {
  center: "center",
  left: "flex-start",
  right: "flex-end",
};

export const Overlay = styled.div<{ position: Position }>`
  display: flex;
  overflow-y: auto;
  background-color: ${props => props.theme.colors.overlay};
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  transition: 300ms;
  width: 100%;
  z-index: 2;
  align-items: center;
  justify-content: ${({ position }) => justify[position]};
`;
