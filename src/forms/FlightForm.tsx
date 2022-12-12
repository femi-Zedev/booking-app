import { Autocomplete, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from "react-router-dom";
import CustomAutoComplete from "./components/CustomAutoComplete";
import CustomDatePicker from "./components/CustomDatePicker";



export default function FlightForm() {
  const navigate = useNavigate();
  const smallScreen = useMediaQuery('(min-width: 640px)');

  const form = useForm({
    initialValues: {
      leftFrom: '',
      goingTo: '',
      departureDate: new Date(),
      returnDate: '',
    },
    validateInputOnChange: true

    // validate: {
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    // },
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate('/result');
  };


  return (
    <div className="">
      <form onSubmit={onSubmit} className="lg:flex justify-between gap-x-6">
        <div className="grid grid-cols-12 gap-x-2 w-full">
          <div className="col-span-12 lg:col-span-3 my-3 lg:my-0 py-1 lg:py-2 pl-5 bg-blue-50 rounded-md border border-gray-200">
            <p className="font-medium">Leaving from</p>
            <CustomAutoComplete label="Leaving from" placeholder="Where are leaving from ?" {...form.getInputProps('leftFrom')} />
          </div>
          <div className="col-span-12 lg:col-span-3 my-3 lg:my-0 py-1 lg:py-2 pl-5 bg-blue-50 rounded-md border border-gray-200">
            <p className="font-medium">Going to</p>
            <CustomAutoComplete label="Going to" placeholder="Where are going to ?" {...form.getInputProps('goingTo')} />
          </div>
          <div className="col-span-6 lg:col-span-3 lg:my-0 py-1 lg:py-2 pl-5 bg-blue-50 rounded-md border border-gray-200">
            <p className="font-medium">Departure date</p>
            <CustomDatePicker label="Departure date" placeholder="Add date" />
          </div>
          <div className="col-span-6 lg:col-span-3 lg:my-0 py-1 lg:py-2 pl-5 bg-blue-50 rounded-md border border-gray-200">
            <p className="font-medium">Return date</p>
            <CustomDatePicker label="Return date" minDate={form.values.departureDate} placeholder="Add date" />
          </div>

          <div className="col-span-12 lg:hidden w-full my-3 lg:my-0 py-1 lg:py-2 pl-5 bg-blue-50 rounded-md border border-gray-200">
            <p className="font-medium">Passenger</p>
            <p className="text-gray-400 text-xs lg:text-sm">Add guest</p>
          </div>

        </div>

        <Button type="submit" className="ml-auto bg-blue-500 w-full lg:w-fit" radius="md" size={smallScreen ? 'xl' : 'lg'} variant="filled">
          Search
        </Button>

      </form>
    </div>
  )
}
