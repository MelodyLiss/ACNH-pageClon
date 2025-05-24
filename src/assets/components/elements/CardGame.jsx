import { forwardRef } from 'react';

export const CardGame = forwardRef(({
    gameImage,
    gameType,
    gameTitle,
    gameDescription,
    gameIcon,
    bgColor = "bg-red-600",
    borderColor = "border-red-600",
    direction = "flex-row",
    scaleImage = "scale-150",
}, ref) => {

    const directionStyles = {
        "flex-row": "text-end pr-4 pl-8 border-l-0",
        "flex-row-reverse": "text-start pl-4 pr-10 border-r-0"
    };

    const currentStyle = directionStyles[direction];

    return (
        <div ref={ref} className={`flex items-center justify-center m-2 gap-0 ${direction} relative`}>
            <div className={`w-[220px] h-[200px] flex justify-center overflow-hidden border-4 border-black ${direction === "flex-row" ? "border-r-0" : "border-l-0"} relative`}>
                <img src={gameImage} alt="game_image" className={`w-full h-full object-cover ${scaleImage}`} />
            </div>

            <div className={`flex items-center justify-center bg-white rounded-full p-2 -mx-10 z-10 border-8 ${borderColor}`}>
                <img src={gameIcon} alt="game_icon" className="w-12 h-12 object-contain" />
            </div>

            <div className={`${bgColor} flex flex-col items-center justify-center w-[220px] h-[200px] py-8 ${currentStyle} border-4 border-black relative`}>
                <p className="uppercase font-bold  text-sm bg-white/70 p-1 rounded-xl transition-transform duration-250 ease-in-out hover:scale-y-[-1]">{gameType}</p>
                <h4 className="text-xl font-bold text-white text-end">{gameTitle}</h4>
                <p className="text-sm text-white">{gameDescription}</p>
            </div>
        </div>
    );
});
