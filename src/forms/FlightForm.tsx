import { Button } from "@mantine/core";
import { useMediaQuery } from '@mantine/hooks';



export default function FlightForm() {
  const smallScreen = useMediaQuery('(min-width: 640px)');
  return (
    <div className="lg:flex justify-between gap-x-6">
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

    </div>
  )
}
