import { Select, Styles } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons'
import React from 'react'

interface CustomSelectProps { 
  placeholder?: string, 
  options: Array<string>, 
  label?: string, 
  defaultValue: string,
  className?: string,
  style?: Styles<any>
}

export default function CustomSelect({placeholder, options, label, defaultValue, className, style}: CustomSelectProps) {

  
  return (
    <Select
    variant="unstyled" 
    aria-label={label} 
    className='mt-1'
    placeholder={placeholder} 
    defaultValue={defaultValue}
    rightSection={<IconChevronDown color='gray' size={16} />}
    rightSectionWidth={30}
    styles={ { ...style, rightSection: { pointerEvents: 'none' }}  }
    data={options} 
    />
  )
}
