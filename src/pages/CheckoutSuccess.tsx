import NavSection from '@/components/NavSection'
import SubscribeSection from '@/components/SubscribeSection'
import Footer from '@/components/Footer';
import React from 'react'
import { Anchor, Breadcrumbs, Button } from '@mantine/core';
import { IconArticle, IconCalendarEvent, IconChevronRight, IconPlane, IconTicket, IconWallet } from '@tabler/icons';
import Icon from '@/components/Icon';

export default function CheckoutSuccess() {
  const items = [
    { title: 'Flight', href: '/flight' },
    { title: 'Flight list', href: 'javascript:void(0)' },
    { title: 'Flight details', href: 'javascript:void(0)' },
    { title: 'Confirm and pay', href: 'javascript:void(0)' },
    { title: 'Congratulations', href: 'javascript:void(0)' },

  ].map((item, index) => (
    <Anchor className="text-black last:text-gray-500" href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  return (
    <div className='bg-gray-100'>
      <NavSection withIconImage={false} />


      <section className='px-[5%] lg:px-[10%] mx-auto py-5'>
        <div className="flex">
          <div className="">
            <Breadcrumbs className="hidden lg:flex mx-auto py-5 text-sm font-medium" separator={<IconChevronRight className='stroke-[3px]' size={16} />}>{items}</Breadcrumbs>
            <h4 className='font-bold text-2xl lg:text-3xl text-gray-700 pt-10 border-b-2 border-solid border-gray-100' >Congratulations!</h4>
            <h3 className='font-medium text-3xl lg:text-5xl text-gray-800 pt-5 border-b-2 border-solid border-gray-100' >Your trip has been booked!</h3>

            <hr className="hidden lg:block h-[2px] my-5 w-full bg-gray-100 "></hr>
            <div className="flex items-center justify-between lg:justify-start  lg:gap-x-3">
              <h4 className='font-bold text-2xl lg:text-3xl text-gray-800'>AKL</h4>
              <p className='font-bold text-gray-400 text-4xl mb-5 tracking-wide'>.....</p>
              <IconPlane size={32} color="blue" />
              <p className='font-bold text-gray-400 text-4xl mb-5 tracking-wide'>.....</p>
              <h4 className='font-bold text-2xl lg:text-3xl text-gray-800'>SGN</h4>
            </div>
            <span className="flex items-center mt-1 gap-x-2">
              <Icon icon='star' color="#FFC542" height={18} />
              <p className='text-sm text-gray-400'>4.8 <span className=' text-gray-500'>(122 reviews)</span>  <span className='ml-10 text-gray-500'>1 Baggoge + Meal</span> </p>
            </span>
          </div>
          

          <img className='hidden lg:block absolute w-[500px] right-0 top-0 ' src="/assets/bagage.png" alt="" />

        </div>


        <div className="grid grid-cols-12">
          <div className="col-span-12  lg:col-span-5 mt-5 border-t border-gray-100 border-solid">

            <div className="flex space-x-5 my-5 w-full">
              <div className='w-full rounded-xl bg-gray-200 lg:my-0 py-1 pb-4 lg:py-2  px-4'>
                <p className="font-medium text-sm">Dates</p>
                <p className='text-gray-400'>May 15 - 22, 2021</p>
              </div>
              <div className='w-full rounded-xl bg-gray-200 lg:my-0 py-1 pb-4 lg:py-2 px-4'>
                <p className="font-medium text-sm">Travellers</p>
                <p className='text-gray-400'>1 passenger</p>
              </div>
            </div>

            <div className='rounded-lg bg-gray-200 lg:my-0 p-5'>
              <h4 className="font-bold text-2xl mb-6 text-gray-800">Reserve details</h4>

              <span className='flex items-center mb-5'>
                <IconTicket className='text-gray-500' size={20} />
                <p className='ml-3 text-gray-500'>Promo Code</p>
                <p className='ml-auto font-medium'>FD_86668</p>
              </span>
              <span className='flex items-center mb-5'>
                <IconCalendarEvent className='text-gray-500' size={20} />
                <p className='ml-3 text-gray-500'>Date</p>
                <p className='ml-auto font-medium'>30 Apr, 2021</p>
              </span>
              <span className='flex items-center mb-5'>
                <IconArticle className='text-gray-500' size={20} />
                <p className='ml-3 text-gray-500'>Total</p>
                <p className='ml-auto font-medium'>300$</p>
              </span>
              <span className='flex items-center mb-5'>
                <IconWallet className='text-gray-500' size={20} />
                <p className='ml-3 text-gray-500'>Payment method</p>
                <p className='ml-auto font-medium'>Credit card</p>
              </span>
            </div>
            


          </div>

          <div className="col-span-12 lg:col-span-7 my-5 lg:my-0">
            <img className='lg:ml-14 rounded-2xl h-full w-full max-w-[600px]' src="/assets/plane-wing.png" alt="" />
          </div>
          <Button className='col-span-12 bg-blue-500 mt-5 w-fit' radius="xl" size="lg"> 
            Go to your home 
          </Button>
        </div>

      </section>

      <SubscribeSection />
      <Footer />


    </div>
  )
}
