import { Select, Styles } from '@mantine/core'
import { UseFormReturnType } from '@mantine/form'
import { LooseKeys } from '@mantine/form/lib/types'
import { IconChevronDown } from '@tabler/icons'

interface CustomSelectProps {
  placeholder?: string,
  options: Array<string>,
  label?: string,
  defaultValue?: string,
  className?: string,
  style?: Styles<any>,
  form?: UseFormReturnType<any>,
  fieldName?: LooseKeys<any>
}

export default function CustomSelect({ placeholder, options, label, defaultValue, className, style, form, fieldName }: CustomSelectProps) {


  return (
    <Select
      variant="unstyled"
      aria-label={label}
      className='mt-1'
      placeholder={placeholder}
      defaultValue={defaultValue}
      rightSection={<IconChevronDown color='gray' size={16} />}
      rightSectionWidth={30}
      styles={{ ...style, rightSection: { pointerEvents: 'none' } }}
      data={options}
      {...form?.getInputProps(fieldName!)}
    />
  )
}
