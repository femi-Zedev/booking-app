import React from 'react';
import { Link } from "react-router-dom";
import { Tabs } from '@mantine/core';
import { IconSunLow, IconMoon } from '@tabler/icons';




export default function Footer() {
  return (
    <footer className="lg:flex justify-between mt-3 px-12 py-5">
        <div className="">
          <h3 className="text-xl lg:text-2xl font-medium">Support</h3>
          <div className="block lg:flex gap-6 mt-5">
            <Link to="" className="text-gray-400 font-normal"> <div className="my-3 text-sm lg:text-base lg:my-0">Account</div></Link>
            <Link to="" className="text-gray-400 font-normal"> <div className="my-3 text-sm lg:text-base lg:my-0">Legal</div></Link>
            <Link to="" className="text-gray-400 font-normal"> <div className="my-3 text-sm lg:text-base lg:my-0">Contact</div></Link>
            <Link to="" className="text-gray-400 font-normal"> <div className="my-3 text-sm lg:text-base lg:my-0">Terms and Condition</div></Link>
            <Link to="" className="text-gray-400 font-normal"> <div className="my-3 text-sm lg:text-base lg:my-0">Privacy Policies</div></Link>
          </div>
        </div>
        <hr className="lg:hidden h-[2px] my-5 w-full "></hr>
        <div className="">
          <h3 className="text-xl lg:text-2xl font-medium">Business</h3>
          <div className="block lg:flex gap-6 mt-5">
            <Link to="" className=" text-sm lg:text-md text-gray-400 font-normal"><div className="my-3 lg:my-0">Blog</div></Link>
            <Link to="" className=" text-sm lg:text-md text-gray-400 font-normal"><div className="my-3 lg:my-0">Travel guide</div></Link>
            <Link to="" className=" text-sm lg:text-md text-gray-400 font-normal"><div className="my-3 lg:my-0">Information</div></Link>
            <Link to="" className=" text-sm lg:text-md text-gray-400 font-normal"><div className="my-3 lg:my-0">About locato</div></Link>
          </div>
        </div>

        <div className="lg:hidden mt-5 text-center">
          <h4 className="text-3xl font-bold text-blue-700">Teska travel corporate</h4>
        </div>


        <Tabs className="lg:hidden mt-5" variant="pills" defaultValue="gallery">
          <Tabs.List className="justify-center">
            <Tabs.Tab value="gallery" px="sm"  > <IconSunLow size={24} /></Tabs.Tab>
            <Tabs.Tab value="messages" px="sm" ><IconMoon size={24} /> </Tabs.Tab>
          </Tabs.List>
        </Tabs>

      </footer>
  )
}
