'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ClientComponent({ children }: { children: React.ReactNode }) {
    const router = useRouter();

    useEffect(() => {
        const login = sessionStorage.getItem('user');
        if (!login) {
            router.push('/login'); 
        }
    }, [router]);

    return <>{children}</>;
}