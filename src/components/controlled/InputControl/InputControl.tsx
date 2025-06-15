import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
import { Input } from '@/components/ui';
import { InputType } from '@/types';

type InputControlProps<TFieldValues extends FieldValues> = {
  label: string;
  placeholder?: string;
  isRequired?: boolean;
  type?: InputType;
  icon?: React.ReactNode; // NEW PROP\
  disabled?: boolean;
} & UseControllerProps<TFieldValues, FieldPath<TFieldValues>>;

export const InputControl = <TFieldValues extends FieldValues>({
  name,
  control,
  rules,
  isRequired,
  label,
  placeholder,
  type = InputType.Text,
  icon,
  disabled,
}: InputControlProps<TFieldValues>) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ name, control, rules });

  return (
    <div>
      <Input
        id={name}
        label={label}
        isRequired={isRequired}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        icon={icon} // pass to Input
      />
      {error && (
        <p className='text-sm text-red-500 mt-1 sticky'>{error.message}</p>
      )}
    </div>
  );
};
