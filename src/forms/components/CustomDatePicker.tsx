import { DatePicker } from '@mantine/dates';

export default function CustomDatePicker({ minDate, maxDate, placeholder, label }: { minDate?: any, maxDate?: any, placeholder: string, label: string }) {
  return (
    <DatePicker
      variant="unstyled"
      aria-label={label}
      className='mt-1'
      placeholder={placeholder} 
      minDate={minDate}
      maxDate={maxDate}
      styles={() => ({
        input: {
          minHeight: '18px',
          height: '18px'
        },
      })}
    />
  )
}
