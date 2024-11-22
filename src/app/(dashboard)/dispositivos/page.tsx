"use client";
import { PdfIcon } from '@/components/IconComponents/PdfIcon';
import { usePDF } from 'react-to-pdf';

export default function Dispositivos() {
    const { toPDF, targetRef } = usePDF({filename: 'dispositivos.pdf'});
    return (
        <div className="p-8">
            <div className="bg-glass rounded-2xl p-4 flex flex-col">
                <h2 className="text-md sm:text-xl mb-8">Dispositivos</h2>
                <button onClick={() => toPDF()} className='self-end flex gap-2 items-center p-2 rounded-lg text-cinza hover:bg-primary hover:text-background transition-colors mb-4'><PdfIcon color='currentColor'/>Gerar PDF</button>
                <div className="overflow-x-auto rounded-2xl" ref={targetRef}>
                    <table className="w-full text-base text-left rtl:text-right text-cinza">
                        <thead className="bg-background font-medium">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-text">Dispositivo</th>
                                <th scope="col" className="px-6 py-3 text-text">Categoria</th>
                                <th scope="col" className="px-6 py-3 text-text">Consumo total</th>
                                <th scope="col" className="px-6 py-3 text-text">Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="even:bg-background">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Geladeira</td>
                                <td className="px-6 py-4">Eletrodoméstico</td>
                                <td className="px-6 py-4">75</td>
                                <td className="px-6 py-4">Mantém alimentos refrigerados diariamente</td>
                            </tr>
                            <tr className="even:bg-background">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Lâmpada Inteligente</td>
                                <td className="px-6 py-4">Iluminação</td>
                                <td className="px-6 py-4">12</td>
                                <td className="px-6 py-4">Ilumina ambientes, controle remoto via app</td>
                            </tr>
                            <tr className="even:bg-background">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Televisão</td>
                                <td className="px-6 py-4">Eletrodoméstico</td>
                                <td className="px-6 py-4">36</td>
                                <td className="px-6 py-4">Reproduz conteúdo audiovisual</td>
                            </tr>
                            <tr className="even:bg-background">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Ar Condicionado</td>
                                <td className="px-6 py-4">Ventilação</td>
                                <td className="px-6 py-4">90</td>
                                <td className="px-6 py-4">Resfria ambientes em temperaturas altas</td>
                            </tr>
                            <tr className="even:bg-background">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Desktop</td>
                                <td className="px-6 py-4">Eletrônico</td>
                                <td className="px-6 py-4">45</td>
                                <td className="px-6 py-4">Realiza tarefas de computação diária</td>
                            </tr>
                            <tr className="even:bg-background">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Máquina de Lavar</td>
                                <td className="px-6 py-4">Eletrodoméstico</td>
                                <td className="px-6 py-4">60</td>
                                <td className="px-6 py-4">Lava roupas, incluindo ciclo de secagem</td>
                            </tr>
                            <tr className="even:bg-background">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Micro-ondas</td>
                                <td className="px-6 py-4">Eletrodoméstico</td>
                                <td className="px-6 py-4">24</td>
                                <td className="px-6 py-4">Aquece e prepara alimentos rapidamente</td>
                            </tr>
                            <tr className="even:bg-background">
                                <td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">Carregador de Celular</td>
                                <td className="px-6 py-4">Eletrônico</td>
                                <td className="px-6 py-4">3</td>
                                <td className="px-6 py-4">Carrega dispositivos móveis</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
  }