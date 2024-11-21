import Image from 'next/image';

import neoEnergia from '../../public/assets/images/distributorLogos/neoenergia-logo.jpg';
import enel from '../../public/assets/images/distributorLogos/enel-logo.jpg';
import raisenPower from '../../public/assets/images/distributorLogos/raisenpower-logo.jpg';
import engie from '../../public/assets/images/distributorLogos/engie-logo.jpg';

const marketItems = [
    {
        name: "Neoenergia",
        image: neoEnergia,
        price: 0.85,
        change: -0.05,
    },
    {
        name: "Enel",
        image: enel,
        price: 0.95,
        change: 0.05,
    },
    {
        name: "RaisenPower",
        image: raisenPower,
        price: 1.03,
        change: 0.10,
    },
    {
        name: "ENGIE Brasil",
        image: engie,
        price: 0.70,
        change: -0.10,
    },
];

export const EnergyMarket = () => {
    return (
        <div className="w-full flex flex-col gap-8 overflow-y-auto pr-2 scroll-market">
            {marketItems.map((i, index) =>(
               <div className="flex justify-between" key={index}>
                    <div className='flex gap-2'>
                        <Image src={i.image} alt={i.name}  width={46} height={46} className='rounded-lg'/>
                        <div>
                            <p className="text-sm sm:text-base">{i.name}</p>
                            <span className={`text-sm p-[2px] rounded-[4px] ${i.change < 0 ? 'text-[#C83529] bg-[#572925]' : 'text-[#34A853] bg-[#1B4332]'}`}>   {i.change > 0 ? `+${i.change}%` : `${i.change}%`}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col text-right">
                        <p className='m:text-base'>R$ {i.price}</p>
                        <span className='text-xs sm:text-sm text-cinza '>Preço por kWh</span>
                    </div>
               </div> 
            ))}
        </div>
    );
};