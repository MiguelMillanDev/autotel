interface CustomButtonProps {
    label: string;
    className?: string;
    onClick: () => void;
    disabled?: boolean;  // Añadir la propiedad disabled
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick, className, disabled }) => {
    return (
        <button 
            onClick={onClick} 
            className={`w-full py-3 px-5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center rounded-lg shadow-md transition duration-300 transform hover:scale-105 ${className || ''}`}
            disabled={disabled}  // Usar la propiedad disabled
        >
            {label}
        </button>
    );
}

export default CustomButton;
