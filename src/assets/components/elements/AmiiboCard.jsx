export const AmiiboCard = ({amiibo, nombre}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-4 p-4">
            <div className=" flex items-center justify-center bg-green-600 w-[250px] h-[250px] rounded-full px-6 ">
                <img src={amiibo} alt="amiibo" className="w-[300px] scale-110 relative -top-5 hover:scale-120"  />
            </div>
            <h3 className="text-center text-xl font-bold text-white max-w-[250px] bg-[rgba(20,83,45,0.6)] rounded-lg p-2">{nombre}</h3>
        </div>
    )
}
