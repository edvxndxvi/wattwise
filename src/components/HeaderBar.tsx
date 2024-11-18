import Image from "next/image";

import lightModeIcon from "../../public/assets/svg/lightMode-icon.svg";
import notificationIcon from "../../public/assets/svg/notification-icon.svg";

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

                <button className="flex items-center gap-2 p-1 pr-4 border-solid border-[1px] border-border rounded-full hover:bg-background transition-colors">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                    <div>
                        <p className="text-sm text-start">Pedro Certezas</p>
                        <span className="text-xs text-cinza hidden sm:block sm:-mt-1">Olá, bem-vindo(a) de volta!</span>
                    </div>
                </button>
            </div>
        </header>
    );
};