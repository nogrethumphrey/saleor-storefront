import React from "react";

import { Icon } from "@components/atoms";
import { FormFooter, Overlay } from "@components/molecules";
import * as S from "./styles";
import { IProps } from "./types";

export const Modal: React.FC<IProps> = ({
  cancelBtnText,
  children,
  hide,
  loading,
  formId = "modal-submit",
  submitBtnText,
  show,
  title,
}: IProps) => {
  return (
    <Overlay position="center" show={show} hide={hide}>
      <S.Modal>
        <S.Header>
          <p>{title}</p>
          <S.CloseBtn onClick={hide}>
            <Icon name="x" size={19} />
          </S.CloseBtn>
        </S.Header>
        <S.Content>{children}</S.Content>
        <FormFooter
          submitBtn={{ text: submitBtnText }}
          cancelBtn={{ action: hide, text: cancelBtnText }}
          formId={formId}
          disabled={loading}
        />
      </S.Modal>
    </Overlay>
  );
};
