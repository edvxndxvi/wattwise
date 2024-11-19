"use client";
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jul',
    current: 160,
    sustainable: 140,
  },
  {
    name: 'Ago',
    current: 300,
    sustainable: 280,
  },
  {
    name: 'Set',
    current: 240,
    sustainable: 220,
  },
  {
    name: 'Out',
    current: 150,
    sustainable: 130,
  },
  {
    name: 'Nov',
    current: 220,
    sustainable: 180,
  },
];

export default class EnergyConsumedChart extends PureComponent{
    render(){
        return (
            <div className='bg-glass rounded-2xl w-full h-full p-4'>
                <div className='mb-4'>
                    <h2 className='text-md sm:text-xl'>Consumo atual X Consumo energia sustentável</h2>
                </div>
                <div className='w-full h-[85%] sm:h-[90%]'>
                    <ResponsiveContainer>
                        <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 0,
                            left: -25,
                            bottom: 0,
                        }}
                        >
                        <CartesianGrid stroke="#363636" vertical={false} strokeDasharray="3 5" />
                        <XAxis dataKey="name" stroke="#808080" />
                        <YAxis stroke="#808080"/>
                        <Tooltip wrapperStyle={{ color: '#131512', fontWeight:600 }}/>
                        <Area type="monotone" dataKey="current" stroke="#ADC8AE" fill="none" />
                        <Area type="monotone" dataKey="sustainable" stroke="#4CAF50" fill="#4CAF5010" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }
};