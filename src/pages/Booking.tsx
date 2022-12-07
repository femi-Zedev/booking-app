import { Text, Button, Stack, ActionIcon, Menu } from "@mantine/core";
import HotPoll from "@/assets/hot-pool.webp";
import { IconBell } from '@tabler/icons';
import { Indicator, Group, Tabs } from '@mantine/core';
import { IconSunLow, IconMoon, IconBed, IconPlaneDeparture, IconCar } from '@tabler/icons';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from '@mantine/hooks';



function Dropdown() {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button>Toggle menu</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Currency</Menu.Label>
        <Menu.Item >Settings</Menu.Item>
        <Menu.Item >Messages</Menu.Item>
        <Menu.Item >Gallery</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}

export default function Booking() {
  const [activeTab, setActiveTab] = useState<string | null>('flight');
  const smallScreen = useMediaQuery('(min-width: 640px)');

  return (


    <>
      <section className="w-full bgImg h-[40%]" style={{ backgroundImage: `url("/assets/hot-pool.webp")` }}>
        <div className="flex px-3 md:px-12 mx-auto py-5">
          <div className="w-full">
            <div className="w-32 h-32 rounded ml-[20%] bg-white"></div>
            <h1 className="hidden mt-5 ml-[10%] lg:block text-6xl font-bold text-gray-800 leading-[4rem]">Book With Us <br /> And Enjoy your <br />Journey ! </h1>
          </div>
          <nav className="mt-1 h-10 ml-auto flex items-center justify-end gap-x-2">
            <span className="text-sm font-medium text-gray-500">USD</span>
            <span className="text-red-500">flag</span>
            <Indicator className="mr-5" radius="md" size={16} label={3} offset={7} color="red" >
              <ActionIcon variant="transparent"><IconBell size={32} /></ActionIcon>
            </Indicator>
            <div className="flex items-center gap-x-2">
              <span className="w-10 h-10 rounded-full bg-gray-500 border border-gray-50"></span>
              <p className="text-sm font-medium text-gray-500">Delowar</p>
            </div>
          </nav>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-gray-200 px-12 py-8 mx-[10%] min-h-[128px] relative bottom-[-10vh] ">
          <Tabs value={activeTab} onTabChange={setActiveTab}>
            <Tabs.List>
              <Tabs.Tab value="hotel" icon={<IconBed color={activeTab === 'hotel' ? 'black' : 'gray'} size={24} />} px={0} mr="lg" > <p className={`font-bold ${activeTab === 'hotel' ? 'text-gray-800' : 'text-gray-400'}`}>Hotel</p> </Tabs.Tab>
              <Tabs.Tab value="flight" icon={<IconPlaneDeparture color={activeTab === 'flight' ? 'black' : 'gray'} size={24} />} px={0} mr="lg" > <p className={`font-bold ${activeTab === 'flight' ? 'text-gray-800' : 'text-gray-400'}`}>Flight</p></Tabs.Tab>
              <Tabs.Tab value="car" icon={<IconCar color={activeTab === 'car' ? 'black' : 'gray'} size={24} />} px={0} mr="lg" > <p className={`font-bold ${activeTab === 'car' ? 'text-gray-800' : 'text-gray-400'}`}>Car Rental</p> </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="hotel" pt="xl">
              Gallery tab content
            </Tabs.Panel>

            <Tabs.Panel className="lg:flex justify-between gap-x-6" value="flight" pt="xl">
              <div className="grid grid-cols-12 gap-x-2 w-full">
                <div className="col-span-12 lg:col-span-3 my-3 lg:my-0 py-1 lg:py-2 pl-5 bg-blue-50 rounded-md border border-gray-300">
                  <p className="font-medium">Leaving from</p>
                  <p className="text-gray-400 text-xs lg:text-sm">Where are leaving from ?</p>
                </div>
                <div className="col-span-12 lg:col-span-3 my-3 lg:my-0 py-1 lg:py-2 pl-5 bg-blue-50 rounded-md border border-gray-300">
                  <p className="font-medium">Going to</p>
                  <p className="text-gray-400 text-xs lg:text-sm">Where are going to ?</p>
                </div>
                <div className="col-span-6 lg:col-span-3 lg:my-0 py-1 lg:py-2 pl-5 bg-blue-50 rounded-md border border-gray-300">
                  <p className="font-medium">Dearture date</p>
                  <p className="text-gray-400 text-xs lg:text-sm">Add date</p>
                </div>
                <div className="col-span-6 lg:col-span-3 lg:my-0 py-1 lg:py-2 pl-5 bg-blue-50 rounded-md border border-gray-300">
                  <p className="font-medium">Return date</p>
                  <p className="text-gray-400 text-xs lg:text-sm">Add date</p>
                </div>

                <div className="col-span-12 lg:hidden w-full my-3 lg:my-0 py-1 lg:py-2 pl-5 bg-blue-50 rounded-md border border-gray-300">
                  <p className="font-medium">Passenger</p>
                  <p className="text-gray-400 text-xs lg:text-sm">Add guest</p>
                </div>

              </div>

              <Button className="ml-auto bg-blue-500 w-full lg:w-fit" radius="md" size={smallScreen ? 'xl' : 'lg'} variant="filled">
                Search
              </Button>

            </Tabs.Panel>

            <Tabs.Panel value="car" pt="xl">
              Settings tab content
            </Tabs.Panel>
          </Tabs>
        </div>
      </section>
      <section className=" ">
        <div className="lg:flex mt-40 mx-[5%] lg:mx-[4.5rem] py-5 lg:py-12 px-5 lg:px-16 bg-blue-600 rounded-lg ">
          <div className="block text-white">
            <h2 className="text-2xl lg:text-3xl font-semibold lg:font-bold">Get our pro offers</h2>
            <p className="pt-3 text-sm lg:text-base mb-5 text-gray-300">Create a visual identity for your company, <br /> and an overall brand </p>
          </div>

          <div className="flex lg:w-[50%] rounded-md mt-auto ml-auto bg-white py-2">
            <p className="ml-5 my-auto text-sm lg:text-base text-gray-400 font-medium">Type your email here</p>
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
    </>


  )
}
