"use client";
import React, { PureComponent } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Ar condicionado', value: 360 },
    { name: 'Computadores', value: 480 },
    { name: 'Outros', value: 1650 },
];
const COLORS = ['#AEF78E', '#12AB65', '#215840'];

export default class DeviceChart extends PureComponent{
    render(){
        return (
            <div className='bg-glass rounded-2xl w-full h-full p-4'>
                <div className='mb-8'>
                    <h2 className='text-md sm:text-xl'>Consumo por dispositivo</h2>
                </div>
                <div className='flex flex-col md:flex-row w-full h-full justify-between gap-4'>
                    <div className='w-1/2 h-[150px] md:h-[200px] lg:h-[250px] self-center md:self-start'>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart
                            >
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius="80%"
                                    outerRadius="100%"
                                    fill="#8884d8"
                                    paddingAngle={2}
                                    dataKey="value"
                                    cornerRadius={100}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke='none'/>
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className='md:w-1/2 h-[80%] flex flex-col justify-center text-start gap-8'>
                        {data.map((i, index) =>(
                            <div key={index} className='w-full'>
                                <div className='flex items-center gap-4 mb-1'>
                                    <div className='w-[30px] h-1 rounded-full' style={{ backgroundColor: COLORS[index] }}></div>
                                    <p className='text-cinza'>{i.name}</p>
                                </div>
                                <span className='pl-[46px]'>{i.value} kWh</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
};