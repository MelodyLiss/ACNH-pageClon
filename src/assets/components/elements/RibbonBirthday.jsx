import './RibbonBirthday.css'
import tangy from '../../img/triciabella.webp'
import confetti from '../../img/confetti.png'
import regalo from '../../img/birthday-giftbox.png'


export const RibbonBirthday = () => {
    return (
        <section className="relative top-[-30px] sm:top-[-40px] z-20">
            {/* contenedor de la informacion y la imagen */}
            <div className="flex flex-col sm:flex-row items-center sm:justify-center md:justify-evenly 2xl:justify-center w-2/3 mx-auto relative z-10">
                {/* informacion del villager */}
                <div className="text-center pt-6">
                    <p className="text-amber-200 [text-shadow:_0_4px_4px_rgb(100_50_20_/_0.8)] text-xl md:text-2xl  sm:text-xl font-bold mb-4">Hoy es el cumpleaños de</p>
                    <h2 className="text-white [text-shadow:_0_4px_4px_rgb(100_50_20_/_0.8)] text-2xl md:text-3xl sm:text-2xl font-bold mb-4">Tangy</h2>
                    <div className="flex items-center justify-center pb-6">
                        <i className="fa-solid fa-caret-left text-3xl text-amber-200 px-4 py-2 bg-red-600 rounded-2xl mr-8 cursor-pointer hover:bg-red-700 transition-all duration-300"></i>
                        <i className="fa-solid fa-caret-right text-3xl text-amber-200 px-4 py-2 bg-red-600 rounded-2xl cursor-pointer hover:bg-red-700 transition-all duration-300"></i>
                    </div>
                </div>
                {/* imagen del villager */}

                <div>
                    <div className="relative w-[250px] h-[250px]">
                        <img src={tangy} alt="tangy" className="w-full h-full object-contain" />
                    </div>
                    {/* <img src={confetti} alt="confetti" className="w-100 absolute top-3 left-90 -z-10" /> */}
                </div>

                <div className="hidden sm:flex flex-col items-center justify-center w-[150px] h-[150px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] bg-red-600 rounded-full p-18 hover:bg-red-700 transition-all duration-300 cursor-pointer  ">
                    <div className="flex flex-col items-center justify-center h-full ">
                        <img src={regalo} alt="regalo" className=" sm:w-18 " />
                        <p className="text-amber-200 [text-shadow:_0_4px_4px_rgb(100_50_20_/_0.8)] font-bold text-sm sm:text-[12px] md:text-base lg:text-lg text-center w-[85%]">¡Celebra su cumpleaños!</p>
                    </div>
                </div>


            </div>

            {/* contenedor de la cinta */}
            <section className="ribbon bg-red-500 w-[90%] sm:w-full lg:w-250 xl:w-300 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[100%] sm:h-[95%] flex items-center justify-between ">
                {/* Aquí puedes agregar el contenido de la cinta */}
            </section>
        </section>
    )
}
