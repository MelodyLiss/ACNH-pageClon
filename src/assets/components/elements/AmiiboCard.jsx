export const AmiiboCard = ({ amiibo, nombre, className = "", refImg, refBG }) => {
    return (
        <div className={`flex flex-col items-center justify-center gap-4 p-4 ${className}`}>
            <div className="relative w-[250px] h-[250px] px-6 flex items-center justify-center">
                {/* Div de fondo absoluto */}
                <div
                    ref={refBG}
                    className="absolute inset-0 rounded-full bg-green-600"
                    style={{ zIndex: 0 }}
                ></div>

                {/* Imagen encima, con zIndex mayor */}
                <img
                    ref={refImg}
                    src={amiibo}
                    alt="amiibo"
                    className="w-[300px] scale-110 relative -top-5 hover:scale-120 amiibo-card"
                    style={{ zIndex: 1 }}
                />
            </div>
            <h3 className="text-center text-xl font-bold text-white max-w-[250px] bg-[rgba(20,83,45,0.6)] rounded-lg p-2">
                {nombre}
            </h3>
        </div>
    );
};
