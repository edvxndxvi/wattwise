'use client';
import { useRouter } from 'next/navigation';
import { useState } from "react";
import axios from 'axios';

import Image from 'next/image';

import logo from '../../../../public/assets/svg/logo.svg';
import googleIcon from '../../../../public/assets/svg/google-icon.svg';
import appleIcon from '../../../../public/assets/svg/apple-icon.svg';
import { SocialLoginButton } from '@/components/SocialLoginButton';

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
          const response = await axios.post('http://localhost:8080/WattWise_war/api/rest/login', {
              email,
              senha,
          });

          if (response.data) {
              sessionStorage.setItem('user', email);
              console.log(response);
              router.push('/visaoGeral');
          } else {
              alert("Email ou senha incorretos!");
          }
      } catch (error) {
          console.error("Erro ao fazer login:", error);
          alert("Ocorreu um erro ao tentar fazer login. Tente novamente.");
      }
  };
  return (
    <>
      <section className="login-bg bg-cover bg-center min-w-screen min-h-screen">
        <div className="py-16 px-4 max-w-[500px] mx-auto">
          <form className="flex flex-col px-8 py-16 bg-glass backdrop-blur-3xl rounded-2xl border-solid border-[1px] border-[#ffffff10]" onSubmit={handleLogin}>
            <div className="pb-16">
              <Image src={logo} alt="Logo" className='place-self-center mb-3'/>
              <p className="text-center font-medium text-3xl">WattWise</p>
            </div>
            <div className="flex flex-col gap-6">
              <input type="email" placeholder="Email" className="bg-[#181918] text-base px-6 py-4 rounded-2xl outline-none" onChange={(e) => setEmail(e.target.value)}/>
              <input type="password" placeholder="Senha" className="bg-[#181918] text-base px-6 py-4 rounded-2xl outline-none" onChange={(e) => setSenha(e.target.value)}/>
            </div>
            <a href="" className="mt-3 mb-6 text-right text-[#D9D9D9] hover:text-white transition-colors">Esqueceu a senha?</a>
            <button className="bg-[#181918] w-full flex-1 text-base px-6 py-4 rounded-2xl hover:bg-[#212221] transition-colors" type='submit'>LOGIN</button>
            <span className="text-center text-sm text-[#454545] py-8 relative sm:before:content-[''] sm:before:w-[130px] sm:before:h-[1px] sm:before:bg-gradient-to-r before:from-[#1e1e1f] sm:before:via-[#454545] sm:before:to-[#1e1e1f] sm:before:absolute sm:before:left-0 sm:before:top-10 sm:after:content-[''] sm:after:w-[130px] sm:after:h-[1px] sm:after:bg-gradient-to-r sm:after:from-[#1e1e1f] sm:after:via-[#454545] sm:after:to-[#1e1e1f] sm:after:absolute sm:after:right-0 sm:after:top-10">Ou faça login com</span>
            <div className='flex gap-8 justify-between mb-8'>
              <SocialLoginButton iconSrc={googleIcon} title="Google" />
              <SocialLoginButton iconSrc={appleIcon} title="Apple" />
            </div>
            <p className='text-[#D9D9D9]'>Não possui uma conta? <a href="/signUp" className='font-bold hover:text-white'>Criar uma agora.</a></p>
          </form>
        </div>
      </section>
    </>
  );
}
