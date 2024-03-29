import { Button, Card, Image, Space } from "@mantine/core"
import { IconArrowRight } from "@tabler/icons"
import { useNavigate } from "react-router-dom";

const FlightCard = ({ data, setOpened }: any) => {
    const navigate = useNavigate();
    const renderDate = (date: Date) => {
        return Intl.DateTimeFormat('en-US', { month: 'short', weekday: 'short', day: 'numeric' }).format(new Date(date))
    };

    return (
        <Card withBorder radius="lg" className="w-full h-full space-y-6">
            <div className="flex items-center" onClick={setOpened}>
                {data.departure}
                <IconArrowRight />
                {data.arrival}
                <Space w={20} />
                <p className="text-sm text-gray-400">{renderDate(data.departureDate)}</p>
            </div>
            <div className="flex flex-row space-x-6 justify-center items-center">
                <div className="flex w-full flex-row justify-between" onClick={setOpened}>
                    <div className="flex flex-col">
                        <Image width={80} src={data.airlineLogo} alt={data.airline} />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-lg">DAB</p>
                        <p className="text-sm text-gray-400 font-medium">{data.departureTime}</p>
                    </div>
                </div>
                <div className="flex w-full flex-row justify-between">
                    <div className="flex flex-col justify-center items-center" onClick={setOpened}>
                        <p className="text-lg">DXB</p>
                        <p className="text-sm text-gray-400 font-medium">{data.arrivalTime}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-xl" onClick={setOpened}>${data.price}</p>
                        <p className="text-lg font-medium">
                            <Button className="bg-blue-500 w-full lg:w-fit" color="blue" variant="filled" size="xs" role="button" radius={'xl'}
                                onClick={() => navigate('/flight-details/' + data.id)}>
                                Book Now
                            </Button>
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default FlightCard