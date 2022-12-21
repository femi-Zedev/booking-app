import Icon from '@/components/Icon';
import NavSection from '@/components/NavSection'
import { ActionIcon, Menu, Anchor, Breadcrumbs, Button, Input, Progress, Select } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { IconCake, IconChevronRight, IconGenderMale, IconHome, IconMail, IconArrowsLeftRight, IconTrash } from '@tabler/icons';
import { IconPencil } from '@tabler/icons';
import { IconCheck } from '@tabler/icons';
import { useEffect, useState } from 'react';
import Countries from '@/assets/countries.json';
import SubscribeSection from '@/components/SubscribeSection';
import Footer from '@/components/Footer';
import { useNavigate } from "react-router-dom";


const ProgressChip = ({ icon, text, className }: { icon?: string, text: string, className?: string }) => {
  return (
    <div className={`flex items-center w-fit py-1 px-3 rounded-full bg-blue-200 ${className}`} >
      {icon && <Icon icon={icon} height={16} color='#3B71FE' />}
      <p className="text-gray-800 text-xs lg:text-sm">{text} </p>
    </div>
  )
}

export default function Profile() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState<any>([]);
  const genders = ['Male', 'Female']

  const profileCompletion = 70;

  const items = [
    { title: 'Home', href: '/' },
    { title: 'Profile', href: 'javascript:void(0)' },

  ].map((item, index) => (
    <Anchor className="text-gray-700 last:text-gray-500" href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  function getIcon(name: string) {
    switch (name) {
      case 'home':
        return (<IconHome size={20} />)

      case 'mail':
        return (<IconMail size={20} />)

      case 'cake':
        return (<IconCake size={20} />)

      case 'gender':
        return (<IconGenderMale size={20} />)
    }
  }

  const personalForm = [
    {
      icon: 'home',
      label: 'Live in',
      name: 'country',
      type: 'select',
      optionsList: countries,
      placeholder: 'Zuichi, Switzerland',
      show: true,
      semiWidth: true,
    },
    {
      icon: 'home',
      label: 'Street adress',
      name: 'adress',
      type: 'text',
      placeholder: '245 Crosswind Drive',
      show: true,
      semiWidth: true,
    },
    {
      icon: 'mail',
      label: 'Email adress',
      name: 'email',
      type: 'text',
      placeholder: 'john@due.com',
      show: true,
      semiWidth: false,
    },
    {
      icon: 'cake',
      label: 'Date of birth',
      name: 'birthday',
      type: 'date',
      minDate: '',
      maxDate: new Date(),
      placeholder: '07.12.1997',
      show: true,
      semiWidth: true,
    },
    {
      icon: 'gender',
      label: 'Gender',
      name: 'gender',
      type: 'select',
      optionsList: genders,
      placeholder: 'Male',
      show: true,
      semiWidth: true,
    },
  ]

  const fillInput = (input: any, index: number) => {
    switch (input.type) {
      case 'select':
        return (
          <div className={`col-span-12 lg:pl-0 pr-4 ${input.semiWidth ? 'md:col-span-6' : 'md:col-span-12'}`}>
            <Select
              icon={getIcon(input.icon)}
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
              icon={getIcon(input.icon)}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              size="md"
              radius="md"
              styles={(theme) => ({
                input: {
                  backgroundColor: 'transparent' 
                }})}
            />
          </Input.Wrapper>
        </div>;
      case 'date':
        return <div className={`col-span-12 lg:pl-0 pr-4 ${input.semiWidth ? 'md:col-span-6' : 'md:col-span-12'}`}>
          <DatePicker
            icon={getIcon(input.icon)}
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

  useEffect(() => {
    setCountries(Countries.map((country: any) => ({ label: country.name, value: country.code })));
  }, []);



  return (
    <div className='bg-gray-100'>
      <NavSection withIconImage={false} />

      <section className='px-[5%] lg:px-[10%] mx-auto py-5 lg:w-[90%]'>
        <div className="">
          <div className="hidden lg:block">
            <Breadcrumbs className="hidden lg:flex mx-auto py-5 text-sm font-medium" separator={<IconChevronRight className='stroke-[3px]' size={16} />}>{items}</Breadcrumbs>
          </div>

          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12 lg:col-span-4 space-y-16">
              <div className="bg-white p-7 rounded-2xl border-2 border-solid border-purple-100 text-center">
                <div className="relative w-fit mx-auto">
                  <img src='/assets/user-profile.png' className='rounded-full w-40 h-40' />
                  <Menu shadow="md" width={150} >
                    <Menu.Target>
                      <ActionIcon className='bg-gray-200 absolute border border-gray-200 border-solid bottom-0 right-2' color="gray" radius="xl" variant="filled" size="xl" >
                        <IconPencil className='' size={22} color='gray' />
                      </ActionIcon>
                    </Menu.Target>

                    <Menu.Dropdown>
                      <Menu.Item icon={<IconArrowsLeftRight size={14} />}>Change photo</Menu.Item>
                      <Menu.Item color="red" icon={<IconTrash size={14} />}>Delete photo</Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </div>

                <h3 className="text-2xl text-gray-800 font-bold mt-5">Johnathan Due</h3>

                <div className='flex items-center w-fit my-6 mx-auto py-2 px-6 gap-x-3 rounded-full bg-gray-100'>
                  <IconCheck size={22} color='gray' />
                  <p className="text-gray-400 text-sm">Identity verified</p>
                </div>

                <div className="w-full py-6 border-t-2 border-solid border-gray-100 space-y-6 text-sm">
                  <span className="flex justify-between">
                    <p className='text-gray-700'>From</p>
                    <p className='text-gray-400'>United State</p>
                  </span>
                  <span className="flex justify-between">
                    <p className='text-gray-700'>Member since</p>
                    <p className='text-gray-400'>21-12-2022</p>
                  </span>
                </div>

                <Button className='bg-blue-500' fullWidth radius="xl" rightIcon={<IconPencil size={18} />} >
                  Edit my data
                </Button>

              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 p-4">
              <h2 className="text-4xl text-gray-800 font-bold">My profile</h2>

              <hr className="h-[2px] mt-8 w-full"></hr>

              <div className="my-8 bg-white py-5 px-6 shadow-lg shadow-gray-200 border border-stone-100 rounded-2xl">
                <div className="grid grid-cols-12 items-center justify-between">
                  <p className="col-span-12 lg:col-span-4 text-gray-700 font-normal text-lg">Complete your profile</p>
                  <div className="mt-3 lg:mt-0 col-span-10 lg:col-span-7">
                    <Progress color='blue' className='lg:w-[95%] lg:ml-3' label='' value={profileCompletion} />
                  </div>
                  <p className="mt-3 lg:mt-0 col-span-2 lg:col-span-1 text-gray-700 text-right font-medium">{profileCompletion}%</p>
                </div>

                <p className="text-gray-700 my-4 text-sm">Get the best out of  TripGuide by adding the remaining details!</p>
                <div className="grid grid-rows-2 grid-flow-col-dense lg:flex mb-3 gap-3 ">
                  <ProgressChip icon='check' text='Verified email ID' />
                  <ProgressChip icon='check' text='Verified mobile Number' />
                  <ProgressChip className='mx-auto lg:mx-0' icon='add' text='Complete Basic Info' />
                </div>
              </div>

              <span className="flex items-center justify-between">
                <p className="text-gray-700 font-semibold text-lg">Hi, I'm Johnathan Due</p>
                <Button className="mt-auto lg:w-fit" color="gray" radius="xl" variant="outline" onClick={()=>navigate('/profile-settings')}>
                  Edit <span className='hidden lg:block ml-1'>your profile</span>
                </Button>
              </span>


              <div className="grid grid-cols-12 gap-2 mt-4">
                {personalForm.map((input, index) => (
                  fillInput(input, index)
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
      <SubscribeSection />
      <Footer />
    </div>
  )
}
