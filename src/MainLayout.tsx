import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import NavSection from './components/NavSection';
import SubscribeSection from './components/SubscribeSection';
import { Tabs } from '@mantine/core';
import { IconBed, IconPlaneDeparture, IconCar } from '@tabler/icons';
import FlightForm from './forms/FlightForm';
import { Outlet } from 'react-router-dom';
import { useLocation } from "react-router-dom";

export default function MainLayout() {

  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string | null>('flight');

  function getTabForm(tab: string) {
    switch (tab) {

      case 'hotel':
        return <div> Booking hotel  </div>

      case 'flight':
        return <FlightForm />

      case 'car':
        return <div>  Rent a car </div>

      default:
        return <FlightForm />;
    }
  }

  useEffect(() => {
    console.log(location);
    const str = location.pathname.slice(1)
    'hotel car flight'.includes(str) ? setActiveTab(str) : ''
  }, [location.pathname])
  

  return (
    <>
      <section className="w-full bgImg h-[40%]" style={{ backgroundImage: `url("/assets/hot-pool.webp")` }}>
        <NavSection />
        <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-gray-200 px-12 py-8 mx-[10%] min-h-[128px] relative bottom-[-10vh] ">
          <Tabs value={activeTab} onTabChange={setActiveTab}>
            <Tabs.List>
              <Tabs.Tab value='hotel' icon={<IconBed color={activeTab === 'hotel' ? 'black' : 'gray'} size={24} />} px={0} mr="lg" > <p className={`font-bold ${activeTab === 'hotel' ? 'text-gray-800' : 'text-gray-400'}`}>Hotel</p> </Tabs.Tab>
              <Tabs.Tab value='flight' icon={<IconPlaneDeparture color={activeTab === 'flight' ? 'black' : 'gray'} size={24} />} px={0} mr="lg" > <p className={`font-bold ${activeTab === 'flight' ? 'text-gray-800' : 'text-gray-400'}`}>Flight</p></Tabs.Tab>
              <Tabs.Tab value='car' icon={<IconCar color={activeTab === 'car' ? 'black' : 'gray'} size={24} />} px={0} mr="lg" > <p className={`font-bold ${activeTab === 'car' ? 'text-gray-800' : 'text-gray-400'}`}>Car Rental</p> </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value='hotel' pt="xl">
              {getTabForm('hotel')}
            </Tabs.Panel>

            <Tabs.Panel value='flight' pt="xl">
              {getTabForm('flight')}
            </Tabs.Panel>

            <Tabs.Panel value='car' pt="xl">
              {getTabForm('car')}
            </Tabs.Panel>
          </Tabs>
        </div>
      </section>
      <section className='container px-[10%]'>
        <Outlet />
      </section>
      <SubscribeSection />
      <Footer />
    </>


  )
}
