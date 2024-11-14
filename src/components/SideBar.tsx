"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { VisaoGeralIcon } from './IconComponents/VisaoGeralIcon';
import { ConsumoIcon } from './IconComponents/ConsumoIcon';
import { DispositivoIcon } from './IconComponents/DispositivoIcon';
import { ConfiguracaoIcon } from './IconComponents/ConfiguracaoIcon';
import { LogoutIcon } from './IconComponents/LogoutIcon';


export const SideBar = () => {
    const currentPath = usePathname();
    return (
        <aside className='py-6 px-8 bg-bg2 h-screen'>
            <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 bg-primary rounded-lg'></div>
                <span className='text-2xl'>WattWise</span>
            </div>
            <div className='w-full h-[1px] bg-gradient-to-r from-bg2 via-background to-bg2'></div>
            <nav className='my-8'>
                <ul className='flex flex-col gap-4'>
                    <li>
                        <Link href='/visaoGeral' className={`flex items-center gap-4 font-medium p-2 rounded-lg w-full ${
                        currentPath === '/visaoGeral' ? 'bg-primary text-p2' : 'text-cinza hover:bg-background hover:text-text transition-colors'
                        }`}>
                            <VisaoGeralIcon
                                color={currentPath === '/visaoGeral' ? '#111111' : 'currentColor'}
                            />
                            Visão Geral
                        </Link>
                    </li>
                    <li>
                        <Link href='/consumo' className={`flex items-center gap-4 font-medium p-2 rounded-lg w-full ${
                        currentPath === '/consumo' ? 'bg-primary text-p2' : 'text-cinza hover:bg-background hover:text-text transition-colors'
                        }`}>
                            <ConsumoIcon
                                color={currentPath === '/consumo' ? '#111111' : 'currentColor'}
                            />
                            Consumo atual
                            </Link>
                    </li>
                    <li>
                        <Link href='/dispositivos' className={`flex items-center gap-4 font-medium p-2 rounded-lg w-full ${
                        currentPath === '/dispositivos' ? 'bg-primary text-p2' : 'text-cinza hover:bg-background hover:text-text transition-colors'
                        }`}>
                            <DispositivoIcon color={currentPath === '/dispositivos' ? '#111111' : 'currentColor'} />
                            Dispositivos
                            </Link>
                    </li>
                </ul>
            </nav>
            <div className='w-full h-[1px] bg-gradient-to-r from-bg2 via-background to-bg2'></div>
            <footer className='flex flex-col gap-4 mt-8'>
                <Link href='' className='flex items-center gap-4 text-cinza font-medium p-2 rounded-lg hover:bg-background hover:text-text transition-colors'>
                    <ConfiguracaoIcon color='currentColor' />
                    Configurações
                </Link>
                <Link href='' className='flex items-center gap-4 text-cinza font-medium p-2 rounded-lg hover:bg-background hover:text-text transition-colors'>
                    <LogoutIcon color='currentColor' />
                    Logout
                </Link>
            </footer>
        </aside>
    );
};