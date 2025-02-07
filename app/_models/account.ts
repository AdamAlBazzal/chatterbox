type Account = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

interface AccountFormState {
  errors?: StringMap;
  successMessage?: string;
  data?: any;
  blurs?: StringToBooleanMap;
}

interface StringMap {
  [key: string]: string;
}

interface StringToBooleanMap {
  [key: string]: boolean;
}
