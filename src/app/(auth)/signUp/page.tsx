'use client';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../../../public/assets/svg/logo.svg';

export default function SignUp() {
  return (
    <>
      <section className="login-bg bg-cover bg-center min-w-screen min-h-screen">
        <div className="py-16 px-4 max-w-[500px] mx-auto">
          <form className="flex flex-col px-8 py-16 bg-glass backdrop-blur-3xl rounded-2xl border-solid border-[1px] border-[#ffffff10]">
            <div className="pb-16">
              <Image src={logo} alt="Logo" className='place-self-center mb-3'/>
              <p className="text-center font-medium text-3xl">WattWise</p>
            </div>
            <div className="flex flex-col gap-6 pb-16">
              <input type="text" placeholder="Nome" className="bg-[#181918] text-base px-6 py-4 rounded-2xl outline-none"/>
              <input type="email" placeholder="Email" className="bg-[#181918] text-base px-6 py-4 rounded-2xl outline-none"/>
              <input type="password" placeholder="Senha" className="bg-[#181918] text-base px-6 py-4 rounded-2xl outline-none"/>
              <input type="text" placeholder="CEP" className="bg-[#181918] text-base px-6 py-4 rounded-2xl outline-none"/>
            </div>
            <Link href='/visaoGeral' className='w-full'>
              <button className="bg-[#181918] w-full flex-1 text-base px-6 py-4 rounded-2xl hover:bg-[#212221] transition-colors">CADASTRAR</button>
            </Link>
          </form>
        </div>
      </section>
    </>
  );
}
