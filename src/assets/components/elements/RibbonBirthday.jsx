import './RibbonBirthday.css'
import tangy from '../../img/triciabella.webp'
import confetti from '../../img/confetti.png'
import regalo from '../../img/birthday-giftbox.png'


export const RibbonBirthday = () => {
    return (
        <section className="relative top-[-60px] z-20">
            {/* contenedor de la informacion y la imagen */}
            <div className="flex items-center justify-evenly w-1/2 mx-auto relative z-10">
                {/* informacion del villager */}
                <div className="text-center">
                    <p className="text-amber-200 text-2xl font-bold mb-4">Hoy es el cumpleaños de</p>
                    <h2 className="text-white text-3xl font-bold mb-4">Tangy</h2>
                    <div className="flex items-center justify-center">
                        <i className="fa-solid fa-caret-left text-3xl text-amber-200 px-4 py-2 bg-red-500 rounded-2xl mr-8 cursor-pointer hover:bg-red-800 transition-all duration-300"></i>
                        <i className="fa-solid fa-caret-right text-3xl text-amber-200 px-4 py-2 bg-red-500 rounded-2xl cursor-pointer hover:bg-red-800 transition-all duration-300"></i>
                    </div>
                </div>
                {/* imagen del villager */}

                <div>
                    <div className="relative">
                        <img src={tangy} alt="tangy" className="w-2/3 relative " />
                    </div>
                    <img src={confetti} alt="confetti" className="w-1/3 absolute top-3 left-90 -z-10" />
                </div>

                <div className="flex flex-col items-center justify-center w-1/4 bg-red-500 rounded-full py-6 hover:bg-red-800 transition-all duration-300 cursor-pointer">
                    <img src={regalo} alt="regalo" className="w-1/3" />
                    <p className="text-amber-200 font-bold text-2xl text-center mb-4 w-1/2">¡Celebra su cumpleaños!</p>
                </div>


            </div>

            {/* contenedor de la cinta */}
            <section className="ribbon bg-red-600 w-7/12 mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[90%] flex items-center justify-between">

            </section>
        </section>
    )
}
