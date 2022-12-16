import { Autocomplete } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'
import { LooseKeys } from '@mantine/form/lib/types'

interface CustomAutoCompleteProps  {
  placeholder: string, 
  options: string[], 
  label: string, 
  form?: UseFormReturnType<any>, 
  fieldName?: LooseKeys<any>
}

export default function CustomAutoComplete({placeholder, options, label, form, fieldName}: CustomAutoCompleteProps) {
  return (
    <Autocomplete 
      variant="unstyled" 
      aria-label={label} 
      className='mt-1'
      placeholder={placeholder}
      data={options} 
      styles={() => ({
        input: {
          minHeight: '18px',
          height: '18px'
        },
      })}
      {...form!.getInputProps(fieldName!)}
      />
  )
}
