import EditIcon from '@/components/Icons/EditIcon';
import { Button, Input, Select } from '@mantine/core'
import { DatePicker } from '@mantine/dates';
import React from 'react'

const StateChip = ({ text, className }: { icon?: string, text: string, className?: string }) => {
  return (
    <div className={`flex items-center w-fit py-1 px-2 rounded-full bg-blue-50 border border-solid border-blue-300 ${className}`} >
      <p className="text-gray-800 text-xs lg:text-sm">{text} </p>
    </div>
  )
}

export default function PersonnalInfo() {

  const personalInfoForm = [
    {
      label: 'Display Name',
      name: 'display_name',
      type: 'text',
      placeholder: 'Juan Guardio',
      show: true,
      semiWidth: true,
    },
    {
      label: 'Real Name',
      name: 'name',
      type: 'text',
      placeholder: 'Johnathan Due',
      show: true,
      semiWidth: true,
    },
    {
      label: 'Gender',
      name: 'gender',
      type: 'select',
      optionsList: ['Male', 'Female'],
      placeholder: 'Male',
      show: true,
      semiWidth: true,
    },
    {
      label: 'Date of birth',
      name: 'birthday',
      type: 'date',
      minDate: '',
      maxDate: new Date(),
      placeholder: 'add date',
      show: true,
      semiWidth: true,
    },
    {
      label: 'Phone',
      name: 'phone',
      type: 'text',
      placeholder: 'Phone number',
      show: true,
      semiWidth: true,
    },
    {
      icon: 'mail',
      label: 'Email',
      name: 'email',
      type: 'text',
      placeholder: 'john@due.com',
      show: true,
      semiWidth: true,
    },
    {
      label: 'Adress',
      name: 'adress',
      type: 'text',
      placeholder: '75 paloma street',
      show: true,
      semiWidth: true,
    },
    {
      label: 'Language',
      name: 'language',
      type: 'select',
      optionsList: ['English (United State)', 'Français (France)'],
      placeholder: 'Male',
      show: true,
      semiWidth: true,
    }
  ]

  const socialInfoForm = [
    {
      label: 'Website',
      name: 'website',
      type: 'text',
      placeholder: 'Your site url',
      show: true,
      semiWidth: true,
    },
    {
      label: 'Twitter',
      name: 'twitter',
      type: 'text',
      placeholder: 'Twitter username',
      show: true,
      semiWidth: true,
      rightSection: <StateChip className='my-[2px] mr-2 ' text='Verify account' />
    }]

  const fillInput = (input: any, index: number) => {
    switch (input.type) {
      case 'select':
        return (
          <div className={`col-span-12 lg:pl-0 pr-4 ${input.semiWidth ? 'md:col-span-6' : 'md:col-span-12'}`}>
            <Select
              size="md"
              radius="md"
              label={input.label}
              name={input.name}
              className="my-4"
              placeholder={input.placeholder}
              data={input.optionsList}
              styles={(theme) => ({
                input: {
                  backgroundColor: 'transparent'
                },
                label: {
                  fontWeight: 700,
                  lineHeight: '21px',
                  color: '#84878B',
                  fontSize: '16px',
                  marginBottom: '12px'
                },
              })
              } />
          </div>);
      case 'text':
        return <div className={`col-span-12 lg:pl-0 pr-4 ${input.semiWidth ? 'md:col-span-6' : 'md:col-span-12'}`}>
          <Input.Wrapper
            key={index}
            className="flex w-full flex-col my-4 lg:ml-0"
            label={input.label}
            styles={(theme) => ({
              label: {
                fontWeight: 700,
                lineHeight: '21px',
                color: '#84878B',
                fontSize: '16px',
                marginBottom: '12px'
              },
            })
            }
          >
            <Input
              rightSection={input.rightSection}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              size="md"
              radius="md"
              styles={(theme) => ({
                rightSection: {
                  width: 'fit-content'
                },
                input: {
                  backgroundColor: 'transparent',
                }
              })}
            />
          </Input.Wrapper>
        </div>;
      case 'date':
        return <div className={`col-span-12 lg:pl-0 pr-4 ${input.semiWidth ? 'md:col-span-6' : 'md:col-span-12'}`}>
          <DatePicker
            radius="md"
            size='md'
            label={input.label}
            aria-label={input.label}
            name={input.name}
            className="my-4"
            placeholder={input.placeholder}
            minDate={input.minDate}
            maxDate={input.maxDate}
            styles={(theme) => ({
              input: {
                marginTop: '0px',
                backgroundColor: 'transparent'
              },
              label: {
                fontWeight: 700,
                lineHeight: '21px',
                color: '#84878B',
                fontSize: '16px',
                marginBottom: '12px'
              },
            })
            }
          />
        </div>;
    };
  };

  return (
    <>
      <form className='lg:w-[65%]'>
        <span className="flex items-center justify-between pr-5">
          <p className="text-gray-700 font-semibold text-xl">Account Info</p>
          <Button className="mt-auto px-5 lg:w-fit" color="gray" radius="xl" variant="outline" leftIcon={<EditIcon />}>
            Edit
          </Button>
        </span>

        <div className="grid grid-cols-12 gap-2 mt-4">
          {personalInfoForm.map((input, index) => (
            fillInput(input, index)
          ))}
        </div>

        <span className="flex items-center justify-between mt-10">
          <p className="text-gray-700 font-semibold text-xl">Social</p>
        </span>

        <div className="grid grid-cols-12 gap-2 mt-4">
          {socialInfoForm.map((input, index) => (
            fillInput(input, index)
          ))}
        </div>

        <div className="flex gap-x-5 mt-6">
          <Button color="blue" size='md' className='bg-blue-500' radius="xl" >
           Update profile
          </Button>
          <Button color="gray" size='md'  radius="xl" variant="outline">
           Cancel
          </Button>
        </div>

      </form>
    </>

  )
}
