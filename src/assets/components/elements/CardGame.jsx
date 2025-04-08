export const CardGame = ({
    gameImage,
    gameType ,
    gameTitle ,
    gameDescription,
    gameIcon,
    bgColor = "bg-red-600",
    borderColor = "border-red-600",
    direction = "flex-row",
    scaleImage = "scale-150",
}) => {
    return (
        <div className={`flex items-center justify-center m-2 gap-0 ${direction} relative`}>
            <div className={`w-[220px] h-[200px] flex justify-center overflow-hidden border-4 border-black ${direction === "flex-row" ? "border-r-0" : "border-l-0"} relative`}>
                <img src={gameImage} alt="game_image" className={`w-full h-full object-cover ${scaleImage}`} />
            </div>

            <div className={`flex items-center justify-center bg-white rounded-full p-2 -mx-10 z-10 border-8 ${borderColor}`}>
                <img src={gameIcon} alt="game_icon" className="w-12 h-12 object-contain" />
            </div>

            <div className={`${bgColor} flex flex-col items-center text-end justify-center w-[220px] h-[200px] py-8 pr-4 pl-8 border-4 border-black ${direction === "flex-row" ? "border-l-0" : "border-r-0"} relative`}>
                <p className="uppercase font-bold text-white text-sm">{gameType}</p>
                <h4 className="text-xl font-bold text-white text-end">{gameTitle}</h4>
                <p className="text-sm text-white">{gameDescription}</p>
            </div>
        </div>
    )
}
