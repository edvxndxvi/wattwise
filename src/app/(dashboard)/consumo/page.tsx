"use client";
import { PdfIcon } from '@/components/IconComponents/PdfIcon';
import { usePDF } from 'react-to-pdf';

export default function Consumo() {
    const { toPDF, targetRef } = usePDF({filename: 'consumoDiario.pdf'});
    return (
        <div className="p-8">
            <div className="bg-glass rounded-2xl p-4 flex flex-col">
                <h2 className="text-md sm:text-xl mb-8">Consumo Diário</h2>
                <button onClick={() => toPDF()} className='self-end flex gap-2 items-center p-2 rounded-lg text-cinza hover:bg-primary hover:text-background transition-colors mb-4'><PdfIcon color='currentColor'/>Gerar PDF</button>
                <div className="overflow-x-auto rounded-2xl" ref={targetRef}>
                    <table className="w-full text-base text-left rtl:text-right text-cinza">
                        <thead className="bg-background font-medium">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-text">Dispositivo</th>
                                <th scope="col" className="px-6 py-3 text-text">Categoria</th>
                                <th scope="col" className="px-6 py-3 text-text">Consumo kWh</th>
                                <th scope="col" className="px-6 py-3 text-text">Precificação Gerada</th>
                                <th scope="col" className="px-6 py-3 text-text">Ultima utilização</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr className="even:bg-background">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">Geladeira</td>
                                <td className="px-6 py-4">Eletrodoméstico</td>
                                <td className="px-6 py-4">2.5</td>
                                <td className="px-6 py-4">R$ 3.00</td>
                                <td className="px-6 py-4">Utilização corrente</td>
                            </tr>
                            <tr className="even:bg-background">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">Lâmpada Inteligente</td>
                                <td className="px-6 py-4">Iluminação</td>
                                <td className="px-6 py-4">0.4</td>
                                <td className="px-6 py-4">R$ 0.50</td>
                                <td className="px-6 py-4">12:52</td>
                            </tr>
                            <tr className="even:bg-background">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">Televisão</td>
                                <td className="px-6 py-4">Eletrodoméstico</td>
                                <td className="px-6 py-4">1.2</td>
                                <td className="px-6 py-4">R$ 1.80</td>
                                <td className="px-6 py-4">13:20</td>
                            </tr>
                            <tr className="even:bg-background">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">Ar Condicionado</td>
                                <td className="px-6 py-4">Ventilação</td>
                                <td className="px-6 py-4">3.0</td>
                                <td className="px-6 py-4">R$ 5.00</td>
                                <td className="px-6 py-4">Em uso</td>
                            </tr>
                            <tr className="even:bg-background">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">Desktop</td>
                                <td className="px-6 py-4">Eletrônico</td>
                                <td className="px-6 py-4">1.5</td>
                                <td className="px-6 py-4">R$ 2.00</td>
                                <td className="px-6 py-4">Em uso</td>
                            </tr>
                            <tr className="even:bg-background">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">Máquina de Lavar</td>
                                <td className="px-6 py-4">Eletrodoméstico</td>
                                <td className="px-6 py-4">2.0</td>
                                <td className="px-6 py-4">R$ 3.50</td>
                                <td className="px-6 py-4">10:30</td>
                            </tr>
                            <tr className="even:bg-background">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">Micro-ondas</td>
                                <td className="px-6 py-4">Eletrodoméstico</td>
                                <td className="px-6 py-4">0.8</td>
                                <td className="px-6 py-4">R$ 1.20</td>
                                <td className="px-6 py-4">14:10</td>
                            </tr>
                            <tr className="even:bg-background">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap ">Carregador de Celular</td>
                                <td className="px-6 py-4">Eletrônico</td>
                                <td className="px-6 py-4">0.1</td>
                                <td className="px-6 py-4">R$ 0.15</td>
                                <td className="px-6 py-4">15:00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
  }