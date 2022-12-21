import React from 'react';
import { Indicator } from '@mantine/core';
import { ActionIcon } from "@mantine/core";
import { IconBell } from '@tabler/icons';
import { useNavigate } from "react-router-dom";




export default function NavSection({ withIconImage = true, onLightBackground = true }: { withIconImage?: boolean, onLightBackground?: boolean }) {
  
  const navigate = useNavigate();
  
  return (
    <header className="flex px-3 md:px-12 mx-auto py-5">
      {withIconImage &&
        <div className="w-full">
          <img className='ml-[15%] w-[250px] ' src='/assets/logo.png' />
          <h1 className="hidden mt-5 ml-[10%] lg:block text-7xl font-bold text-gray-800 leading-[5rem]">Book With Us <br /> And Enjoy your <br />Journey ! </h1>
        </div>
      }
      {!withIconImage &&
        <div className="w-full">
          <h2 className="text-2xl lg:text-5xl font-bold text-blue-700 ">Teska corp.</h2>
        </div>
      }
      <nav className="mt-1 h-10 ml-auto mr-3 lg:mr-10 flex items-center justify-end gap-x-3">
        <span className="text-sm font-medium text-gray-500">USD</span>
        <img className='w-6 h-6' src="/assets/language.svg" alt="" />
        <Indicator className="mr-1" radius="md" size={16} label={3} offset={7} color="red" >
          <ActionIcon variant="transparent"><IconBell size={32} /></ActionIcon>
        </Indicator>
        <div className="flex items-center gap-x-2 cursor-pointer" onClick={() => navigate('/profile')}>
          <img className="w-8 h-8 max-w-[32px] border border-gray-50" src="/assets/user.png" alt="" />
          <p className={`hidden lg:block text-sm font-medium ${onLightBackground ? 'text-gray-700' : 'text-gray-100'} `}   >Delowar</p>
        </div>
      </nav>
    </header>
  )
}
