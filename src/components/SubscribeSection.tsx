import React from 'react';
import { Button } from "@mantine/core";
import { Tabs } from '@mantine/core';
import { IconSunLow, IconMoon } from '@tabler/icons';




export default function SubscribeSection() {
  return (
    <section className=" ">
      <div className="lg:flex mt-40 mx-[5%] lg:mx-[9%] py-5 lg:py-12 px-5 lg:px-16 bg-blue-600 rounded-xl ">
        <div className="block text-white">
          <h2 className="text-2xl lg:text-5xl font-semibold lg:font-bold">Get our pro offers</h2>
          <p className="pt-3 text-sm lg:text-base lg:mt-5 mb-5 text-gray-300">Create a visual identity for your company, <br /> and an overall brand </p>
        </div>

        <div className="flex lg:w-[50%] rounded-md mt-auto ml-auto bg-white py-2 shadow-lg">
          <input className="ml-5 my-auto text-sm lg:text-base text-gray-400 font-medium outline-none" placeholder="Type your email here" />
          <Button className="ml-auto mr-2 bg-gray-600" radius="md" color="gray" size="lg" variant="filled">
            Subscribe
          </Button>
        </div>
      </div>

      <div className="hidden lg:block mt-5 text-center">
        <h4 className="text-3xl font-bold text-blue-700">Teska travel corporate</h4>
        <p className="my-5 text-gray-400 font-medium">This is the team that specializes in <br /> making sure in the find it a <br /> your interior looks cool</p>
      </div>


      <Tabs className="hidden lg:block" variant="pills" defaultValue="gallery">
        <Tabs.List className="justify-center">
          <Tabs.Tab value="gallery" px="sm"  > <IconSunLow size={24} /></Tabs.Tab>
          <Tabs.Tab value="messages" px="sm" ><IconMoon size={24} /> </Tabs.Tab>
        </Tabs.List>
      </Tabs>


    </section>
  )
}
