import Image from "next/image";
import Link from "next/link";

import lightModeIcon from "../../public/assets/svg/lightMode-icon.svg";
import notificationIcon from "../../public/assets/svg/notification-icon.svg";
import membersIcon from "../../public/assets/svg/integrantes-icon.svg";

export const HeaderBar = () => {
    return (
        <header className="py-6 px-4 bg-bg2 w-full">
            <div className="flex items-center justify-end gap-4 sm:gap-8">
                <button className="p-2 border-solid border-[1px] border-border rounded-full hover:bg-background transition-colors">
                    <Image src={lightModeIcon} alt="Light Mode icon" />
                </button>

                <button className="p-2 border-solid border-[1px] border-border rounded-full hover:bg-background transition-colors">
                    <Image src={notificationIcon} alt="Notification icon" />
                </button>

                <Link  href='/integrantes' className="flex items-center gap-2 p-1 pr-4 border-solid border-[1px] border-border rounded-full hover:bg-background transition-colors">
                    <Image src={membersIcon} alt="Integrantes icon" className="w-8 h-8 rounded-full"/>
                        <p className="text-sm text-start">Integrantes</p>
                </Link >
            </div>
        </header>
    );
};