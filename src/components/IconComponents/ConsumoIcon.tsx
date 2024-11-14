interface ConsumoIconProps {
    color: string;
}

export const ConsumoIcon = ({ color }: ConsumoIconProps) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.9435 21.088V3.91199C14.9435 3.3597 14.4958 2.91199 13.9435 2.91199H9.88528C9.333 2.91199 8.88528 3.3597 8.88528 3.91199V21.088M14.9435 21.088L14.9419 10.7681C14.9418 10.2158 15.3896 9.76799 15.9419 9.76799H20C20.5523 9.76799 21 10.2157 21 10.768V20.088C21 20.6403 20.5523 21.088 20 21.088H14.9435ZM14.9435 21.088H8.88528M8.88528 21.088V16.088C8.88528 15.5357 8.43757 15.088 7.88528 15.088H4C3.44771 15.088 3 15.5357 3 16.088V20.088C3 20.6403 3.44771 21.088 4 21.088H8.88528Z" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    );
};