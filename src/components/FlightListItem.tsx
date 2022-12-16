import { Button, Card, CardSection, Grid, Input, Text, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import DotIcon from './Icons/DotIcon'
import FlightIcon from './Icons/FlightIcon'

const FlightListItem = ({ data, changeFlight }: any) => {
    const smallScreen = useMediaQuery('(min-width: 640px)');

    const renderDate = (date: Date) => {
        return Intl.DateTimeFormat('en-US', { month: 'short', weekday: 'short', day: 'numeric' }).format(new Date(date))
    };

    return (
        <>
            <CardSection p={16}>
                <div className="flex justify-between items-center border-b border-gray-300 pb-6">
                    <div>
                        <Text weight={500} size="xl" mt="md">{data.departure} To {data.arrival}</Text>
                        <Text weight={400} size="sm" mt="sm" color="gray">
                            {data.stops > 0 ? `${data.stops} stops` : 'Non stop'} | {data.duration} | {data.class} | {renderDate(data.departureDate)}
                        </Text>
                    </div>

                    {changeFlight && (<div className="flex flex-col items-end">
                        <Button className="w-full lg:w-fit bg-secondary/20 text-secondary"
                            radius={'md'} fullWidth={!smallScreen} variant="default">
                            Change Flight
                        </Button>
                    </div>)}
                </div>
            </CardSection>

            <CardSection className="flex justify-start items-center" p={16}>
                <Grid align="space-between" className="w-full mb-4 mx-0" p={0}>
                    <Grid.Col md={3} p={0}>
                        <div className="flex w-full flex-row justify-start">
                            <div className="flex flex-col">
                                <Image width={80} src={data.airlineLogo} alt={data.airline} />
                            </div>
                            <div className="flex ml-4 flex-col justify-center items-start">
                                <p className="text-lg">{data.id}</p>
                                <p className="text-sm text-gray-400 font-medium">{data.airline}</p>
                            </div>
                        </div>
                    </Grid.Col>
                    <Grid.Col md={3} p={0}>
                        <div className="flex w-full flex-row justify-between">
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-xl">{data.departureTime}</p>
                                <p className="text-sm text-gray-400 font-medium">{renderDate(data.departureDate)}</p>
                                <p className="text-sm text-gray-400 font-medium">{data.airPort}</p>
                            </div>
                        </div>
                    </Grid.Col>
                    <Grid.Col md={3} p={0}>
                        <div className="flex w-full flex-row justify-between">
                            <div className="flex flex-col justify-center items-center">
                                <p className="text-lg text-gray-400 font-medium">{data.duration}</p>
                                <p className="flex items-center">
                                    {Array(9).fill(0).map((_, i) => {
                                        // if is half of array add other icon
                                        if (i === 4) {
                                            return <FlightIcon />
                                        }
                                        return <DotIcon />
                                    })}
                                </p>
                            </div>
                        </div>
                    </Grid.Col>
                    <Grid.Col md={3} p={0}>
                        <div className="flex w-full flex-row justify-between">
                            <div className="flex flex-col justify-center items-start">
                                <p className="text-xl">{data.arrivalTime}</p>
                                <p className="text-sm text-gray-400 font-medium">{renderDate(data.arrivalDate)}</p>
                                <p className="text-sm text-gray-400 font-medium">{data.airPort}</p>
                            </div>
                        </div>
                    </Grid.Col>
                </Grid>
            </CardSection>

            <CardSection className="flex justify-start items-center" p={16}>
                <div className="flex justify-between mr-5 items-center pb-6">
                    <div>
                        <Text weight={400} size="md" mt="md">Baggoge:</Text>
                        <Text weight={400} size="sm" mt="sm" color="gray">
                            Adult
                        </Text>
                    </div>
                </div>

                <div className="flex justify-between mr-5 items-center pb-6">
                    <div>
                        <Text weight={400} size="md" mt="md">Check-In:</Text>
                        <Text weight={400} size="sm" mt="sm" color="gray">
                            20Kgs
                        </Text>
                    </div>
                </div>

                <div className="flex justify-between mr-5 items-center pb-6">
                    <div>
                        <Text weight={400} size="md" mt="md">Cabin:</Text>
                        <Text weight={400} size="sm" mt="sm" color="gray">
                            7 kg
                        </Text>
                    </div>
                </div>

                <div className="flex justify-between mr-5 items-center pb-6">
                    <div>
                        <Text weight={400} size="md" mt="md">Meals:</Text>
                        <Text weight={400} size="sm" mt="sm" color="gray">
                            Meals Not Available
                        </Text>
                    </div>
                </div>
            </CardSection>
        </>
    )
}

export default FlightListItem