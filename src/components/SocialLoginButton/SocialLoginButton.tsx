import Image from 'next/image';

interface SocialLoginButtonProps {
    iconSrc: string;
    title: string;
}

export const SocialLoginButton = ({ iconSrc, title }: SocialLoginButtonProps) => {
    return (
        <div className='bg-[#181918] text-base  py-4 rounded-2xl flex items-center justify-center gap-3 flex-1 cursor-pointer'>
            <Image src={iconSrc} alt={`${title} icon`} width={22} height={22} />
            <p>{title}</p>
        </div>
    );
};