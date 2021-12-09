export type FieldsType = {
  name?: string;
  email?: string;
  password?: string;
};

export type FormProps = {
  onSubmit: (fields: FieldsType) => Promise<void>;
  onResetPassword?: () => void;
  isSignUp?: boolean;
  isResetPassword?: boolean;
  isNewPassword?: boolean;
  isUpdateAccount?: boolean;
  loading: boolean;
};
