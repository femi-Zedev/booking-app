import { DatePicker } from '@mantine/dates';
import { UseFormReturnType } from '@mantine/form';
import { LooseKeys } from '@mantine/form/lib/types';

interface CustomDatePickerProps  {
  minDate?: any, 
  maxDate?: any, 
  placeholder: string, 
  label: string,
  inputFormat?: string,
  styles?: any, 
  form?: UseFormReturnType<any>, 
  fieldName?: LooseKeys<any> 
}

export default function CustomDatePicker({ minDate, maxDate, placeholder, label, styles, form, fieldName, inputFormat="DD/MM/YYYY"  }: CustomDatePickerProps) {


  
  return (
    <DatePicker
      variant="unstyled"
      allowLevelChange={false}
      aria-label={label}
      className='mt-1'
      inputFormat={inputFormat}
      placeholder={placeholder}
      minDate={minDate}
      maxDate={maxDate}
      styles={() => (styles ? styles : {
        input: {
          minHeight: '18px',
          height: '18px'
        },
      })}
      {...form?.getInputProps(fieldName!)}
    />
  )
}
