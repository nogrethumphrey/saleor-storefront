import React from "react";
import * as ReactDOM from "react-dom";

import { Icon } from "@components/atoms";
import { FormFooter, Overlay } from "@components/molecules";
import * as S from "./styles";
import { IProps } from "./types";

const modalRoot = document.getElementById("modal-root");

export const Modal: React.FC<IProps> = ({
  cancelBtnText,
  children,
  hide,
  loading,
  formId = "modal-submit",
  submitBtnText,
  target = modalRoot,
  show,
  title,
}: IProps) => {
  return target && show
    ? ReactDOM.createPortal(
        <Overlay position="center">
          <S.Lightbox>
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
          </S.Lightbox>
        </Overlay>,
        target
      )
    : null;
};
