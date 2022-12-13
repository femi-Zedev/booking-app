import { Button, Checkbox, Grid, Input, RangeSlider, Slider } from "@mantine/core"
import { useState } from "react";

const Filters = () => {
    const [value, setValue] = useState(40);

    return (
        <Grid gutter={44} className="mt-16">
            <Grid.Col md={6} lg={3}>
                <div className="space-y-8 border-b border-gray-200 pb-8">
                    <h4>Popular Filter</h4>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 justify-between">
                            <Checkbox label="Non Stop" />
                            <span className="text-gray-400 text-xs">$2.684</span>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <Checkbox label="IndiGo (10)" />
                            <span className="text-gray-400 text-xs">$2.686</span>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <Checkbox label="Vistara (5)" />
                            <span className="text-gray-400 text-xs">$2.683</span>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <Checkbox label="Late Dispartures (5)" />
                            <span className="text-gray-400 text-xs">$2.679</span>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <Checkbox label="Go First (3)" />
                            <span className="text-gray-400 text-xs">$2.615</span>
                        </div>

                        <div className="justify-start">
                            <Button color="blue" variant="subtle" size="sm" className="mt-4 p-0"
                                styles={(theme) => ({
                                    root: {
                                        '&:hover': {
                                            backgroundColor: 'transparent'
                                        }
                                    }
                                })}>
                                See More
                            </Button>
                        </div>
                    </div>
                </div>
            </Grid.Col>
            <Grid.Col md={6} lg={3}>
                <div className="space-y-8 border-b border-gray-200 pb-8">
                    <h4>Price Range</h4>

                    <div className="flex items-center gap-2 justify-between">
                        <Slider
                            className="w-full"
                            label={(value) => `$${value}`}
                            marks={[
                                { value: 50, label: '50$' },
                                { value: 500, label: '500$' },
                              ]}
                            value={value}
                            onChange={setValue}
                            step={1}
                            min={0}
                            max={500}
                        />

                        <Input
                            placeholder="Enter Price"
                            size="sm"
                            className="w-20"
                        />
                    </div>
                </div>
            </Grid.Col>
            <Grid.Col md={6} lg={3}>
                <div className="space-y-8 border-b border-gray-200 pb-8">
                    <h4>Stops</h4>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 justify-between">
                            <Checkbox label="Non Stop" />
                            <span className="text-gray-400 text-xs">$1.564</span>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <Checkbox label="1 Stop" />
                            <span className="text-gray-400 text-xs">$1.541</span>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <Checkbox label="2+ Stop" />
                            <span className="text-gray-400 text-xs">$1.154</span>
                        </div>

                        <div className="justify-start">
                            <Button color="blue" variant="subtle" size="sm" className="mt-4 p-0"
                                styles={(theme) => ({
                                    root: {
                                        '&:hover': {
                                            backgroundColor: 'transparent'
                                        }
                                    }
                                })}>
                                See More
                            </Button>
                        </div>
                    </div>
                </div>
            </Grid.Col>
            <Grid.Col md={6} lg={3}>
                <div className="space-y-8">
                    <h4>Airlines</h4>

                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 justify-between">
                            <Checkbox label="Air India (4)" />
                            <span className="text-gray-400 text-xs">$2.684</span>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <Checkbox label="Go First (13)" />
                            <span className="text-gray-400 text-xs">$2.615</span>
                        </div>
                        <div className="flex items-center gap-2 justify-between">
                            <Checkbox label="IndiGo (24)" />
                            <span className="text-gray-400 text-xs">$2.679</span>
                        </div>

                        <div className="justify-start">
                            <Button color="blue" variant="subtle" size="sm" className="mt-4 p-0"
                                styles={(theme) => ({
                                    root: {
                                        '&:hover': {
                                            backgroundColor: 'transparent'
                                        }
                                    }
                                })}>
                                See More
                            </Button>
                        </div>
                    </div>
                </div>
            </Grid.Col>
        </Grid >
    )
}

export default Filters