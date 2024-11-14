interface LogoutIconProps {
    color: string;
}

export const LogoutIcon = ({ color }: LogoutIconProps) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.35294 16.2V18.3C9.35294 18.857 9.57605 19.3911 9.97319 19.7849C10.3703 20.1788 10.909 20.4 11.4706 20.4L18.8824 20.4C19.444 20.4 19.9826 20.1788 20.3798 19.7849C20.7769 19.3911 21 18.857 21 18.3L21 5.7C21 5.14305 20.7769 4.6089 20.3798 4.21508C19.9826 3.82125 19.444 3.6 18.8824 3.6L11.4706 3.6C10.909 3.6 10.3703 3.82125 9.97319 4.21508C9.57605 4.6089 9.35294 5.14304 9.35294 5.7V7.8M15.7059 12L3 12M3 12L6.17647 15.15M3 12L6.17647 8.85" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    );
};