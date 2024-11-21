import Image from 'next/image';

import edvan from '../../public/assets/images/members/edvan-github.jpg';
import romanini from '../../public/assets/images/members/rafael-romanini-github.jpg';
import rafaBezerra from '../../public/assets/images/members/rafael-bezerra-github.jpg';
import github from '../../public/assets/svg/github-icon.svg';
import linkedin from '../../public/assets/svg/linkedin-icon.svg';

const members = [
    {
        name: "Edvan Davi",
        image: edvan,
        rm: 554733,
        github: 'https://github.com/edvxndxvi',
        linkedin: 'https://www.linkedin.com/in/edvan-davi-119970236/'
    },
    {
        name: "Rafael Romanini",
        image: romanini,
        rm: 55463,
        github: "https://github.com/rafaelromanini",
        linkedin: "https://www.linkedin.com/in/rafaelromanini/"
    },
    {
        name: "Rafel Bezerra",
        image: rafaBezerra,
        rm: 557888,
        github: "https://github.com/Rafazls",
        linkedin: "https://www.linkedin.com/in/rafa-bezerra/"
    },
];

export const Members = () => {
    return (
        <div className="w-full flex flex-col md:flex-row gap-8">
            {members.map((i, index) =>(
               <div className="flex-1 bg-glass rounded-lg p-5" key={index}>
                    <div className='flex flex-col gap-2 mb-4'>
                        <Image src={i.image} alt={i.name}  width={140} height={140} className='rounded-full self-center'/>
                        <p className="text-2xl font-medium text-center">{i.name}</p>
                    </div>
                    <div className="flex flex-col text-center gap-2">
                        <p className='text-lg'>RM {i.rm}</p>
                        <span className='text-base text-cinza '>1TDSPZ</span>
                    </div>
                    <div className='mt-4 flex justify-center gap-4'>
                        <a href={i.github} target="_blank"><Image src={github} alt='Github Icon' className='transition duration-300 filter hover:grayscale hover:brightness-0 hover:invert'/></a>
                        <a href={i.linkedin} target="_blank"><Image src={linkedin} alt='Linkedin Icon' className='transition duration-300 filter hover:grayscale hover:brightness-0 hover:invert'/></a>
                    </div>
               </div> 
            ))}
        </div>
    );
};