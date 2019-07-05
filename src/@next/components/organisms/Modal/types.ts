export interface IProps {
  title: string;
  hide: () => void;
  cancelBtnText: string;
  children: React.ReactNode;
  submitBtnText: string;
  loading: boolean;
  formId?: string;
  show: boolean;
}
