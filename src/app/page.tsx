"use client";
import { redirect } from 'next/navigation';


export default function HomePage() {
  //const { isAuthenticated } = useAuth();

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     router.push('/dashboard');
  //   } else {
  //     router.push('/auth/login');
  //   }
  // }, [isAuthenticated, router]);
  redirect('/auth/login');


  return null; 
}