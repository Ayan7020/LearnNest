

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    label: string;
    inputType: string;
    typePassword?: boolean;
    ErrorMessage?: any;
  }