import React from "react";
import { Transition } from "react-transition-group";

import * as S from "./styles";
import { IProps } from "./types";

export const Overlay: React.FC<IProps> = ({
  children,
  position = "center",
  show,
}: IProps) => {
  return (
    <Transition in={show} timeout={400} unmountOnExit>
      {state => (
        <S.Overlay position={position} state={state}>
          <S.Lightbox state={state}>{children}</S.Lightbox>
        </S.Overlay>
      )}
    </Transition>
  );
};
