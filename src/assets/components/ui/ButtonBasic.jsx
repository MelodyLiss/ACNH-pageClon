export const ButtonBasic = ({
    Text,
    bgColor = "bg-red-600",
    hoverBgColor = "hover:bg-red-800",
    textColor = "text-amber-200",
    width = "w-80",
    padding = "px-4 py-2",
    className = "",
    noTextShadow = false,
    ...props
}) => {
    return (
        <button 
            className={`${bgColor} ${hoverBgColor} ${textColor} ${padding} text-xl font-bold shadow-xl ${!noTextShadow ? '[text-shadow:_0_4px_4px_rgb(100_50_20_/_0.8)]' : ''} rounded-xl transition-all duration-300 ${width} mx-auto block mb-4 ${className} hover:cursor-pointer`}
            {...props}
        >
            {Text}
        </button>
    )
}
