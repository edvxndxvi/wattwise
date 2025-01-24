"use client";

/*
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
*/

import { SideBar } from "@/components/SideBar";
import { HeaderBar } from '../../components/HeaderBar';
//import ClientComponent from '@/components/ClientComponent';


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  /*
  const router = useRouter();
    useEffect(() => {
        const login = sessionStorage.getItem('user');
        if (!login) {
            router.push('/user'); 
        }
    }, [router]);
  */
    return (
      //<ClientComponent>
        <div className="flex">
          <SideBar />
          <div className="flex-1 max-h-screen overflow-y-auto costumed-scroll">
            <HeaderBar />
            {children}
            </div>
        </div>
      //</ClientComponent>
    );
  }
   
