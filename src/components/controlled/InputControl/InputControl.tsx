//core
import {
  FieldPath,
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';
//components
import { Input } from '@/components/ui';
//other
import { InputType } from '@/types';

type InputControlProps<TFieldValues extends FieldValues> = {
  label: string;
  placeholder?: string;
  type?: InputType;
} & UseControllerProps<TFieldValues, FieldPath<TFieldValues>>;

export const InputControl = <TFieldValues extends FieldValues>({
  name,
  control,
  rules,
  label,
  placeholder,
  type = InputType.Text,
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
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && (
        <p className='text-sm text-red-500 mt-1 sticky'>{error.message}</p>
      )}
    </div>
  );
};
