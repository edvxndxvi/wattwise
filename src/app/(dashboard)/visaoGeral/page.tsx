import EnergyConsumedChart from "@/components/EnergyConsumedChart";

export default function VisaoGeral() {
    return (
        <>
            <div className="p-8">
                <div className="flex gap-8 flex-col lg:flex-row">
                    <div className='w-full lg:w-2/3 h-[400px]'>
                        <EnergyConsumedChart/>
                    </div>
                </div>
            </div>
        </>
    );
  }