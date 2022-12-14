import Footer from '@/components/Footer'
import Icon from '@/components/Icon'
import NavSection from '@/components/NavSection'
import SubscribeSection from '@/components/SubscribeSection'
import CustomDatePicker from '@/forms/components/CustomDatePicker'
import PassengerDropdown from '@/forms/components/PassengerDropdown'
import { Button, Checkbox, TextInput } from '@mantine/core'
import { IconChevronRight, IconEdit, IconPlane } from '@tabler/icons';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';

export default function Checkout() {
  const smallScreen = useMediaQuery('(min-width: 640px)');
  const [totalPassenger, setTotalPassenger] = useState(1);
  const [selectedCardOption, setSelectedCardOption] = useState('mastercard');


  const cardOption = [
    { name: 'mastercard', img: '/assets/mastercard.png' },
    { name: 'paypal', img: '/assets/paypal.png' },
    { name: 'visa', img: '' },
    { name: 'american_express', img: '' },
    { name: 'discover', img: '' },
  ]

  return (
    <div className='bg-gray-50'>
      <NavSection withIconImage={false} />

      <section className='px-[5%] lg:px-[10%] mx-auto py-5'>
        <span className='hidden lg:flex items-center font-medium text-sm text-gray-500 gap-x-1'>
          <p>Flight</p> <IconChevronRight className='stroke-[3px]' size={16} />
          <p>Flight list</p> <IconChevronRight className='stroke-[3px]' size={16} />
          <p>Flight details</p> <IconChevronRight className='stroke-[3px]' size={16} />
          <p className='text-gray-300'>Confirm and pay</p>
        </span>

        <div className="flex flex-col-reverse lg:flex-row pt-16 ">

          <div className="">
            <form className='lg:w-[70%]'>
              <h3 className='font-bold text-4xl text-gray-800 py-10 border-b-2 border-solid border-gray-100' >Confirm your Book</h3>
              <h4 className='font-bold font-ui text-4xl text-gray-800 my-6' >Your tour</h4>

              <div className="col-span-12 flex justify-between items-center my-3 py-1 lg:py-2 px-5 bg-gray-100 rounded-lg border border-gray-200">
                <div className='f'>
                  <p className="font-medium">Date</p>
                  <CustomDatePicker label="Leaving from" placeholder="June 27-30, 2020" />
                </div>
                <IconEdit size={24} color="gray" />
              </div>

              <div className="col-span-12 flex justify-between items-center my-3 py-1 lg:py-2 px-5 bg-gray-100 rounded-lg border border-gray-200">
                <div className='f'>
                  <p className="font-medium">Traveller</p>
                  <PassengerDropdown
                    buttonComponent={
                      <p className='cursor-pointer text-md text-gray-400'> {totalPassenger} passenger(s)</p>
                    }
                    onStateChange={(arg: any) => setTotalPassenger(arg.totalCount)}
                    items={[{ label: 'Adults', caption: 'Ages 13 or above', count: 0 }, { label: 'Adults', caption: 'Ages 2-12', count: 0 }, { label: 'Infants', caption: 'under 2', count: 0 }]}
                  />
                </div>
                <IconEdit size={24} color="gray" />
              </div>

            </form>

            <h4 className='font-bold font-ui text-4xl text-gray-800 mt-6' >Credit cards</h4>

            <div className="overflow-x-auto whitespace-nowrap md:overflow-hidden w-full py-6 border-b-2 border-solid border-gray-100 flex gap-x-4">
              {cardOption.map((card) => (
                <span className={`flex rounded-md border border-solid border-gray-200 w-24 min-w-[96px] h-12 relative ${selectedCardOption === card.name ? 'border border-blue-500 border-solid bg-blue-50' : 'bg-white' } ` }  onClick={() => setSelectedCardOption(card.name)} >
                  {selectedCardOption === card.name && <Icon icon='check' className='absolute -right-3 -top-2' height={16} color='#3B71FE' />}
                  <img src={card.img} alt="" className='my-2 mx-3' />
                </span>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row my-5 gap-x-5 gap-y-3">
              <img src='/assets/card-1.png' className='' />
              <img src='/assets/card-2.png' className='' />
            </div>

            <div className="mt-5 lg:w-[80%]">
              <TextInput label='Card Number' placeholder='9898 9898 9895 9896' variant="filled" radius="md" size="lg" />
              <div className="flex gap-x-4 mt-3 w-full">
                <TextInput className='w-full' label='Expiry Date' placeholder='MM/YY' variant="filled" radius="md" size="lg" />
                <TextInput className='w-full' label='CVC/CVV' placeholder='***' variant="filled" radius="md" size="lg" />
              </div>

              <Checkbox checked size='md' className='mt-3' label="Save card" />

              <Button className='bg-blue-500 mt-5' radius={smallScreen ? "xl" : 'md'} size={smallScreen ? 'xl' : 'md'}>Confirm and reserve</Button>
            </div>

          </div>

          <div className="">
            <div className="lg:w-[86%] lg:ml-auto max-w-[500px] border-2 border-solid bg-white border-blue-100 rounded-2xl shadow-sm py-4 px-7">
              <div className="flex items-center gap-x-3">
                <h4 className='font-bold text-2xl text-gray-800'>AKL</h4>
                <p className='font-bold text-gray-400 text-3xl mb-[18px]'>......</p>
                <IconPlane size={24} color="blue" />
                <p className='font-bold text-gray-400 text-3xl mb-[18px]'>......</p>
                <h4 className='font-bold text-2xl text-gray-800'>SGN</h4>
              </div>
              <span className="flex items-center mt-1 gap-x-2">
                <Icon icon='star' color="#FFC542" height={18} />
                <p className='text-sm'>4.8 <span className=' text-gray-400'>(122 reviews)</span> </p>
              </span>

              <img className='rounded-xl my-5 w-[90%] ' src="/assets/plane-wing.png" alt="" />

              <p className='text-md text-gray-400 mb-2'>1 Baggoge + Meals </p>

              <div className="flex">
                <span className='w-full border-t border-solid border-gray-100 pt-5'>
                  <p className="text-gray-400 text-sm">Check in</p>
                  <p className="text-gray-700 font-medium text-base">May 15, 2021</p>
                </span>
                <span className='w-full border-l pl-2 mt-5 ml-2 border-solid border-gray-100'>
                  <p className="text-gray-400 text-sm">Check out</p>
                  <p className="text-gray-700 font-medium text-base">May 22, 2021</p>
                </span>
              </div>

              <p className="text-gray-400 text-sm mt-4">Travelers</p>
              <p className="text-gray-700 font-medium text-base">1 Passenger</p>

              <div className="mt-5">
                <h3 className="font-bold text-2xl text-gray-800">Fare summary</h3>
                <div className='mt-8'>
                  <span className="flex px-2 justify-between my-3">
                    <p className="text-gray-400 text-base">1x Passenger</p>
                    <p className="text-gray-800 text-base font-semibold">$140</p>
                  </span>
                  <span className="flex px-2 justify-between my-3">
                    <p className="text-gray-400 text-base">Tax and fee</p>
                    <p className="text-gray-800 text-base font-semibold">$8</p>
                  </span>
                  <span className="flex px-2 justify-between my-3">
                    <p className="text-gray-400 text-base">Service fee</p>
                    <p className="text-gray-800 text-base font-semibold">$2</p>
                  </span>

                  <span className="flex px-3 py-2 bg-blue-50 justify-between my-3 rounded-md">
                    <p className="text-gray-800 text-base font-semibold">Total</p>
                    <p className="text-gray-800 text-base font-semibold">$150</p>
                  </span>
                </div>


              </div>

              <p className="w-full flex justify-center text-gray-400 text-sm my-5">Report this flight</p>
            </div>

            <img className='hidden lg:block mt-12 w-[800px] ' src="/assets/truck.png" alt="" />
          </div>

        </div>

      </section>

      <SubscribeSection />
      <Footer />


    </div>
  )
}
