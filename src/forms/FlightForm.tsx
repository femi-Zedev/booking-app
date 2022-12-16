import { Autocomplete, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from '@mantine/hooks';
import { IconChevronDown } from "@tabler/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomAutoComplete from "./components/CustomAutoComplete";
import CustomDatePicker from "./components/CustomDatePicker";
import CustomSelect from "./components/CustomSelect";
import PassengerDropdown from "./components/PassengerDropdown";


export default function FlightForm() {
  const navigate = useNavigate();
  const smallScreen = useMediaQuery('(min-width: 640px)');
  const [totalPassenger, setTotalPassenger] = useState(1)


  const options = ['Dubai', 'Doha', 'Darling Harbour', 'Dhaka', 'Dubai International Airport']

  const form = useForm({
    initialValues: {
      leftFrom: '',
      goingTo: '',
      departureDate: new Date(),
      returnDate: null,
    }, 
    validateInputOnChange: true,
    validateInputOnBlur: true,
   
  });

  const handleSubmit = (values: any) => {
    console.log(values);
    // navigate('/result');
  };


  return (
    <div className="">
      <form onSubmit={form.onSubmit( (values) => handleSubmit(values) )} className="lg:flex justify-between gap-x-6">
        <div className="flex lg:hidden items-center ml-auto gap-x-4">
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
        <div className="grid grid-cols-12 gap-x-2 w-full">
          <div className="col-span-12 lg:col-span-3 mt-5 lg:mt-0 py-1 lg:py-2 pl-2 lg:pl-5 bg-blue-50 rounded-md border border-gray-200">
            <p className="font-medium">Leaving from</p>
            <CustomAutoComplete form={form} fieldName='leftFrom' options={options} label="Leaving from" placeholder="Where are leaving from ?" />
          </div>
          <div className="col-span-12 lg:col-span-3 mt-5 lg:mt-0 py-1 lg:py-2 pl-2 lg:pl-5 bg-blue-50 rounded-md border border-gray-200">
            <p className="font-medium">Going to</p>
            <CustomAutoComplete form={form} fieldName='goingTo' options={options} label="Going to" placeholder="Where are going to ?" />
          </div>
          <div className="col-span-6 lg:col-span-3 mt-5 lg:mt-0 py-1 lg:py-2 pl-2 lg:pl-5 bg-blue-50 rounded-md border border-gray-200">
            <p className="font-medium">Departure date</p>
            <CustomDatePicker form={form} fieldName='departureDate' minDate={new Date}  label="Departure date" placeholder="Add date" />
          </div>
          <div className="col-span-6 lg:col-span-3 mt-5 lg:mt-0 py-1 lg:py-2 pl-2 lg:pl-5 bg-blue-50 rounded-md border border-gray-200">
            <p className="font-medium">Return date</p>
            <CustomDatePicker form={form} fieldName='returnDate' label="Return date" minDate={form.values.departureDate} placeholder="Add date" />
          </div>
        </div>

        <Button type="submit" className="ml-auto mt-8 lg:mt-0 bg-blue-500 w-full lg:w-fit" radius="md" size={smallScreen ? 'xl' : 'lg'} variant="filled">
          Search
        </Button>

      </form>
    </div>
  )
}
