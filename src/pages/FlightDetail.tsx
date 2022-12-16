import Footer from '@/components/Footer';
import NavSection from '@/components/NavSection'
import SubscribeSection from '@/components/SubscribeSection'
import PassengerDropdown from '@/forms/components/PassengerDropdown';
import FlightForm from '@/forms/FlightForm';
import { Anchor, Breadcrumbs, Button, Card, CardSection, Container, Divider, Grid, Input, Select, Space, Text, Image } from '@mantine/core';
import { IconChevronDown, IconChevronRight, IconEdit } from '@tabler/icons';
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import CustomSelect from '@/forms/components/CustomSelect';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Countries from '@/assets/countries.json';
import { useForm } from '@mantine/form';
import EditIcon from '@/components/Icons/EditIcon';
import PlusIcon from '@/components/Icons/PlusIcon';
import { DatePicker } from '@mantine/dates';
import FlightListItem from '@/components/FlightListItem';

const FlightDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const smallScreen = useMediaQuery('(min-width: 640px)');
    const [totalPassenger, setTotalPassenger] = useState(1);
    const previousRouteUrl = useLocation().state?.from || '/';
    const [countries, setCountries] = useState<any>([]);
    const [phones, setPhones] = useState<any>([]);
    const miles = [
        { label: '0', value: 0 },
        { label: '10000', value: 10000 },
        { label: '20000', value: 20000 },
    ];
    const [flight, setFlight] = useState<any>([
        {
            id: 1,
            departure: 'Dhaka',
            arrival: 'Dubai',
            departureDate: '2022-12-25',
            arrivalDate: '2021-10-10',
            departureTime: '10:00 PM',
            arrivalTime: '10:00 AM',
            price: 100,
            airline: 'Air France',
            airlineLogo: 'data:image/png;base64,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',
            airPort: 'DXB',
            duration: '10h 00m',
            stops: 1,
            stopsCities: ['London'],
            class: 'Economy',
            classLogo: 'data:image/png;base64,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',
        },
        {
            id: 2,
            departure: 'Dubai',
            arrival: 'Dhaka',
            departureDate: '2022-12-28',
            arrivalDate: '2021-10-10',
            departureTime: '10:00 PM',
            arrivalTime: '10:00 AM',
            price: 100,
            airline: 'Air Emirates',
            airlineLogo: 'https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo-700x394.png',
            airPort: 'Dubai AirPort',
            duration: '10h 00m',
            stops: 0,
            stopsCities: [],
            class: 'Economy',
            classLogo: 'data:image/png;base64,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',
        },
    ]);

    const items = [
        { title: 'Home', href: '/' },
        { title: 'Flight', href: previousRouteUrl },
        { title: 'Flight details', href: 'javascript:void(0)' },
    ].map((item, index) => (
        <Anchor className="text-black last:text-gray-500" href={item.href} key={index}>
            {item.title}
        </Anchor>
    ));

    const form = {
        passengers: [
            {
                inputs: [
                    {
                        label: 'First name',
                        name: 'firstname',
                        type: 'text',
                        placeholder: 'Enter passenger first name',
                        show: true,
                        semiWidth: true,
                    },
                    {
                        label: 'Last name',
                        name: 'lastname',
                        type: 'text',
                        placeholder: 'Enter passenger last name',
                        show: true,
                        semiWidth: true,
                    },
                    {
                        label: 'Gender',
                        name: 'gender',
                        type: 'text',
                        placeholder: 'Enter passenger gender',
                        show: true,
                        semiWidth: true,
                    },
                    {
                        label: 'Birthday',
                        name: 'birthday',
                        type: 'date',
                        minDate: new Date(),
                        maxDate: '',
                        placeholder: 'Enter passenger birth day',
                        show: true,
                        semiWidth: true,
                    },
                    {
                        label: 'Nationality',
                        name: 'nationality',
                        type: 'select',
                        optionsList: countries,
                        placeholder: 'Enter passenger nationality',
                        show: true,
                        semiWidth: true,
                    },
                    {
                        label: 'Passport Number',
                        name: 'passportNumber',
                        type: 'text',
                        placeholder: 'Enter passenger passport number',
                        show: true,
                        semiWidth: true,
                    },
                    {
                        label: 'Date of expiration',
                        name: 'expirationDate',
                        type: 'date',
                        minDate: new Date(),
                        maxDate: '',
                        placeholder: 'Enter passenger date of expiration',
                        show: true,
                        semiWidth: true,
                    },
                    {
                        label: 'Miles',
                        name: 'miles',
                        type: 'select',
                        optionsList: miles,
                        placeholder: 'Enter passenger miles',
                        show: true,
                        semiWidth: true,
                    },
                    {
                        label: 'Miles registration number',
                        name: 'milesRegistrationNumber',
                        type: 'text',
                        placeholder: 'Enter passenger miles registration number',
                        show: true,
                        semiWidth: true,
                    }
                ]
            }
        ],
        personal_info: [
            {
                label: 'Enter an email',
                name: 'email',
                type: 'text',
                placeholder: 'Your email',
                show: true,
                semiWidth: true,
            },
            {
                label: 'Enter The Confirm Email ',
                name: 'confirmEmail',
                type: 'text',
                placeholder: 'Retype your email',
                show: true,
                semiWidth: true,
            },
            {
                label: 'Enter an address name',
                name: 'address',
                type: 'text',
                placeholder: 'Your address',
                show: true,
                semiWidth: true,
            },
            {
                label: 'Enter a city name',
                name: 'city',
                type: 'text',
                placeholder: 'Your city',
                show: true,
                semiWidth: true,
            },
            {
                label: 'Country',
                name: 'country',
                type: 'select',
                optionsList: countries,
                placeholder: 'Your country',
                show: true,
                semiWidth: true,
            },
            {
                label: 'Enter password',
                name: 'password',
                type: 'password',
                placeholder: 'Your password',
                show: true,
                semiWidth: true,
            },
            {
                label: 'Country code',
                name: 'countryCode',
                type: 'select',
                optionsList: phones,
                placeholder: 'Your country code',
                show: true,
                semiWidth: true,
            },
            {
                label: 'Enter a phone number',
                name: 'phone',
                type: 'text',
                placeholder: 'Your phone',
                show: true,
                semiWidth: true,
            }
        ],
    };

    const useform = useForm({
        initialValues: {},
        validate: {},
    });

    const handleForm = (values: any) => {
        console.log("🚀 ~ file: FlightDetail.tsx:145 ~ handleForm ~ values", values)
    };

    const fillInput = (input: any, index: number) => {
        switch (input.type) {
            case 'text':
            case 'password':
                return <div className={`flex flex-col lg:pl-0 pr-4 ${input.semiWidth && 'md:w-1/2'}`}>
                    <Input.Wrapper
                        key={index}
                        className="flex w-full flex-col my-4 lg:ml-0 ml-4"
                        label={input.label}
                        styles={(theme) => ({
                            label: {
                                fontWeight: 700,
                                lineHeight: '21px',
                                color: '#84878B',
                                fontSize: '16px',
                                marginBottom: '12px'
                            },
                        })
                        }
                    >
                        <Input
                            name={input.name}
                            type={input.type}
                            placeholder={input.placeholder}
                            size="md"
                            radius="md"
                        />
                    </Input.Wrapper>
                </div>;
            case 'select':
                return <div className={`flex w-full flex-col lg:pl-0 pr-4 ${input.semiWidth && 'md:w-1/2'}`}>
                    <Select
                        size="md"
                        radius="md"
                        label={input.label}
                        name={input.name}
                        className="my-4"
                        placeholder={input.placeholder}
                        data={input.optionsList}
                        styles={(theme) => ({
                            label: {
                                fontWeight: 700,
                                lineHeight: '21px',
                                color: '#84878B',
                                fontSize: '16px',
                                marginBottom: '12px'
                            },
                        })
                        } />
                </div>;
            case 'date':
                return <div className={`flex w-full flex-col lg:pl-0 pr-4 ${input.semiWidth && 'md:w-1/2'}`}>
                    <DatePicker
                        radius="md"
                        size='md'
                        label={input.label}
                        aria-label={input.label}
                        name={input.name}
                        className="my-4"
                        placeholder={input.placeholder}
                        minDate={input.minDate}
                        maxDate={input.maxDate}
                        styles={(theme) => ({
                            input: {
                                marginTop: '0px'
                            },
                            label: {
                                fontWeight: 700,
                                lineHeight: '21px',
                                color: '#84878B',
                                fontSize: '16px',
                                marginBottom: '12px'
                            },
                        })
                        }
                    />
                </div>;
        };
    };

    useEffect(() => {
        setCountries(Countries.map((country: any) => ({ label: country.name, value: country.code })));
        setPhones(Countries.map((phone: any) => ({ label: phone.dial_code, value: phone.dial_code })));
    }, []);

    const renderRemainingHours = (departureDate: string, time: string) => {
        const now = new Date();
        const departureDateTime = new Date(`${departureDate} ${time}`);
        const diff = departureDateTime.getTime() - now.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        if (hours > 0 && minutes > 0) {
            return `${hours}h ${minutes}m`;
        } else if (minutes) {
            return `${minutes}m`;
        }
    };

    return (
        <main className="bg-light">
            <div className="bg-lighter">
                <NavSection withIconImage={false} />

                <Breadcrumbs className="flex px-3 md:px-12 mx-auto py-5 text-sm ml-6 sm:ml-8" separator={<IconChevronRight />}>{items}</Breadcrumbs>

                <Space h={150} />
            </div>

            <div className="mx-[5%] lg:mx-auto bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-gray-200 px-12 py-8 min-h-[128px] -mt-20 max-w-7xl">
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

            <div className="px-[5%] lg:px-[9%] mt-24">

                <form onSubmit={useform.onSubmit((values) => handleForm(values))}>
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-12 lg:col-span-8 space-y-16">
                            <Card withBorder radius="lg" className=" space-y-3 space-x-2">
                                {flight.map((flightData: any, index: number) => (
                                    <FlightListItem data={flightData} changeFlight={index <= 0} />
                                ))}
                            </Card>

                            {form.passengers.map((passenger, index) => (
                                <Card withBorder radius="lg" className="space-y-3 space-x-2">
                                    <CardSection className="flex justify-between items-center">
                                        <Text weight={500} className="text-2xl ml-10" mt="lg" >Passenger Details</Text>
                                    </CardSection>

                                    <CardSection px={16} py={4} >
                                        <div className="flex flex-wrap justify-between items-center">
                                            {passenger.inputs.map((input, index) => (
                                                fillInput(input, index)
                                            ))}
                                        </div>
                                    </CardSection>
                                </Card>
                            ))}

                            <div className="flex flex-wrap">
                                {form.passengers.map((input, index) => (
                                    <Card withBorder radius="lg" className="w-fit space-y-3 space-x-2 mr-4 px-8">
                                        {`${index < 10 ? '0' : ''}${index + 1}`}.
                                        <br />
                                        Adulte
                                    </Card>
                                ))}
                                <Card withBorder radius="lg" className="w-fit space-y-3 space-x-2 pr-16">
                                    {`${form.passengers.length < 10 ? '0' : ''}${form.passengers.length + 1}`}.
                                    <br />
                                    <div className="justify-center text-center w-full">
                                        <PlusIcon />
                                    </div>
                                </Card>
                            </div>

                            <Card withBorder radius="lg" className=" space-y-3 space-x-2">
                                <CardSection className="flex justify-between items-center px-10" >
                                    <Text weight={500}  className="text-2xl" mt="lg">Contact Details</Text>
                                    <Button className="mt-auto lg:w-fit" color="gray" leftIcon={<EditIcon />}
                                        radius={smallScreen ? 'xl' : 'sm'} variant="outline">
                                        Edit
                                    </Button>
                                </CardSection>

                                <CardSection px={16} py={4}>
                                    <div className="flex flex-wrap justify-between items-center">
                                        {form.personal_info.map((input, index) => (
                                            fillInput(input, index)
                                        ))}
                                    </div>
                                </CardSection>
                            </Card>

                        </div>

                        <div className="col-span-12 lg:col-span-4">
                            <Card withBorder radius="lg" p={0}>
                                <CardSection className='mx-10 my-6'>
                                    <Text weight={500} size="lg" mt="md">Price Details</Text>

                                    <div className="flex justify-between items-center">
                                        <Text weight={500} size="md" mt="md" color="gray">1x Passenger</Text>
                                        <Text weight={400} size="md" mt="md">$350</Text>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <Text weight={500} size="md" mt="md" color="gray">Tax and fee</Text>
                                        <Text weight={400} size="md" mt="md">$8</Text>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <Text weight={500} size="md" mt="md" color="gray">Service free</Text>
                                        <Text weight={400} size="md" mt="md">$2</Text>
                                    </div>

                                    <Space h={12} />

                                    <div className="flex justify-between items-center bg-[#878CFF]/20 px-6 py-2 rounded-xl">
                                        <Text weight={500} size="md">Total</Text>
                                        <Text weight={500} size="md">$360</Text>
                                    </div>
                                </CardSection>

                                <Divider />

                                <CardSection className='mx-10 my-6'>
                                    <div className="flex">
                                        <Text weight={500} size="lg" mt="md">Passengers</Text>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <Text weight={500} size="md" mt="md" color="gray">1x adult 2 children</Text>
                                    </div>
                                </CardSection>

                                <Divider />

                                <CardSection className='mx-10 my-6'>
                                    <div className="flex">
                                        <Text weight={500} size="lg" mt="md">Check-in baggage</Text>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <Text weight={500} size="md" mt="md" color="gray">Depature</Text>
                                        <Text weight={400} size="md" mt="md">3 bags ( 120g total)</Text>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <Text weight={500} size="md" mt="md" color="gray">Return</Text>
                                        <Text weight={400} size="md" mt="md">3 bags ( 120g total)</Text>
                                    </div>
                                </CardSection>

                                <Divider />

                                <CardSection className='mx-10 my-6'>
                                    <Text weight={500} size="lg" mt="md">Services</Text>
                                    <div className="flex justify-between items-center">
                                        <Text weight={400} size="md" my="md" color="gray">No extra services selected</Text>
                                    </div>
                                </CardSection>

                                </Card>
                        </div>
                    </div>
                    <div className="flex justify-start mt-5 lg:mt-24">
                        <Button className="bg-blue-500 w-full lg:w-fit" color="blue" radius={smallScreen ? 'xl' : 'sm'} fullWidth={!smallScreen} onClick={() => navigate(`/flight-place/${id}`)}>
                            Continue
                        </Button>
                    </div>
                </form>

            </div >



            <SubscribeSection />
            <Footer />
        </main >
    )
}

export default FlightDetail