import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import NavSection from './components/NavSection';
import SubscribeSection from './components/SubscribeSection';
import { Tabs } from '@mantine/core';
import FlightForm from './forms/FlightForm';
import { Outlet, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";

import { IconChevronDown } from '@tabler/icons';
import PassengerDropdown from './forms/components/PassengerDropdown';
import Icon from './components/Icon';
import CustomSelect from './forms/components/CustomSelect';


export default function MainLayout() {
  
 
 

  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<string | null>('flight');
  const [totalPassenger, setTotalPassenger] = useState(1)

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
    const str = location.pathname.slice(1);
    str === 'hotel' || str === 'car' || str === 'flight' ? setActiveTab(str) : '';
  }, [location.pathname])


  return (
    <>
      <section className="w-full bg-no-repeat bg-cover" style={{ backgroundImage: `url("/assets/bg1.png")` }}>
        <div className=" bg-cover" style={{ backgroundImage: `url("/assets/bgBlur.png")` }}>
          <NavSection />
          <div className="grid grid-cols-12 relative bottom-[-10vh]">
            <div className="col-span-1"></div>
            <div className="col-span-10 bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-gray-200 px-12 py-8 min-h-[128px]  ">
              <Tabs value={activeTab} onTabChange={(tab: string) => {setActiveTab(tab); navigate(tab)}} >
                <Tabs.List className='w-[86%] border-b border-gray-200' >
                  <Tabs.Tab value='hotel' pb="lg" icon={<Icon icon='bed' color={activeTab === 'hotel' ? 'black' : 'gray'} height={16} />} px={0} mr="lg" > <p className={`font-bold text-xs ${activeTab === 'hotel' ? 'text-gray-800' : 'text-gray-500'}`}>Hotel</p> </Tabs.Tab>
                  <Tabs.Tab value='flight' pb="lg" icon={<Icon icon='plane' color={activeTab === 'flight' ? 'black' : 'gray'} height={22} />} px={0} mr="lg" > <p className={`font-bold text-xs ${activeTab === 'flight' ? 'text-gray-800' : 'text-gray-500'}`}>Flight</p></Tabs.Tab>
                  <Tabs.Tab value='car' pb="lg" icon={<Icon icon='taxi' color={activeTab === 'car' ? 'black' : 'gray'} height={18} />} px={0} mr="lg" > <p className={`font-bold text-xs ${activeTab === 'car' ? 'text-gray-800' : 'text-gray-500'}`}>Car Rental</p> </Tabs.Tab>
                  <div className="hidden lg:flex items-center ml-auto gap-x-4">
                    <CustomSelect
                      options={['One-way', 'Round-trip', 'Round-trips']}
                      defaultValue="Round-trip"
                      style={{ input: { fontSize: '16px', fontWeight: 600, color: '#605858', width: '118px' } }} />
                    <PassengerDropdown
                      buttonComponent={
                        <span className='cursor-pointer flex items-center  gap-x-3'>
                          <p className='text-gray-600 !font-medium'>{totalPassenger} passenger(s)</p>
                          <IconChevronDown className='mt-1' color='gray' size={16} />
                        </span>
                      }
                      items={[{ label: 'Adults', caption: 'Ages 13 or above', count: 0 }, { label: 'Children', caption: 'Ages 2-12', count: 0 }, { label: 'Infants', caption: 'under 2', count: 0 }]}
                      onStateChange={(arg: any) => setTotalPassenger(arg.totalCount)}
                    />
                  </div>
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
            <div className="col-span-1">
              <img src='/assets/steward.png' className='hidden lg:block h-[550px] absolute right-10 bottom-5' />
            </div>
          </div>

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
