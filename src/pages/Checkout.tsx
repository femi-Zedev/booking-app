import Footer from '@/components/Footer'
import Icon from '@/components/Icon'
import NavSection from '@/components/NavSection'
import SubscribeSection from '@/components/SubscribeSection'
import CustomDatePicker from '@/forms/components/CustomDatePicker'
import PassengerDropdown from '@/forms/components/PassengerDropdown'
import { Button, Checkbox, TextInput } from '@mantine/core'
import { IconChevronRight, IconEdit, IconPlane } from '@tabler/icons';

export default function Checkout() {
  return (
    <div>
      <NavSection withIconImage={false} />

      <section className='lg:px-[10%] mx-auto py-5'>
        <span className='flex items-center font-medium text-sm text-gray-500 gap-x-1'>
          <p>Flight</p> <IconChevronRight className='stroke-[3px]' size={16} />
          <p>Flight list</p> <IconChevronRight className='stroke-[3px]' size={16} />
          <p>Flight details</p> <IconChevronRight className='stroke-[3px]' size={16} />
          <p className='text-gray-300'>Confirm and pay</p>
        </span>

        <div className="grid grid-cols-12 pt-16 ">

          <div className="col-span-7">
            <form className='w-[70%]'>
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
                      <p className='cursor-pointer text-md text-gray-400'> 1 passenger</p>
                    }
                    items={[{ label: 'Adults', caption: 'Ages 13 or above' }, { label: 'Adults', caption: 'Ages 2-12' }, { label: 'Infants', caption: 'under 2' }]}
                  />
                </div>
                <IconEdit size={24} color="gray" />
              </div>

            </form>

            <h4 className='font-bold font-ui text-4xl text-gray-800 mt-6' >Credit cards</h4>

            <div className="w-fit py-6 border-b-2 border-solid border-gray-100 flex gap-x-4">
              <span className="card rounded-md border border-solid border-gray-200 w-24 h-12">
                <Icon icon='' color='#3B71FE'/>
              </span>
              <span className="card rounded-md border border-solid border-gray-200 w-24 h-12"></span>
              <span className="card rounded-md border border-solid border-gray-200 w-24 h-12"></span>
              <span className="card rounded-md border border-solid border-gray-200 w-24 h-12"></span>
              <span className="card rounded-md border border-solid border-gray-200 w-24 h-12"></span>
            </div>

            <div className="flex my-5 gap-x-5">
              <img src='/assets/card-1.png' className='' />
              <img src='/assets/card-2.png' className='' />
            </div>

            <div className="mt-5 w-[80%]">
              <TextInput label='Card Number' placeholder='9898 9898 9895 9896' variant="filled" radius="md" size="lg" />
              <div className="flex gap-x-4 mt-3 w-full">
                <TextInput className='w-full' label='Expiry Date' placeholder='MM/YY' variant="filled" radius="md" size="lg" />
                <TextInput className='w-full' label='CVC/CVV' placeholder='***' variant="filled" radius="md" size="lg" />
              </div>

              <Checkbox checked size='md' className='mt-3' label="Save card" />

              <Button className='bg-blue-500 mt-5' radius="xl" size="lg">Confirm and reserve</Button>
            </div>

          </div>

          <div className="col-span-5 h-44">
            <div className="w-[90%] border-2 border-solid border-blue-100 rounded-xl shadow-sm py-4 px-7">
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

              <div className="rounded-lg my-5 w-[90%] h-36 bg-slate-600 "></div>

              <p className='text-md text-gray-400 mb-2'>1 Baggoge + Meals </p>

              <div className="flex">
                <span className='w-full border-t border-solid border-gray-100 pt-3'>
                  <p className="text-gray-400 text-sm">Check in</p>
                  <p className="text-gray-700 text-base">May 15, 2021</p>
                </span>
                <span className='w-full border-l pl-2 mt-3 ml-2 border-solid border-gray-100'>
                  <p className="text-gray-400 text-sm">Check out</p>
                  <p className="text-gray-700 text-base">May 22, 2021</p>
                </span>
              </div>

              <p className="text-gray-400 text-sm">Travelers</p>
              <p className="text-gray-700 text-base">1 Passenger</p>

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

            <img className='mt-12 w-[800px] ' src="/assets/truck.png" alt="" />
          </div>

        </div>

      </section>

      <SubscribeSection />
      <Footer />


    </div>
  )
}
