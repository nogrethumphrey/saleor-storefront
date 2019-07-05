import { styled } from "@styles";
import { Position } from "./types";

type State = "entering" | "entered" | "exiting" | "exited";

const justify = {
  center: "center",
  left: "flex-start",
  right: "flex-end",
};

const opacity = {
  entered: 1,
  entering: 0,
  exited: 0,
  exiting: 0,
};

export const Lightbox = styled.div<{ state: State }>`
  min-height: ${props => props.theme.modal.modalMinHeight}px;
  background-color: ${props => props.theme.colors.white};
`;

export const Overlay = styled.div<{ position: Position; state: State }>`
  display: flex;
  overflow-y: auto;
  background-color: ${props => props.theme.colors.overlay};
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  transition: opacity 0.3s ease;
  width: 100%;
  z-index: 2;
  align-items: center;
  opacity: ${({ state }) => opacity[state]}
  justify-content: ${({ position }) => justify[position]};
  ${Lightbox} {
    height: ${({ position }) => (position === "center" ? "auto" : "100%")};
    width: ${({ position, theme: { modal } }) =>
      position === "center" ? `${modal.modalWidth}px` : "auto"};
  }
`;

// @keyframes sidenavLeftOpen {
//   from {
//     left: -100rem;
//   }
//   to {
//     left: 0;
//   }
// }

// @keyframes sidenavRightOpen {
//   from {
//     right: -100rem;
//   }
//   to {
//     right: 0;
//   }
// }
