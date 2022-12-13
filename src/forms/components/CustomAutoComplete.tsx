import { Autocomplete } from '@mantine/core'
import React from 'react'

export default function CustomAutoComplete({placeholder, options, label}: { placeholder: string, options: [], label: string}) {
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
      
      />
  )
}
