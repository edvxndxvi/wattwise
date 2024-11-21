"use client";
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, Cell, Tooltip, ResponsiveContainer } from 'recharts';



export default class ExpenseChart extends PureComponent{
    state = {
        data: [
          {
            name: 'Julho',
            gasto: 4000,
          },
          {
            name: 'Junho',
            gasto: 3000,
          },
          {
            name: 'Agosto',
            gasto: 2000,
          },
          {
            name: 'Setembro',
            gasto: 2780,
          },
          {
            name: 'Outubro',
            gasto: 1890,
          },
        ],
        hoverIndex: null,  
      };
    
      handleMouseEnter = (index: number) => {
        this.setState({
          hoverIndex: index,  // Atualiza o índice do hover
        });
      };
    
      handleMouseLeave = () => {
        this.setState({
          hoverIndex: null,  // Reseta o índice do hover
        });
      };

    render(){
        const { hoverIndex, data } = this.state;

        return (
            <div className='bg-glass rounded-2xl w-full h-full p-4'>
                <div className='mb-4'>
                    <h2 className='text-md sm:text-xl'>Gastos nos meses anteriores</h2>
                </div>
                <ResponsiveContainer width="100%" height={268}>
                    <BarChart width={150} height={40} data={data} >
                        <Bar dataKey="gasto" >
                        {data.map((entry, index) => (
                            <Cell
                            cursor="pointer"
                            fill={
                              index === hoverIndex
                                ? '#AEF78E'  
                                : '#363636'  
                            }
                            key={`cell-${index}`}
                            onMouseEnter={() => this.handleMouseEnter(index)} 
                            onMouseLeave={this.handleMouseLeave}  
                          />
          
                        ))}
                        </Bar>
                        <Tooltip wrapperStyle={{ color: '#131512', fontWeight:600 }} cursor={false}/>
                        <XAxis dataKey="name" stroke="#B0B0B0" />
                    </BarChart>
                </ResponsiveContainer>       
            </div>
            );
        }
};