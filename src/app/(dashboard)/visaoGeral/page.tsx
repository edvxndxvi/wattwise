import DeviceChart from "@/components/DeviceChart";
import EnergyConsumedChart from "@/components/EnergyConsumedChart";
import { EnergyMarket } from "@/components/EnergyMarket";
import ExpenseChart from "@/components/ExpenseChat";

export default function VisaoGeral() {
    return (
        <div className="p-8 flex flex-col gap-8 ">
            <div className="flex gap-8 flex-col-reverse lg:flex-row">
                <div className='w-full lg:w-2/3 h-[400px]'>
                    <EnergyConsumedChart/>
                </div>
                <div className="w-full lg:w-1/3 h-[350px] lg:h-[400px]">
                    <div className='bg-glass rounded-2xl w-full h-full p-4 flex flex-col gap-6'>
                        <h2 className='text-md sm:text-xl'>Mercado Livre de Energia</h2>
                        <EnergyMarket/>
                    </div>
                </div>
            </div>
            <div className="flex gap-8 flex-col xl:flex-row">
                <div className='w-full xl:w-1/2 h-full xl:max-h-[350px]'>
                    <DeviceChart/>
                </div>
                <div className='w-full xl:w-1/2 h-full xl:max-h-[350px] '>
                    <ExpenseChart/>
                </div>
            </div>
        </div>
    );
  }