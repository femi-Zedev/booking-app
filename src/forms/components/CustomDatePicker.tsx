import { DatePicker } from '@mantine/dates';

export default function CustomDatePicker({ minDate, maxDate, placeholder, label, name, styles }: { minDate?: any, maxDate?: any, placeholder: string, label: string, name: string, styles?: any }) {
  return (
    <DatePicker
      variant="unstyled"
      aria-label={label}
      className='mt-1'
      name={name}
      placeholder={placeholder}
      minDate={minDate}
      maxDate={maxDate}
      styles={() => (styles ? styles : {
        input: {
          minHeight: '18px',
          height: '18px'
        },
      })}
    />
  )
}
