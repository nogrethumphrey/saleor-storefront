import React from "react";

import * as S from "./styles";
import { IProps } from "./types";

export const Overlay: React.FC<IProps> = ({
  children,
  position = "center",
}: IProps) => {
  return <S.Overlay position={position}>{children}</S.Overlay>;
};
