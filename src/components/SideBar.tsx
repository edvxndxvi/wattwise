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
        <aside className='py-6 px-2 lg:px-8 bg-bg2 h-screen relative'>
            <div className='flex items-center gap-4 mb-6 before:absolute before:content[""] before:w-[1px] before:h-[60px] before:bg-gradient-to-b before:from-bg2 before:via-background before:to-bg2 before:right-0 before:z-10'>
                <div className='w-10 h-10 bg-primary rounded-lg'></div>
                <span className='text-2xl hidden lg:block'>WattWise</span>
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
                            <p className='hidden lg:block'>Visão Geral</p>
                        </Link>
                    </li>
                    <li>
                        <Link href='/consumo' className={`flex items-center gap-4 font-medium p-2 rounded-lg w-full ${
                        currentPath === '/consumo' ? 'bg-primary text-p2' : 'text-cinza hover:bg-background hover:text-text transition-colors'
                        }`}>
                            <ConsumoIcon
                                color={currentPath === '/consumo' ? '#111111' : 'currentColor'}
                            />
                            <p className='hidden lg:block'>Consumo atual</p>
                            </Link>
                    </li>
                    <li>
                        <Link href='/dispositivos' className={`flex items-center gap-4 font-medium p-2 rounded-lg w-full ${
                        currentPath === '/dispositivos' ? 'bg-primary text-p2' : 'text-cinza hover:bg-background hover:text-text transition-colors'
                        }`}>
                            <DispositivoIcon color={currentPath === '/dispositivos' ? '#111111' : 'currentColor'} />
                            <p className='hidden lg:block'>Dispositivos</p>
                            </Link>
                    </li>
                </ul>
            </nav>
            <div className='w-full h-[1px] bg-gradient-to-r from-bg2 via-background to-bg2'></div>
            <footer className='flex flex-col gap-4 mt-8'>
                <Link href='' className='flex items-center gap-4 text-cinza font-medium p-2 rounded-lg hover:bg-background hover:text-text transition-colors'>
                    <ConfiguracaoIcon color='currentColor' />
                    <p className='hidden lg:block'>Configurações</p>
                </Link>
                <Link href='' className='flex items-center gap-4 text-cinza font-medium p-2 rounded-lg hover:bg-background hover:text-text transition-colors'>
                    <LogoutIcon color='currentColor' />
                    <p className='hidden lg:block'>Logout</p>
                </Link>
            </footer>
        </aside>
    );
};