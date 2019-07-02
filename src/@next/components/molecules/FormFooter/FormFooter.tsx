import React from "react";

import { Button, ButtonLink } from "@components/atoms";
import * as S from "./styles";
import { IButtonProps, IProps } from "./types";

const getBtnAction = (btn: IButtonProps) =>
  btn.action && { onClick: btn.action };

const renderCancelBtn = (cancelBtn: IButtonProps) =>
  cancelBtn && (
    <ButtonLink {...getBtnAction(cancelBtn)} color="secondary">
      {cancelBtn.text}
    </ButtonLink>
  );

const renderSubmitBtn = (submitBtn: IButtonProps, formId?: string) =>
  submitBtn && (
    <Button {...getBtnAction(submitBtn)} form={formId} size="sm">
      {submitBtn.text}
    </Button>
  );

export const FormFooter: React.FC<IProps> = ({
  cancelBtn,
  formId,
  submitBtn,
}: IProps) => {
  return (
    <S.Footer>
      {renderCancelBtn(cancelBtn)}
      {renderSubmitBtn(submitBtn, formId)}
    </S.Footer>
  );
};