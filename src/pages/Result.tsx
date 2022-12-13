import Filters from '@/components/Filters';
import FlightCard from '@/components/FlightCard';
import Footer from '@/components/Footer';
import NavSection from '@/components/NavSection'
import SubscribeSection from '@/components/SubscribeSection'
import PassengerDropdown from '@/forms/components/PassengerDropdown';
import FlightForm from '@/forms/FlightForm';
import { Anchor, Breadcrumbs, Button, Container, Grid, Space } from '@mantine/core';
import { IconChevronDown, IconChevronRight } from '@tabler/icons';
import { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import CustomSelect from '@/forms/components/CustomSelect';

const Result = () => {
    const smallScreen = useMediaQuery('(min-width: 640px)');
    const [totalPassenger, setTotalPassenger] = useState(1)
    const [flights, setFlights] = useState<any>([
        {
            id: 1,
            departure: 'Paris',
            arrival: 'New York',
            departureDate: '2021-10-10',
            arrivalDate: '2021-10-10',
            departureTime: '10:00 PM',
            arrivalTime: '10:00 AM',
            price: 100,
            airline: 'Air France',
            airlineLogo: 'data:image/png;base64,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',
            duration: '10h 00m',
            stops: 1,
            stopsCities: ['London'],
            class: 'Economy',
            classLogo: 'data:image/png;base64,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',
        },
        {
            id: 2,
            departure: 'Dakar',
            arrival: 'Dubai',
            departureDate: '2021-10-10',
            arrivalDate: '2021-10-10',
            departureTime: '10:00 PM',
            arrivalTime: '10:00 AM',
            price: 100,
            airline: 'Air Emirates',
            airlineLogo: 'https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo-700x394.png',
            duration: '10h 00m',
            stops: 0,
            stopsCities: [],
            class: 'Economy',
            classLogo: 'data:image/png;base64,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',
        },
        {
            id: 1,
            departure: 'Paris',
            arrival: 'New York',
            departureDate: '2021-10-10',
            arrivalDate: '2021-10-10',
            departureTime: '10:00 PM',
            arrivalTime: '10:00 AM',
            price: 100,
            airline: 'Air France',
            airlineLogo: 'https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo-700x394.png',
            duration: '10h 00m',
            stops: 1,
            stopsCities: ['London'],
            class: 'Economy',
            classLogo: 'data:image/png;base64,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',
        },
        {
            id: 1,
            departure: 'Paris',
            arrival: 'New York',
            departureDate: '2021-10-10',
            arrivalDate: '2021-10-10',
            departureTime: '10:00 PM',
            arrivalTime: '10:00 AM',
            price: 100,
            airline: 'Air France',
            airlineLogo: 'data:image/png;base64,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',
            duration: '10h 00m',
            stops: 1,
            stopsCities: ['London'],
            class: 'Economy',
            classLogo: 'data:image/png;base64,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',
        },
        {
            id: 2,
            departure: 'Dakar',
            arrival: 'Dubai',
            departureDate: '2021-10-10',
            arrivalDate: '2021-10-10',
            departureTime: '10:00 PM',
            arrivalTime: '10:00 AM',
            price: 100,
            airline: 'Air Emirates',
            airlineLogo: 'https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo-700x394.png',
            duration: '10h 00m',
            stops: 0,
            stopsCities: [],
            class: 'Economy',
            classLogo: 'data:image/png;base64,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',
        },
        {
            id: 1,
            departure: 'Paris',
            arrival: 'New York',
            departureDate: '2021-10-10',
            arrivalDate: '2021-10-10',
            departureTime: '10:00 PM',
            arrivalTime: '10:00 AM',
            price: 100,
            airline: 'Air France',
            airlineLogo: 'https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo-700x394.png',
            duration: '10h 00m',
            stops: 1,
            stopsCities: ['London'],
            class: 'Economy',
            classLogo: 'data:image/png;base64,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',
        },
        {
            id: 1,
            departure: 'Paris',
            arrival: 'New York',
            departureDate: '2021-10-10',
            arrivalDate: '2021-10-10',
            departureTime: '10:00 PM',
            arrivalTime: '10:00 AM',
            price: 100,
            airline: 'Air France',
            airlineLogo: 'data:image/png;base64,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',
            duration: '10h 00m',
            stops: 1,
            stopsCities: ['London'],
            class: 'Economy',
            classLogo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAA4VBMVEX////+AAL+AAH8//8AAADz5ufpFhj2vsL5AAD0AAD5///+//3xAAAAABQAABf7/P68vcEAACCOkZsAAB0AABAAAAjo6eptcHkAACbpAADsyMf2v76lpq+xsrbj4+UAADDz9PN1d4QAACuam6KKjZHdFBTrFA/YTlDfd3Xx3t3orajz6+jkbGnqZmHkVFTpMivolZLp0M3nRUXmNTbkm5XggHrki43ku7zmoqLqubPowrrcAADX2NnJys5SV2IrLDwTFip8f4VCRFw4OU4TGTtFRFMoKUJmZHVCRUoPFjHsh4nQY240AAAE4ElEQVRoge1Ya3eiOhQNSXTCQwEfKFYQlXF8tY7ttLX3ih3H0d65//8H3QNqR2nB3rWSNV+ylwbEyHafR84JCElISEhISEhISEj8MehoUriEQAAv0T4Pirlwv2hEAO8QK/kYjETQtgycS4zZWATtpMiAF8fvw6gczpXD2ZQI4NWu89UqeDDhz2qisRELPNP7OgIYUx/50yIyGjDlhEtJ21lhQ407q0nMm7d2PTvHs4C/d3Xtq3rUeaL3xM6qOhcRy3ODHTXio1J8+mIPImLZvMU4RZR63fF3LiLkgeGUbc/srDBjxJ8WoZbBLixU3wRYmWjuPmIz8ggON5rOndbUpix/nWKDiYhYflSZ8sanp+fqGPGXiyZF/HuVeCePoByIiGVt+sry7nqF2UyIlccsoxYcR6PFn1UnoyK+oPdehFpyzRhWcEZcwQcG5YA/L1qwCzmkzpEA3pGLU2pTepUH/qQQy7epepcaFXYnogpBOcg3MhZRDnQ0V7GSl0EMygF/XqLNXmv9u6PCRJQDhIZxLOM3jMcrGA9GItbllpHq3NLeFbM7CAYYn2dNKo/YlAhQS4bsTdU7z6miiN0BeTTyNyWwOxCxFyq4uTUI1uV7YvJmJUi7YVh5U+V/X2HKZ43/SmWShZqbuZgZInYHaDR4jaf344p9FZG5cTnIX5hF7A7MuBy82z0ersS7AxGxDHswnOnZ+K0u+MeyrmuzfU3PjGcoB/x7DF27N3JrPWZuQYB3UUvFudUeq0+Iu5Vhd7B3bk5cTYVUodskYjN5FXYrom8Nrg82zuzSXRF9qzll6Rg+j2dmiKhCidrszAWbAy3nmIIaVLjdL0fZGWQ8Ee5W1hZu7vNH4HZbfEl1opHCjXr63C+tV2GM3Ux4N1TafGqoe1HKeR4dL4LYMeFa6YPRX/fxg+VMI2OVYdX9FnDkBGh/u8xQWQ4M9274CF0NXxubT1dXnzJxdXXVmk8Crox76KAkFwI4E5hQcnMgilZC4n/BjHF5muP5ceu/tHwUWYAoQMiPTywvSI5R8j1yrGU83YriMbIg0H2r37ac/a8sy0kSDnpvYzBwP/C0ZVV6BiZUoW3UqJbqtPzdQl6tSgERHOuU2v143rq8c+DQKYcwNmhgrm1aKlFqdqsw1qmV3E17hPaMLS4nfUR/VMMjL/UcJ2xukFfvOr7vm+16xXHadg3Mtmz+sNcg/Gen2gjQuoYa5a3l+1Ej6Na9eHKQ3G4yw+xDT1u2O/PZXp7wrssr5JXWDgDtecu/YoU7fxvP+7nblFYwya/b/v4O3eaq2+02kk9kqEIHVri0yOmxMuultzX3vL0aLdkrB3nNXmznpde0Ka1uwKVR6cXqNrdg55W/LW9XVb/edA68vd1ms3mO/U6eDIWp44tiUbBr1mi1Bx5MeOv96LkJVvfKL0lctUvdaFVtgJm3vTKtdew26myR2bA7NvrHfgHioO90aXQQQSZFjNkX7XI0V6gXBIFVKvt7O1vI/04byKPr5GuPVlCwopvAopXACaI6NTtgGxTWaqazobXdL0r9RrnXbPZqEFcT6L3ZLPiA3LACf1PX+6FnrSPkrcGBThi2o9BLcicK4W5mP+z3w+RuXmj1+7HvrDWwW+FLo7+EiwmWqHX/78PD4gO0EhISEhISEhISEhISfx7/AXWbafoZkFl0AAAAAElFTkSuQmCC',
        },
        {
            id: 2,
            departure: 'Dakar',
            arrival: 'Dubai',
            departureDate: '2021-10-10',
            arrivalDate: '2021-10-10',
            departureTime: '10:00 PM',
            arrivalTime: '10:00 AM',
            price: 100,
            airline: 'Air Emirates',
            airlineLogo: 'https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo-700x394.png',
            duration: '10h 00m',
            stops: 0,
            stopsCities: [],
            class: 'Economy',
            classLogo: 'data:image/png;base64,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',
        },
        {
            id: 1,
            departure: 'Paris',
            arrival: 'New York',
            departureDate: '2021-10-10',
            arrivalDate: '2021-10-10',
            departureTime: '10:00 PM',
            arrivalTime: '10:00 AM',
            price: 100,
            airline: 'Air France',
            airlineLogo: 'https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo-700x394.png',
            duration: '10h 00m',
            stops: 1,
            stopsCities: ['London'],
            class: 'Economy',
            classLogo: 'data:image/png;base64,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',
        },
        {
            id: 1,
            departure: 'Paris',
            arrival: 'New York',
            departureDate: '2021-10-10',
            arrivalDate: '2021-10-10',
            departureTime: '10:00 PM',
            arrivalTime: '10:00 AM',
            price: 100,
            airline: 'Air France',
            airlineLogo: 'data:image/png;base64,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',
            duration: '10h 00m',
            stops: 1,
            stopsCities: ['London'],
            class: 'Economy',
            classLogo: 'data:image/png;base64,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',
        },
        {
            id: 2,
            departure: 'Dakar',
            arrival: 'Dubai',
            departureDate: '2021-10-10',
            arrivalDate: '2021-10-10',
            departureTime: '10:00 PM',
            arrivalTime: '10:00 AM',
            price: 100,
            airline: 'Air Emirates',
            airlineLogo: 'https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo-700x394.png',
            duration: '10h 00m',
            stops: 0,
            stopsCities: [],
            class: 'Economy',
            classLogo: 'data:image/png;base64,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',
        },
        {
            id: 1,
            departure: 'Paris',
            arrival: 'New York',
            departureDate: '2021-10-10',
            arrivalDate: '2021-10-10',
            departureTime: '10:00 PM',
            arrivalTime: '10:00 AM',
            price: 100,
            airline: 'Air France',
            airlineLogo: 'https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo-700x394.png',
            duration: '10h 00m',
            stops: 1,
            stopsCities: ['London'],
            class: 'Economy',
            classLogo: 'data:image/png;base64,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',
        },
        {
            id: 1,
            departure: 'Paris',
            arrival: 'New York',
            departureDate: '2021-10-10',
            arrivalDate: '2021-10-10',
            departureTime: '10:00 PM',
            arrivalTime: '10:00 AM',
            price: 100,
            airline: 'Air France',
            airlineLogo: 'data:image/png;base64,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',
            duration: '10h 00m',
            stops: 1,
            stopsCities: ['London'],
            class: 'Economy',
            classLogo: 'data:image/png;base64,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',
        },
        {
            id: 2,
            departure: 'Dakar',
            arrival: 'Dubai',
            departureDate: '2021-10-10',
            arrivalDate: '2021-10-10',
            departureTime: '10:00 PM',
            arrivalTime: '10:00 AM',
            price: 100,
            airline: 'Air Emirates',
            airlineLogo: 'https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo-700x394.png',
            duration: '10h 00m',
            stops: 0,
            stopsCities: [],
            class: 'Economy',
            classLogo: 'data:image/png;base64,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',
        },
        {
            id: 1,
            departure: 'Paris',
            arrival: 'New York',
            departureDate: '2021-10-10',
            arrivalDate: '2021-10-10',
            departureTime: '10:00 PM',
            arrivalTime: '10:00 AM',
            price: 100,
            airline: 'Air France',
            airlineLogo: 'https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo-700x394.png',
            duration: '10h 00m',
            stops: 1,
            stopsCities: ['London'],
            class: 'Economy',
            classLogo: 'data:image/png;base64,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',
        },
    ])
    const items = [
        { title: 'Home', href: '/' },
        { title: 'Flight', href: 'javascript:void(0)' },
    ].map((item, index) => (
        <Anchor className="text-black last:text-gray-500" href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));


    return (
        <main className="bg-light">
            <div className="bg-lighter">
                <NavSection withIconImage={false} />

                <Breadcrumbs className="flex px-3 md:px-12 mx-auto py-5 text-sm ml-6 sm:ml-8" separator={<IconChevronRight />}>{items}</Breadcrumbs>

                <Space h={150} />
            </div>

            <div className="mx-[6%] lg:mx-[9%] bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-gray-200 px-12 py-8 min-h-[128px] -mt-20  max-w-7xl">
                <div className="hidden lg:flex items-center ml-auto gap-x-4 pb-4">
                    <CustomSelect
                        options={['One-way', 'Round-trip', 'Round-trips']}
                        defaultValue="Round-trip"
                        style={{ input: { fontSize: '16px', fontWeight: 600, color: '#605858', width: '118px' } }} 
                        />

                    <PassengerDropdown
                        buttonComponent={
                            <span className='cursor-pointer flex items-center  gap-x-3'>
                                <p className='text-gray-600 !font-medium'>{totalPassenger} passenger(s)</p>
                                <IconChevronDown color='gray' size={16} />
                            </span>
                        }
                        onStateChange={(arg: any) => setTotalPassenger(arg.totalCount)}
                        items={[{ label: 'Adults', caption: 'Ages 13 or above', count: 0 }, { label: 'Adults', caption: 'Ages 2-12', count: 0 }, { label: 'Infants', caption: 'under 2', count: 0 }]}
                    />
                </div>

                <FlightForm />
            </div>

            <Container size={1280} className='px-[5%] lg:px-[9%] '>
                <Filters />
                <Grid gutter={10} className="mt-16">
                    {flights.map((flight: any, index: any) => (
                        <Grid.Col key={index} md={6} lg={4}>
                            <FlightCard key={index} data={flight} />
                        </Grid.Col>
                    ))}
                </Grid>
                <div className="flex justify-center">
                    <Button className='mx-auto mt-5 lg:mt-24' variant="outline" color="gray" radius={smallScreen ? 'xl' : 'sm'} fullWidth={!smallScreen} >
                        View all
                    </Button>
                </div>

            </Container>



            <SubscribeSection />
            <Footer />
        </main>
    )
}

export default Result