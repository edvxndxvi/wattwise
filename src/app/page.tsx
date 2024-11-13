import googleIcon from '../../public/assets/svg/google-icon.svg';
import appleIcon from '../../public/assets/svg/apple-icon.svg';
import { SocialLoginButton } from '@/components/SocialLoginButton/SocialLoginButton';

export default function Login() {
  return (
    <>
      <section className="login-bg bg-cover bg-center min-w-screen min-h-screen">
        <div className="py-16 max-w-[500px] mx-auto">
          <form className="flex flex-col px-8 py-16 bg-glass backdrop-blur-3xl rounded-2xl border-solid border-[1px] border-[#ffffff10]">
            <div className="pb-16">
              <p className="text-center font-medium text-3xl">WattWise</p>
            </div>
            <div className="flex flex-col gap-6">
              <input type="text" placeholder="Email" className="bg-[#181918] text-base px-6 py-4 rounded-2xl outline-none"/>
              <input type="password" placeholder="Senha" className="bg-[#181918] text-base px-6 py-4 rounded-2xl outline-none"/>
            </div>
            <a href="" className="mt-3 mb-6 text-right text-[#D9D9D9] hover:text-white transition-colors">Esqueceu a senha?</a>
            <button className="bg-[#181918] text-base px-6 py-4 rounded-2xl hover:bg-[#212221] transition-colors">LOGIN</button>
            <span className="text-center text-sm text-[#454545] py-8 relative before:content-[''] before:w-[150px] before:h-[1px] before:bg-gradient-to-r before:from-[#1e1e1f] before:via-[#454545] before:to-[#1e1e1f] before:absolute before:left-0 before:top-10 after:content-[''] after:w-[150px] after:h-[1px] after:bg-gradient-to-r after:from-[#1e1e1f] after:via-[#454545] after:to-[#1e1e1f] after:absolute after:right-0 after:top-10">Ou faça login com</span>
            <div className='flex gap-8 justify-between mb-8'>
              <SocialLoginButton iconSrc={googleIcon} title="Google" />
              <SocialLoginButton iconSrc={appleIcon} title="Apple" />
            </div>
            <p className='text-[#D9D9D9]'>Não possui uma conta? <a href="" className='font-bold hover:text-white'>Criar uma agora.</a></p>
          </form>
        </div>
      </section>
    </>
  );
}
