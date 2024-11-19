// import Image from 'next/image';

const marketItems = [
    {
        name: "Neoenergia",
        //image: '',
        price: 0.85,
        change: -0.05,
    },
    {
        name: "Enel",
        //image: '',
        price: 0.95,
        change: 0.05,
    },
    {
        name: "RaisenPower",
        //image: '',
        price: 1.03,
        change: 0.10,
    },
    {
        name: "ENGIE Brasil",
        //image: '',
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
                        <div className='w-[46px] h-[46px] bg-slate-500 rounded-lg items-center'></div>
                        {/* <Image src={i.image} alt={i.name}/> */}
                        <div>
                            <p>{i.name}</p>
                            <span className={`text-sm p-[2px] rounded-[4px] ${i.change < 0 ? 'text-[#C83529] bg-[#572925]' : 'text-[#34A853] bg-[#1B4332]'}`}>   {i.change > 0 ? `+${i.change}%` : `${i.change}%`}
                            </span>
                        </div>
                    </div>
                    <div>
                        <p className='text-right'>R$ {i.price}</p>
                        <span className='text-sm text-cinza'>Preço por kWh</span>
                    </div>
               </div> 
            ))}
        </div>
    );
};