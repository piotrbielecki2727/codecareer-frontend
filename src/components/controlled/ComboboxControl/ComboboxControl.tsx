import { Combobox, Option } from '@/components/ui';
import {
  FieldValues,
  useController,
  UseControllerProps,
} from 'react-hook-form';

interface ComboboxControlProps<T extends FieldValues>
  extends UseControllerProps<T> {
  label: string;
  options: Option[];
  multiSelect?: boolean;
  placeholder?: string;
}

export const ComboboxControl = <T extends FieldValues>({
  control,
  name,
  rules,
  label,
  options,
  multiSelect = false,
  placeholder,
}: ComboboxControlProps<T>) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ control, name, rules });

  return (
    <div className='space-y-2 flex flex-col'>
      <label className='text-sm font-medium'>{label}</label>
      <Combobox
        options={options}
        selected={value ?? []}
        onChange={onChange}
        multiSelect={multiSelect}
        placeholder={placeholder}
      />
      {error && <p className='text-sm text-red-500 mt-1'>{error.message}</p>}
    </div>
  );
};
