import { styled } from "@styles";
import { css, keyframes } from "styled-components";
import { Position } from "./types";

interface IStyleProps {
  open: boolean;
  position: Position;
  state: State;
}
type State = "entering" | "entered" | "exiting" | "exited";

const slideAnimation = (open: boolean, side: "left" | "right") => {
  const initialValue = open ? "-100rem" : 0;
  const endValue = open ? 0 : "-100rem";
  return keyframes`
  from {
    ${side}: ${initialValue};
  }
  to {
    ${side}: ${endValue};
  }`;
};

const opacity = {
  entered: 1,
  entering: 0,
  exited: 0,
  exiting: 0,
};

const justify = {
  center: "center",
  left: "flex-start",
  right: "flex-end",
};
const lightboxWidth = {
  center: "auto",
  left: "100%",
  right: "100%",
};

const lightboxHeight = (width: number) => ({
  center: `${width}px`,
  left: "auto",
  right: "auto",
});

export const Lightbox = styled.div<IStyleProps>`
  position: relative;
  width: ${({ position, theme: { modal } }) =>
    lightboxHeight(modal.modalWidth)[position]};
  min-height: ${props => props.theme.modal.modalMinHeight}px;
  height: ${({ position }) => lightboxWidth[position]};
  background-color: ${props => props.theme.colors.white};
  ${({ open, position }) => {
    if (position === "left" || position === "right") {
      return css`
        ${position}: -100rem;
        animation: ${slideAnimation(open, position)} 0.4s both;
        animation-delay: ${({ open }) => (open ? ".5s" : 0)};
      `;
    }
  }}
`;

export const Overlay = styled.div<IStyleProps>`
  display: flex;
  position: fixed;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  top: 0;
  z-index: 2;
  transition: opacity 0.2s ease;
  transition-delay: ${({ open }) => (open ? 0 : ".4s")};
  background-color: ${props => props.theme.colors.overlay};
  align-items: center;
  justify-content: ${({ position }) => justify[position]};
  opacity: ${({ state }) => opacity[state]};
`;
