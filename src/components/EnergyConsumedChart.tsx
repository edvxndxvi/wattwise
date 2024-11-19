"use client";
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jul',
    current: 160,
    sustainable: 190,
  },
  {
    name: 'Ago',
    current: 300,
    sustainable: 250,
  },
  {
    name: 'Set',
    current: 240,
    sustainable: 220,
  },
  {
    name: 'Out',
    current: 150,
    sustainable: 170,
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
                    <h2 className='text-md sm:text-xl'>Consumo atual X Consumo energia sustentável (kWh)</h2>
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
                        <XAxis dataKey="name" stroke="#B0B0B0" />
                        <YAxis stroke="#B0B0B0"/>
                        <Tooltip wrapperStyle={{ color: '#131512', fontWeight:600 }}/>
                        <Area type="monotone" dataKey="current" stroke="#9C9C9C" fill="#9C9C9C30" />
                        <Area type="monotone" dataKey="sustainable" stroke="#3CC441" fill="#3CC44130" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }
};