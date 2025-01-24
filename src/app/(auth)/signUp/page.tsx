'use client';
/* 
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import axios from 'axios';
*/

import Image from 'next/image';

import logo from '../../../../public/assets/svg/logo.svg';
import Link from 'next/link';

export default function SignUp() {
  /*
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cep, setCep] = useState('');
  
  const handleCadastro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      nome,
      email,
      senha,
      cep,
    };

    try {
      const response = await axios.post('http://localhost:8080/WattWise_war/api/rest/usuarios', data, {
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          }
      });
      if (response.status === 201) {
          sessionStorage.setItem('user', email);
          console.log(response);
          alert("Cadastro realizado com sucesso!");
          router.push(`/visaoGeral?user=${email}`); 
      }
      if (response.status === 400){
          alert("Erro ao buscar email do cliente")
      }
      } catch (error) {
        console.error("Erro ao criar cadastro:", error);
        alert("Ocorreu um erro ao tentar cadastrar.");
      }
  };
  */

  return (
    <>
      <section className="login-bg bg-cover bg-center min-w-screen min-h-screen">
        <div className="py-16 px-4 max-w-[500px] mx-auto">
          <form className="flex flex-col px-8 py-16 bg-glass backdrop-blur-3xl rounded-2xl border-solid border-[1px] border-[#ffffff10]" /* onSubmit={handleCadastro }*/>
            <div className="pb-16">
              <Image src={logo} alt="Logo" className='place-self-center mb-3'/>
              <p className="text-center font-medium text-3xl">WattWise</p>
            </div>
            <div className="flex flex-col gap-6 pb-16">
              <input type="text" placeholder="Nome" className="bg-[#181918] text-base px-6 py-4 rounded-2xl outline-none" /* value={nome} onChange={(e) => setNome(e.target.value)} required */ />
              <input type="email" placeholder="Email" className="bg-[#181918] text-base px-6 py-4 rounded-2xl outline-none" /* value={email} onChange={(e) => setEmail(e.target.value)} *//>
              <input type="password" placeholder="Senha" className="bg-[#181918] text-base px-6 py-4 rounded-2xl outline-none" /* value={senha} onChange={(e) => setSenha(e.target.value)} *//>
              <input 
                type="text" 
                placeholder="CEP" 
                className="bg-[#181918] text-base px-6 py-4 rounded-2xl outline-none" 
                required 
                minLength={8} 
                maxLength={8} 
                /*
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                */
                />
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
